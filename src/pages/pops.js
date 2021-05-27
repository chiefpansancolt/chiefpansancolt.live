import _ from 'lodash'
import PageHeading from '@/components/PageHeading'
import TwoColumn from '@/components/TwoColumn'
import MainColumn from '@/components/MainColumn'
import RightColumn from '@/components/RightColumn'
import PopCollection from '@/components/PopCollection'
import PopCategories from '@/components/PopCategories'
import categories from '@/data/pop-categories'
import pops from '@/data/pops'

export default function Pops() {
  const popSorted = _.orderBy(pops, ['group', 'number'])
  const categorySorted = _.orderBy(categories, ['name'])

  return (
    <div className="bg-gray-100">
      <PageHeading
        title="Pops!"
        heading="Chief's Pop! Collection"
        subHeading="This is Chief's Pop! Collection showcasing what Chief has collected over the years."
      />
      <TwoColumn>
        <MainColumn>
          <PopCollection data={popSorted} />
        </MainColumn>
        <RightColumn>
          <h2 className="text-center text-2xl font-bold pb-6">Categories</h2>
          <PopCategories data={categorySorted} pops={pops} />
        </RightColumn>
      </TwoColumn>
    </div>
  )
}
