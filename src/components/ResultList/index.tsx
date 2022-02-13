import { Site, Test } from '../../context'
import { HeaderResults } from './HeaderResults'
import { Item } from './Item'
import { NoResults } from './NoResults'
import './ResultList.sass'

interface Props {
  filterTests: Test[];
  sites: Site[];
}

export function ResultList(props: Props) {
  const { filterTests, sites } = props

  if (filterTests && filterTests.length === 0) {
    return <NoResults />
  }

  return (
    <div className='resultList'>
      <HeaderResults /> 
      { filterTests.map( el => <Item key={el.id} test={el} sites={sites} />) }
    </div>
  )
}