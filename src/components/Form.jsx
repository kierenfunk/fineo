import React, { useState } from 'react';
import { Formik } from 'formik';

const Label = ({ children, ...props }) => (
  <label htmlFor={props.htmlFor} className="block w-full text-gray-200 p-1" {...props}>{children}</label>
);

const Input = ({ ...props }) => (
  <input className="w-full text-black px-4 py-2 rounded" {...props} />
);

const Error = ({ error, touched }) => {
  if (error && touched) return <p className="text-red-500 visible text-sm p-1">{error}</p>;
  return <p className="invisible text-sm p-1">undefined</p>;
};

const SubmitResponse = ({type,msg}) => {
  if(type==='fail'){
    return <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">{msg}</div>
  }
  else{
    return <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">{msg}</div>
  }
}

const Form = () => {
  const [submissionMessage, setSubmissionMessage] = useState(null)
  return(
  <div className="m-auto w-11/12 md:w-1/2 p-8 py-16">
    <h2 className="text-4xl text-gray-200 font-bold mb-4">Connect with us today</h2>
    <Formik
      initialValues={{ email: '', name: '', message: '' }}
      validate={(values) => {
        const errors = {};
        if (!values.name) errors.name = 'Required';
        if (!values.message) errors.message = 'Required';
        if (!values.email) errors.email = 'Required';
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) { errors.email = 'Invalid email address'; }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(async () => {
          try{
            setSubmitting(true);
            const response = await fetch(`${window.location.origin}/.netlify/functions/formHandler`, {
                method: 'POST',
                body: JSON.stringify({
                  data: values,
                }),
              });
              if (response.status !== 200) {
                setSubmissionMessage({type:'fail',msg:'There was a problem sending a message, try again later'})
              }
          } catch {
            setSubmissionMessage({type:'fail',msg:'There was a problem sending a message, try again later'})
          } finally {
            setSubmissionMessage({type:'success',msg:'Thank you for connecting with us, we will be in touch with you soon!'})
            setSubmitting(false);
          }
        }, 1000);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
          <Label htmlFor="name">Your full name:</Label>
          <Input type="name" name="name" onChange={handleChange} onBlur={handleBlur} value={values.name} />
          <Error error={errors.name} touched={touched.name} />

          <Label htmlFor="email">Your email address:</Label>
          <Input type="email" name="email" onChange={handleChange} onBlur={handleBlur} value={values.email} />
          <Error error={errors.email} touched={touched.email} />

          <Label htmlFor="message">How can we help you?</Label>
          <textarea
            className="w-full text-black px-4 py-2 rounded"
            rows={4}
            type="message"
            name="message"
            placeholder="type your message here..."
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.message}
          />
          <Error error={errors.message} touched={touched.message} />
          {submissionMessage? <SubmitResponse {...{...submissionMessage}}/> : null}
          <div className="text-center">
            <button className="border border-gray-200 text-gray-200 rounded px-4 py-2 text-lg my-4" type="submit" disabled={isSubmitting}>{isSubmitting ? 'Sending...' : 'Submit'}</button>
          </div>
        </form>
      )}
    </Formik>
  </div>
)};

export default Form;
