/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Simple from '@/components/navigation/Simple'
import FullWidthTwoColumn from '@/components/navigation/FullWidthTwoColumn'
import Link from '@/components/navigation/Link'
import MobileNav from '@/components/navigation/MobileNav'
import navigations from '@/data/navigation'

export default function Navigation() {
  return (
    <Popover>
      {({ open }) => (
        <>
          <div className="absolute inset-0 z-30 pointer-events-none" aria-hidden="true" />
          <div className="relative z-20 shadow">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-8 md:justify-start md:space-x-10">
              <div>
                <a href="/" className="flex">
                  <span className="sr-only">Chiefpansancolt</span>
                  <img
                    className="h-8 w-auto sm:h-10"
                    src="/img/logo/Black_Logo.png"
                    alt="Chiefpansancolt Logo"
                  />
                </a>
              </div>
              <div className="-mr-2 -my-2 md:hidden">
                <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500">
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
              <div className="hidden md:flex-1 md:flex md:items-center md:justify-center">
                <Popover.Group as="nav" className="flex space-x-10">
                  {navigations.map((item) => (
                    (item.type === "link"
                      ? <Link key={item.name} url={item.link} name={item.name} klass="font-medium text-gray-500 hover:text-gray-900"/>
                      : item.type === "simple"
                        ? <Simple key={item.name} items={item.sub} name={item.name} />
                        : item.type === "full-width-two-column"
                          ? <FullWidthTwoColumn key={item.name} name={item.name} docs={item.sub[0].columns} details={item.sub[1]} />
                          : "")
                  ))}
                </Popover.Group>
              </div>
            </div>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              static
              className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5 sm:pb-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <img
                        className="h-8 w-auto"
                        src="/img/logo/Black_Logo.png"
                        alt="Chiefpansancolt Logo"
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-6 sm:mt-8">
                    <nav className="grid gap-7 sm:grid-cols-2 sm:gap-y-8 sm:gap-x-4">
                      <div>
                        {navigations.map((item) => (
                          (item.name === "Documentation" ? <MobileNav key={item.name} docs={item.sub[0].columns}/> : "")
                        ))}
                      </div>
                    </nav>
                  </div>
                </div>
                <div className="py-6 px-5">
                  <div className="grid grid-cols-2 gap-4">
                    {navigations.map((item) => (
                      (item.name === "Videos"
                        ? <>
                            {item.sub.map((link) => (
                              <Link key={link.name} url={link.link} name={link.name} klass="rounded-md text-base font-medium text-gray-900 hover:text-gray-700"/>
                            ))}
                          </>
                        : item.name !== "Documentation" && item.name !== "Home" ? <Link key={item.name} url={item.link} name={item.name} klass="rounded-md text-base font-medium text-gray-900 hover:text-gray-700"/> : "")
                    ))}
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}
