import React from 'react';
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

const Form = () => (
  <div className="m-auto w-1/2 p-8 py-16">
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
        setTimeout(() => {
          // console.log(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
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
          <div className="text-center">
            <button className="border border-gray-200 text-gray-200 rounded px-4 py-2 text-lg my-4" type="submit" disabled={isSubmitting}>{isSubmitting ? 'Sending...' : 'Submit'}</button>
          </div>

        </form>
      )}
    </Formik>
  </div>
);

export default Form;
