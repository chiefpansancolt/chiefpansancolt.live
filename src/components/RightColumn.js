export default function RightColumn({children}) {
  return (
    <div className="bg-gray-100 pr-4 sm:pr-6 lg:pr-8 lg:flex-shrink-0 lg:border-l lg:border-gray-200 xl:pr-0">
      <div className="h-full pl-6 pb-6 lg:w-80">
        <div className="h-full relative min-h-[16rem]">
          {children}
        </div>
      </div>
    </div>
  )
}