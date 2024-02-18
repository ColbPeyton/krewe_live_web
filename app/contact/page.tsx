"use client"

import ContactForm from './contact-form';

export default function Contact(){
    return(
        <div>
            <h1 className='text-3xl font-bold leading-9 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight'>
                Let's Chat
            </h1>
            <div className='border border-yellow-600 w-96 my-3'></div>
            <h4 className='text-1xl leading-9 text-gray-900 sm:text-1xl sm:tracking-tight'>
            Contact us today to learn more about our custom hi-resolution imaging exciting technology. Let us show you what we can do for you. 
            </h4>
            <ContactForm />
        </div>
    )
}