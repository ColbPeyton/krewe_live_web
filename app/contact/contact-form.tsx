import React, {FormEvent, useState} from "react";
import {ContactFormValues} from '../interfaces';
import axios from 'axios';


const ContactForm: React.FC = () => {
  const [fName, setFName] = useState<string>('');
  const [lName, setLName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  const resetForm = () => {
    setFName('');
    setLName('');
    setEmail('');
    setMessage('');
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const formData:ContactFormValues = {
      fName,
      lName,
      email,
      message
    }

    setIsLoading(true);

    try{
      const response = await axios.post('/api/contact', formData);
      console.log(response.data)
    }catch(error){
      console.log('Error sending email:' , error)
    }

    setIsLoading(false);

    resetForm();
  }

  return(
    <form onSubmit={handleSubmit}>
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
            First name
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="first-name"
              value={fName}
              onChange={(e) => setFName(e.target.value)}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-yellow-600 focus:ring-yellow-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
            Last name
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="last-name"
              value={lName}
              onChange={(e) => setLName(e.target.value)}
              autoComplete="family-name"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-yellow-600 focus:ring-yellow-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:col-span-6">
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
            Email address
          </label>
          <div className="mt-2">
            <input
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-yellow-600 focus:ring-yellow-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="col-span-full">
          <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900">
          Provide some info for your next event
          </label>
          <div className="mt-2">
            <textarea
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={3}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-yellow-600 focus:ring-yellow-600 sm:text-sm sm:leading-6"
              defaultValue={''}
            />
          </div>
        </div>
        <button
          type="submit"
          className="rounded-md bg-yellow-600 px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600 hover:-translate-y-1 hover:bg-yellow-700 hover:scale-110 duration-200"
        >
          Submit
        </button>
      </div>
    </form>
  )
}

export default ContactForm;
