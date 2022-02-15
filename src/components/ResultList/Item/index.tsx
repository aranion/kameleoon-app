import { Site, Test } from '../../../context'
import { Button } from '../Button'
import './item.sass'

interface Props {
  test: Test;
  sites: Site[];
}

export enum Status {
  DRAFT = "DRAFT",
  ONLINE = "ONLINE",
  PAUSED = "PAUSED",
  STOPPED = "STOPPED",
}

export function Item(props: Props) {
  const { test, sites } = props

  const changeCase = (value: string): string => {
    if(value === 'MVT') {
      return value
    }
    value = value.toLocaleLowerCase() 
    return value.charAt(0).toUpperCase() + value.slice(1)
  }

  const findSiteById = (siteId: number): string => {
    return sites.find(el => el.id === siteId )?.url || ''
  }

  const changeUrlSite = (url: string): string => {
    return url.replace(/(http(s?)):\/\/(www\.)?/g, '')
  }

  const getNameStyleSite = (site: string): string => {
    return `item__border_${site.split('.')[0].toLowerCase()}`
  }

  return (
    <div className={`item ${getNameStyleSite(changeUrlSite(findSiteById(test.siteId)))}`}>
      <div className='item__name'>
        {test.name}
      </div>
      <div className=''>
        {changeCase(test.type)}
      </div>
      <div className={`item__status_${Status[test.status as Status].toLowerCase()}`}>
        {changeCase(test.status)}
      </div>
      <div className='item__site'>
        {changeUrlSite(findSiteById(test.siteId))}
      </div>
      <div className='item__button'>
        {test.status.toLowerCase() === 'draft' 
          ? <Button title='Finalize' url={`/finalize/${test.id}`}/>
          : <Button title='Results' url={`/results/${test.id}`}/>
        } 
      </div>
    </div>
  )
}