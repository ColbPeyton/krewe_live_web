import Link from 'next/link';
import { PhoneIcon, BuildingOfficeIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

const Footer = () => {

    return(
        <div className="bg-neutral-900 text-white mt-auto w-full p-4 flex items-center justify-center">
            <div className="w-full flex flex-col text-center sm:max-w-[1000px] sm:flex-row sm:justify-around py-3">
                <div className='flex flex-col text-center sm:flex-row sm:justify-around md:w-1/2 sm:w-2/3'>
                    <div className="flex flex-col space-y-2 pb-2 sm:items-start mr-2">
                        <div className="flex-1">
                            <h1 className='text-2xl font-bold mb-1 sm:mb-0'>Krewe Live</h1>
                            <h5 className='text-lg text-yellow-400 font-light mb-2 block sm:hidden italic'>"It all begins right here"</h5>
                        </div>
                        <div className="flex-1 hidden sm:block">
                            <p>121 Fake Address Lane</p>
                            <p>Somewhere, LA 99999</p>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-2 pb-2 mb-2 justify-center sm:items-start">
                        <div className="flex-1">
                            <p> 
                                <PhoneIcon className="h-6 w-6 inline mr-2" /> 
                                <a href="tel:5043741401" className="hover:text-yellow-400">(504)-374-1401</a>
                            </p>
                        </div>
                        <div className="flex-1">
                            <p> 
                                <BuildingOfficeIcon className="h-6 w-6 inline mr-2" /> 
                                <a href="tel:5049133702" className="hover:text-yellow-400">(504)-913-3702</a>
                            </p>
                        </div>
                        <div className="flex-1">
                            <p>
                                <EnvelopeIcon className="h-6 w-6 inline mr-2" /> 
                                <a href="mailto:info@krewelive.com" className="hover:text-yellow-400">info@krewelive.com</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center pb-2 mt-2">
                    <div className="flex-1">
                        <Link href='/contact' className='rounded bg-yellow-600 text-white p-2'> 
                            CONTACT US
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer