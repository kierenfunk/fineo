import React from 'react';
import Hero from '../components/Hero';
import Image from 'next/image';
import Form from '../components/Form';

const Section = ({children}) => (
    <div>
        {children}
    </div>
)

const Section1 = ({children, header, className}) => (
    <div className={`${className} px-8 md:px-20 py-8`}>
        <div className="inline-block border-b-2 text-gray-100 px-4 py-2">
            <h2 className="text-gray-100 font-bold text-4xl">
                {header}
            </h2>
        </div>
        <p className="text-gray-100 my-4 text-lg">{children}</p>
    </div>
)

const Section2 = ({children, header, imageSrc}) => (
    <div className="text-gray-700 text-center border-2 px-2 py-4 rounded">
        <div className="py-2">
            <Image src={imageSrc} width="100" height="100"/>
        </div>
        <h3 className="text-lg">{header}</h3>
        <p className="text-sm py-2">{children}</p>
    </div>
)

const Home = () => (
    <div className="bg-gray-100">
        <Hero/>
        <div className="px-20 bg-cube bg-repeat bg-left">
            <div className="">
                <Section1 header={"Automate"} className="bg-blue-900">
                    Build a more efficient business and automate away repetitive tasks.
                </Section1>
                <Section1 header={"Create"} className="bg-blue-800">
                    We design and build user friendly experiences to generate new leads.
                </Section1>
                <Section1 header={"Innovate"} className="bg-blue-700">
                    Use data you already have and turn it into business intelligence to become a more informed decision maker.
                </Section1>
            </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-20 gap-4 py-16">
                <Section2 imageSrc="/innovation.png" header="AI and Machine Learning">
                    Get ahead of your competition and utilise data together with the latest technology to build a smarter, more efficient business.
                </Section2>
                <Section2 imageSrc="/lead.png" header="Websites and Branding">
                    Stand out from your competition with a blazingly fast and professional website. We work collaboratively with you to
                    design a website that fits your brand and helps you generate leads.
                </Section2>
                <Section2 imageSrc="/analysis.png" header="Analytics and Reporting">
                    Understand your business on a deeper level with custom reporting. We can also analyse and validate your data, such as
                    finding invalid or inactive emails and phone numbers. 
                </Section2>
                <Section2 imageSrc="/bot.png" header="Automation and Bots">
                    We are experts in automating away time consuming tasks so you can spend more time working on the tasks that
                    bring you the most return.
                </Section2>
        </div>
        {/*
        <div className="px-20">
            <h2 className="text-gray-800 text-4xl font-bold my-2">Some of our favourite projects...</h2>
            <div className="flex flex-row">
                <h3 className="uppercase text-7xl italic font-bold py-16 bg-gray-200 w-full hover:bg-gray-300 text-gray-800 transition-all">Commission Monitoring</h3>
            </div>
        </div>
        <p>
            Commission Monitoring
                Use data analysis techniques to 
                Ensure you get paid the correct amount in commissions every month.
                Get a better understanding of your trail book and be in the know when something goes wrong.
            2. Custom integrations
                Standard integration tools dont take into account little details about your business causing easily avoidable problems.
                We do custom integrations with your aggregator software with other third party software required to make your business
                more efficient.
            3. Lender research assistant *coming soon*
                Given your client's unique situation, rank which lender is the best match for your client based on the lender's policies.
        </p>*/}
        <div className="bg-gray-900">
            <Form/>
            <div className="w-5/6 border-t m-auto text-center text-gray-200 p-4 text-sm">Copyright © 2021, Fineo Digital. All rights reserved.</div>
        </div>
    </div>
)

export default Home;