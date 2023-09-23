import { useState } from "react"
import { CGUCheckbox } from "./CGUCheckbox"


export const FormControlled = () => {
  const [name, setName] = useState('')
  const [checked, setChecked] = useState(false)


  const toggleChecked = (isChecked: boolean) => {
    setChecked(isChecked)
  }

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <h2>Form Controlled</h2>
      <input name="name" type="text" value={name} onChange={handleChangeName} />
      <CGUCheckbox checked={checked} onCheck={toggleChecked} />
      <button disabled={!checked} type="submit">Envoyer</button>
    </form>
  )
}
