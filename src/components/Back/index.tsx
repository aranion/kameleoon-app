import { useNavigate } from 'react-router-dom'
import './Back.sass'

export function Back() {
  const navigate = useNavigate()

  const handelBack = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    navigate('/')
  }

  return (
    <button className='back' onClick={e=>handelBack(e)}>
      <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.10419 16L0.937805 8.83362L0.104186 8L0.937805 7.16638L8.10419 0L8.93781 0.833619L1.77142 8L8.93781 15.1664L8.10419 16Z" fill="#222222"/>
      </svg>
      Back
    </button>
  )
}