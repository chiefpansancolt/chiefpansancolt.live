import _ from 'lodash'
import { createContext, useCallback, useEffect, useState } from 'react'
import PageHeading from '@/components/PageHeading'
import TwoColumn from '@/components/TwoColumn'
import MainColumn from '@/components/MainColumn'
import RightColumn from '@/components/RightColumn'
import PopCollection from '@/components/PopCollection'
import PopCategories from '@/components/PopCategories'
import categories from '@/data/pop-categories'
import myPops from '@/data/pops'

export const CategoryContext = createContext()

function useCategorySorter(availablePops) {
  console.log('running')
  let [pops, setPops] = useState(availablePops)
  let [groups, setGroups] = useState([])
  const addCategory = useCallback(
    (name) => {
      setGroups(groups.push(name))
      console.log(groups)
      if (groups.length === 0) {
        setPops(_.orderBy(pops, ['group', 'number']))
      } else {
        setPops(
          _.filter(pops, function (o) {
            return groups.includes(o.group)
          })
        )
      }
    },
    [groups, pops]
  )

  const removeCategory = useCallback(
    (name) => {
      setGroups((groups) =>
        groups.filter(function (g) {
          return g !== name
        })
      )
      console.log(groups)
      if (groups.length === 0) {
        setPops(_.orderBy(pops, ['group', 'number']))
      } else {
        setPops(
          _.filter(pops, function (o) {
            return groups.includes(o.group)
          })
        )
      }
    },
    [groups, pops]
  )

  useCallback(() => {
    console.log(groups)
    if (groups.length === 0) {
      setPops(_.orderBy(pops, ['group', 'number']))
    } else {
      setPops(
        _.filter(pops, function (o) {
          return groups.includes(o.group)
        })
      )
    }
  }, [groups, pops])

  return { pops, addCategory, removeCategory }
}

export default function Pops() {
  const { pops, addCategory, removeCategory } = useCategorySorter(myPops)
  const categorySorted = _.orderBy(categories, ['name'])

  return (
    <div className="bg-gray-100">
      <PageHeading
        title="Pops!"
        heading="Chief's Pop! Collection"
        subHeading="This is Chief's Pop! Collection showcasing what Chief has collected over the years."
      />
      <TwoColumn>
        <CategoryContext.Provider value={{ addCategory, removeCategory }}>
          <MainColumn>
            <PopCollection data={pops} />
          </MainColumn>
          <RightColumn>
            <h2 className="text-center text-2xl font-bold pb-6">Categories</h2>
            <PopCategories data={categorySorted} pops={myPops} />
          </RightColumn>
        </CategoryContext.Provider>
      </TwoColumn>
    </div>
  )
}
