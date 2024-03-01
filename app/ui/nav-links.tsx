'use client';

import React, {useState} from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

interface navigationInterface{
  name: string,
  href: string
}

const navigation: Array<navigationInterface> = [
  { name: 'Home', href: '/'},
  { name: 'About', href: '/about'},
  { name: 'Contact', href: '/contact'},
  { name: 'Gallery', href: '/gallery'},
]

function classNames(...classes: Array<string>) {
  return classes.filter(Boolean).join(' ')
}

// bg-neutral-600
// bg-neutral-900

// bg-stone-50
// bg-stone-300

// bg-amber-300
// bg-yellow-400	
// bg-yellow-600

export default function NavLinks() {
  const pathname = usePathname();
  const [open, setOpen] = useState<boolean>(false)

  const renderOptions = (isMobile: boolean = false) => {

    const applyStyles = (item: navigationInterface) => {

      return(
        classNames( 
          pathname === item.href ? 
            'bg-yellow-600 text-white' : 
            'text-gray-300 hover:bg-neutral-600 hover:text-white',
          `${!isMobile ? 'rounded-md px-3 py-2 text-sm font-medium' : 'block rounded-md px-3 py-2 text-base font-medium text-center'}`
        )
      )
    }

    if(isMobile && !open){
      return;
    }

    if(isMobile && open){
      setTimeout(()=> {}, 1000);
    }
      
    return navigation.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          onClick={() => setOpen(false)}
          className={applyStyles(item)}
          aria-current={pathname === item.href ? 'page' : undefined}
        >
          {item.name}
        </Link>
      ))

  }

  return (
    <nav className="bg-neutral-900 border-b-8 border-b-yellow-500 no-underline z-50 fixed w-full sm:static">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
              <div className="flex flex-shrink-0 items-center">
                <div className="hidden sm:block mr-4">
                  <h1 className='text-sm text-xl font-medium text-gray-300'>Krewe Live</h1>
                </div>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=yellow&shade=500"
                  alt="Krewe Live"
                />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {renderOptions()}
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
              <button 
                className="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-yellow-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-600"
                onClick={() => setOpen(!open)}>
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
          <div className={`transition-all ease-linear bg-neutral-800 ${!open ? 'h-0' : 'h-48'}`}>
            <div className="space-y-1 px-2 pb-3 pt-2">
              {renderOptions(true)}
            </div>
        </div>
    </nav>
  )
}