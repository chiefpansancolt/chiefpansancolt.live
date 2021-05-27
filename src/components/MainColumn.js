export default function MainColumn({children}) {
  return (
    <div className="flex-1 min-w-0 bg-gray-100 xl:flex">
      <div className="bg-gray-100 lg:min-w-0 lg:flex-1">
        <div className="h-full py-6 px-4 sm:px-6 lg:px-8">
          <div className="relative h-full min-h-[36rem]">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}