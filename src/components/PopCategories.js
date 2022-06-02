/* eslint-disable @next/next/no-img-element */ 
import { groupCount } from '@/hooks/groupCount'
import CategoryButton from './CategoryButton'

export default function PopCategories({ data, pops }) {
  return (
    <div className="flow-root mt-6">
      <ul className="-my-5 divide-y divide-gray-200">
        {data.map((category) => (
          <li key={category.name} className="py-4">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <img
                  className="w-12"
                  src={`/img/pop-franchises/${category.image}`}
                  alt={`${category.name} Logo`}
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">{category.name}</p>
                <p className="text-sm text-gray-500 truncate">
                  {groupCount(category.name, pops) + ' Pops!'}
                </p>
              </div>
              <div>
                <CategoryButton name={category.name} />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
