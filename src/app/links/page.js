/* eslint-disable @next/next/no-img-element */
import PageHeading from '@/components/PageHeading'
import links from '@/data/links'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Links() {
  return (
    <div className="bg-gray-100">
      <PageHeading
        title="Links"
        heading="External Links"
        subHeading="Check out all the different links to other sites that chief is active on for various items on the internet."
      />
      <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
        <div>
          {links.map((group) => (
            <div key={group.name} className="pt-6">
              <h2 className="text-base font-medium uppercase tracking-wide text-gray-500">
                {group.name}
              </h2>
              <ul className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
                {group.links.map((link) => (
                  <li key={link.name} className="col-span-1 flex rounded-md shadow-sm">
                    <div
                      className={classNames(
                        link.color,
                        'flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white'
                      )}
                    >
                      {link.img !== '' ? (
                        <img src={link.img} alt="eFuse Logo" />
                      ) : (
                        <link.icon className="h-8 w-8" />
                      )}
                    </div>
                    <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white">
                      <div className="flex-1 truncate px-4 py-2 text-sm">
                        <a
                          href={link.href}
                          className="font-medium text-gray-900 hover:text-gray-600"
                        >
                          {link.name}
                        </a>
                        <p className="text-gray-500">{link.handle}</p>
                      </div>
                      <div className="flex-shrink-0 pr-2">
                        <a
                          href={link.href}
                          target="blank"
                          className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-transparent bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                        >
                          <span className="sr-only">Open options</span>
                          <ArrowTopRightOnSquareIcon className="h-5 w-5" aria-hidden="true" />
                        </a>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
