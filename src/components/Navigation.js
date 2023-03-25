/* eslint-disable @next/next/no-img-element, @next/next/no-html-link-for-pages */
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Simple from '@/components/navigation/Simple'
import Link from '@/components/navigation/Link'
import navigations from '@/data/navigation'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header>
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Chiefpansancolt</span>
            <img
              className="h-8 w-auto sm:h-10"
              src="/img/logo/Black_Logo.png"
              alt="Chiefpansancolt Logo"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigations.main.map((item) => 
            item.type === 'link' ? (
              <Link
                key={item.name}
                url={item.link}
                name={item.name}
                klass="text-sm font-semibold leading-6 text-gray-500 hover:text-gray-900"
              />
            ) : item.type === 'simple' ? (
              <Simple key={item.name} items={item.sub} name={item.name} />
            ) : (
              ''
            )
          )}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Chiefpansancolt</span>
              <img
                className="h-8 w-auto sm:h-10"
                src="/img/logo/Logo_White.png"
                alt="Chiefpansancolt Logo"
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/25">
              <div className="space-y-2 py-6">
                {navigations.main.map((item) => (
                  <a
                    key={item.name}
                    href={item.link}
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
