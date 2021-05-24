import Link from '@/components/navigation/Link'

export default function MobileNav({ docs }) {
  return (
    <>
      {docs.map((item) => (
        <div key={item.name}>
          {item.links.map((link) => (
            <Link
              key={link.name}
              url={link.href}
              name={link.name}
              klass="-m-3 flex items-center p-3 rounded-lg hover:bg-gray-50 text-base font-medium text-gray-900"
            />
          ))}
        </div>
      ))}
    </>
  )
}
