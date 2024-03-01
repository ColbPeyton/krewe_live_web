import Link from 'next/link';
import { PhoneIcon, BuildingOfficeIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

const Footer = () => {

    // return(
    //     <div className="bottom-0 border-t-8 border-t-yellow-500 bg-neutral-900 text-white mt-auto w-full p-4 flex items-center justify-center">
    //         <div className="w-full flex flex-col text-center sm:max-w-[1000px] sm:flex-row sm:justify-around py-3">
    //             <div className='flex flex-col text-center sm:flex-row sm:justify-around md:w-1/2 sm:w-2/3'>
    //                 <div className="flex flex-col space-y-2 pb-2 sm:items-start mr-2">
    //                     <div className="flex-1">
    //                         <h1 className='text-2xl font-bold mb-1 sm:mb-0'>Krewe Live</h1>
    //                         <h5 className='text-lg text-yellow-400 font-light mb-2 block sm:hidden italic'>"It all begins right here"</h5>
    //                     </div>
    //                     <div className="flex-1 hidden sm:block">
    //                         <p>121 Fake Address Lane</p>
    //                         <p>Somewhere, LA 99999</p>
    //                     </div>
    //                 </div>
    //                 <div className="flex flex-row space-y-2 pb-2 mb-2 justify-center sm:items-start sm:flex-col">
    //                     <div className='block flex flex-row w-full justify-around items-center sm:hidden'>
    //                         <a className="p-2" href="tel:5043741401">
    //                             <PhoneIcon className="h-6 w-6 inline" />
    //                         </a>
    //                         <a className="p-2" href="tel:5049133702">
    //                             <BuildingOfficeIcon className="h-6 w-6 inline" />
    //                         </a>
    //                         <a className="p-2" href="mailto:info@krewelive.com">
    //                             <EnvelopeIcon className="h-6 w-6 inline" />
    //                         </a>
    //                     </div>
    //                     <div className="flex-1 hidden sm:inline-block">
    //                         <p> 
    //                             <PhoneIcon className="h-6 w-6 inline mr-2" /> 
    //                             <a href="tel:5043741401" className="hover:text-yellow-400">(504)-374-1401</a>
    //                         </p>
    //                     </div>
    //                     <div className="flex-1 hidden sm:inline-block">
    //                         <p> 
    //                             <BuildingOfficeIcon className="h-6 w-6 inline mr-2" /> 
    //                             <a href="tel:5049133702" className="hover:text-yellow-400">(504)-913-3702</a>
    //                         </p>
    //                     </div>
    //                     <div className="flex-1 hidden sm:inline-block">
    //                         <p>
    //                             <EnvelopeIcon className="h-6 w-6 inline mr-2" /> 
    //                             <a href="mailto:info@krewelive.com" className="hover:text-yellow-400">info@krewelive.com</a>
    //                         </p>
    //                     </div>
    //                 </div>
    //             </div>
    //             <div className="flex justify-center items-center pb-2 mt-2">
    //                 <div className="flex-1">
    //                     <Link href='/contact' className='rounded bg-yellow-600 text-white p-2'> 
    //                         CONTACT US
    //                     </Link>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // )

    return(
        <footer className="border-t-8 border-t-yellow-500 bg-neutral-900 mt-auto w-full">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src="https://tailwindui.com/img/logos/mark.svg?color=yellow&shade=500" className="h-8" alt="Krewe Live Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Krewe Live</span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="/about" className="hover:underline me-4 md:me-6">About</a>
                        </li>
                        <li>
                            <a href="/contact" className="hover:underline me-4 md:me-6">Contact</a>
                        </li>
                        <li>
                            <a href="/gallery" className="hover:underline">Gallery</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="#" className="hover:underline">Krewe Live</a>. All Rights Reserved.</span>
            </div>
        </footer>
    )
}

export default Footer