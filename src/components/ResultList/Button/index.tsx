import { useNavigate } from 'react-router-dom'
import './Button.sass'

interface Props {
  title: string;
  url?: string;
  action?: Function
}

export function Button(props: Props) {
  const { url, title, action } = props;

  const navigate = useNavigate()

  const handleBtn = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    if (url) navigate(url)
    if (action) action()
  }

  return (
    <button 
      className={`button ${title.toLowerCase()  === 'finalize' ? 'bgGrey' : ''}`}
      onClick={ e => handleBtn(e)}
    >
      {title}
    </button>
  )
}