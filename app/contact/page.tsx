"use client"

import ContactForm from './contact-form';
import SectionTitle from '../ui/section-title';

export default function Contact(){
    return(
        <div className='mx-2 mb-2 sm:mx-0'>
            <SectionTitle title={"Let's chat"} />
            <h4 className='text-1xl leading-9 text-gray-900 sm:text-1xl sm:tracking-tight'>
                Contact us today to learn more about our custom hi-resolution imaging exciting technology. Let us show you what we can do for you. 
            </h4>
            <ContactForm />
        </div>
    )
}