import { useContext } from 'react'
import { ContextData, Data } from '../../../context'
import { Button } from '../Button'
import './NoResults.sass'

export function NoResults() {
  const { resetFilter } = (useContext(ContextData) as Data)

  const action = () : void => {
    resetFilter()
  }

  return (
    <div className="noResults">
      <span className='noResults__message'>Your search did not match any results.</span>
      <Button title='Reset' action={action}/>
    </div>
  )
}