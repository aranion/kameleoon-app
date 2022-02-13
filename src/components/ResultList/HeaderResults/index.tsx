import { useContext, useState } from 'react'
import { ContextData, Data } from '../../../context'
import './HeaderResults.sass'

export const HeaderResults = () => {

  const { sortTests } = (useContext(ContextData) as Data)

  const [sortASCorDESC, setSortASCorDESC] = useState('')

  const headName: Array<{title: string, style: string}> = [
    {title: 'name', style: 'head__title_name'}, 
    {title: 'type', style: 'head__title_type'},
    {title: 'status', style: 'head__title_status'},
    {title: 'site', style: 'head__title_site'}
  ]

  const handleHeader = (e:  React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = (e.target as HTMLElement).innerText.toLowerCase()

    if (!sortASCorDESC || sortASCorDESC !== target ) {
      setSortASCorDESC(target)
      sortTests(target)
    } else {  
      sortTests(target, true)
    }
    
  }

  return (
    <div className={`head`} onClick={ e => handleHeader(e) }>
      {
        headName.map((el,i) => {
          return (
            <span key={i} className={`head__title ${el.style}`} >
              {el.title }
              <svg className='head__hidden' width="7" height="4"  viewBox="0 0 7 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 3.50001L3.13529 0.364716L3.5 7.15256e-06L3.86471 0.364716L7 3.50001L6.63529 3.86472L3.5 0.729424L0.364708 3.86472L0 3.50001Z" fill="#999999"/>
              </svg>
            </span>
          )
        })
      }
    </div>
  )
}