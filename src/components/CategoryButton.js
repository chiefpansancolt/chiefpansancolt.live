import { useContext, useEffect } from 'react'
import useToggle from '@/hooks/useToggle'
import { PlusIcon, CheckIcon } from '@heroicons/react/outline'
// import { CategoryContext } from 'src/pages/pops'

export default function CategoryButton({name}) {
  const [active, setActive] = useToggle()
  // const { addCategory, removeCategory } = useContext(CategoryContext)

  // useEffect(() => {
  //   console.log('button')
  //   if (!active) {
  //     addCategory(name)
  //   } else {
  //     removeCategory(name)
  //   }
  // }, [active, name, addCategory, removeCategory])

  return (
    <button
      type="button"
      onClick={setActive}
      className="inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
    >
      {active ? <CheckIcon className="h-3 w-3"/> : <PlusIcon className="h-3 w-3"/>}
    </button>
  )
}