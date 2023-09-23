import { useState } from "react"


export const FormControlled = () => {
  const [name, setName] = useState('')
  const [checked, setChecked] = useState(false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const toggleChecked = () => {
    setChecked(!checked)
  }

  console.log('name', name)
  console.log('checked', checked)
  
  return (
    <form>
      <h2>Form Controlled</h2>
          <input type="text" value={name} onChange={handleChange} />
          <input type="checkbox" checked={checked} onChange={toggleChecked} />
          <button type="submit">Envoyer</button>
    </form>
  )
}
