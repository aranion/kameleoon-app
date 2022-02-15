import { useContext, useState } from 'react'
import { ContextData, Data } from '../../../context'
import './HeaderResults.sass'

interface HeadName {
  title: string; 
  sort: boolean;
}
export const HeaderResults = () => {

  const { sortTests } = (useContext(ContextData) as Data)

  const [sortASCorDESC, setSortASCorDESC] = useState('')

  const [headName, setHeadName] = useState(
    [
      {title: 'name', sort: false}, 
      {title: 'type', sort: false},
      {title: 'status', sort: false},
      {title: 'site', sort: false}
    ] as HeadName[]
  )

  const handleHeader = (e:  React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation()
    e.isPropagationStopped()

    const target = (e.target as HTMLElement)

    if(target.tagName !== 'SPAN') return

    const targetTitle = target.innerText.toLowerCase()

    if (sortASCorDESC !== targetTitle ) {
      setSortASCorDESC(targetTitle)
      sortTests(targetTitle)
    } else {  
      sortTests(targetTitle, true)
    }

    target.querySelector('svg')?.classList.toggle('revers')

    setHeadName((state: HeadName[]) => {
      return state.map( el => {
        if (el.title === targetTitle) el.sort = true
        else el.sort = false
        return el
      })
    })
  }

  return (
    <div className={`head`} onClick={ e => handleHeader(e) } >
      {
        headName.map((el,i) => {
          return (
            <span key={i} className={`head__title head__title_${el.title}`} >
              {el.title}
              <svg className={`head__svg ${el.sort ? '' : 'hidden'}`}  viewBox="0 0 7 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 3.50001L3.13529 0.364716L3.5 7.15256e-06L3.86471 0.364716L7 3.50001L6.63529 3.86472L3.5 0.729424L0.364708 3.86472L0 3.50001Z" fill="#999999"/>
              </svg>
            </span>
          )
        })
      }
    </div>
  )
}