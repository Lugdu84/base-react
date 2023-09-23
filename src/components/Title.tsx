
type TitleProps = {
    name: string;
    color: string;
}

export const Title = ({name, color} : TitleProps) => {
  return (
    <h1 style={{ color: color}}>{ name }</h1>
  )
}

