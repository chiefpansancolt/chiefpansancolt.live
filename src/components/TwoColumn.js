export default function TwoColumn({children}) {
  return (
    <div className="flex-grow w-full max-w-7xl mx-auto xl:px-8 lg:flex">
      {children}
    </div>
  )
}