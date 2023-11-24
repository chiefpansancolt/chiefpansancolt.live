/* eslint-disable @next/next/no-img-element */
import navigations from '@/data/navigation'
import social from '@/data/social'

export default function Footer() {
  return (
    <footer className="bg-gray-800">
      <div className="mx-auto max-w-7xl overflow-hidden px-4 py-12 sm:px-6 lg:px-8">
        <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
          {navigations.footer.map((item) => (
            <div key={item.name} className="px-5 py-2">
              <a href={item.href} className="text-base text-gray-200 hover:text-gray-400">
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <div className="mt-8 flex justify-center space-x-6">
          {social.map((item) => (
            <a key={item.name} href={item.href} className="text-gray-200">
              <span className="sr-only">{item.name}</span>
              {item.img ? (
                <img src={item.img} className="h-6 w-10" alt="" />
              ) : (
                <item.icon className={`${item.hover} h-6 w-6`} aria-hidden="true" />
              )}
            </a>
          ))}
        </div>
        <p className="mt-8 text-center text-base text-gray-200">
          &copy; 2023 Chiefpansancolt, All rights reserved.
        </p>
      </div>
    </footer>
  )
}
