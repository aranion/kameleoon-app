import './Header.sass'

interface Props {
  title: string
}

export function Header(props: Props) {
  return (
    <header>
      <h1 className="header">
        {props.title}
      </h1>
    </header>
  )
}