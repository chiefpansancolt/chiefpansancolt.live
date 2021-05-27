import { XIcon, CheckIcon } from '@heroicons/react/outline'
import { groupCount } from '@/hooks/groupCount'

export default function PopCategories({data, pops}) {
  return (
    <div className="flow-root mt-6">
      <ul className="-my-5 divide-y divide-gray-200">
        {data.map((category) => (
          <li key={category.name} className="py-4">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <img className="w-12" src={`/img/pop-franchises/${category.image}`} alt={`${category.name} Logo`} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">{category.name}</p>
                <p className="text-sm text-gray-500 truncate">{groupCount(category.name, pops) + ' Pops!'}</p>
              </div>
              <div>
                <button
                  type="button"
                  className="inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                >
                  {category.selected ? <XIcon className="h-3 w-3"/> : <CheckIcon className="h-3 w-3"/>}
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}