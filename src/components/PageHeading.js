export default function PageHeading({title, heading, subHeading}) {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-purple-600 tracking-wide uppercase">{title}</h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">{heading}</p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">{subHeading}</p>
        </div>
      </div>
    </div>
  )
}