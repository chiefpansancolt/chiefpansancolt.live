import links from '@/data/links'
import { ExternalLinkIcon } from '@heroicons/react/solid'
import PageHeading from '@/components/PageHeading'

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
      <div className="max-w-7xl mx-auto pb-16 px-4 sm:pb-24 sm:px-6 lg:px-8">
        <div>
          {links.map((group) => (
            <div key={group.name} className="pt-6">
              <h2 className="text-gray-500 text-base font-medium uppercase tracking-wide">
                {group.name}
              </h2>
              <ul className="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {group.links.map((link) => (
                  <li key={link.name} className="col-span-1 flex shadow-sm rounded-md">
                    <div
                      className={classNames(
                        link.color,
                        'flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md'
                      )}
                    >
                      {link.img !== '' ? (
                        <img src={link.img} alt="eFuse Logo" />
                      ) : (
                        <link.icon className="h-8 w-8" />
                      )}
                    </div>
                    <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                      <div className="flex-1 px-4 py-2 text-sm truncate">
                        <a
                          href={link.href}
                          className="text-gray-900 font-medium hover:text-gray-600"
                        >
                          {link.name}
                        </a>
                        <p className="text-gray-500">{link.handle}</p>
                      </div>
                      <div className="flex-shrink-0 pr-2">
                        <a
                          href={link.href}
                          target="blank"
                          className="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                        >
                          <span className="sr-only">Open options</span>
                          <ExternalLinkIcon className="w-5 h-5" aria-hidden="true" />
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
