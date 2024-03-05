"use client"

import ContactForm from './contact-form';
import SectionTitle from '../ui/section-title';
import PageTitle from '../ui/page-title';
// Trust Krewe Live for all your production needs and elevate your event to the next level.
export default function Contact(){
    return(
        <div>
            <PageTitle 
                title={'Elevate your event to the next level.'} 
                colorThemeFrom='from-yellow-500'
                colorThemeTo='to-orange-700'
                />
            <div className='my-2'/>
            <SectionTitle title={"Let's chat"} />
            <div className='ml-2 text-gray-900'>
                <h4 className='text-xl leading-9 font-light sm:text-1xl sm:tracking-tight mb-4'>
                    Whether you're planning a live event, concert, corporate function, or any other 
                    production, we've got you covered with a wealth of knowledge and a commitment to 
                    excellence. Our team is dedicated to ensuring your vision comes to life seamlessly, 
                    providing the resources and support you need to create unforgettable experiences.
                </h4>
                <p className='mb-0'>Give us a call at 
                    <a href="tel:5049133702" className="text-amber-600 hover:text-orange-600 mx-1">(504)-913-3702</a> 
                    or fill out the form below and we'll be in touch.
                </p>
            </div>
            <div className='mx-2'>
                <ContactForm />
            </div>
        </div>
    )
}