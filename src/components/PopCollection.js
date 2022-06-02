/* eslint-disable @next/next/no-img-element */
export default function PopCollection({ data }) {
  return (
    <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
      {data.map((pop) => (
        <li key={pop.number} className="relative">
          <div className="w-full aspect-w-12 aspect-h-12 rounded-lg bg-gray-100 overflow-hidden transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow">
            <img src={pop.img} alt={`${pop.name} img`} className="object-cover" />
          </div>
          <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
            {pop.name}
          </p>
          <p className="block text-sm font-medium text-gray-500 pointer-events-none">{pop.group}</p>
          <span className="absolute top-2 right-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-purple-600 text-gray-50">
            {pop.number}
          </span>
        </li>
      ))}
    </ul>
  )
}
