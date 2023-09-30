import { useState } from "react"
import { CGUCheckbox } from "./CGUCheckbox"
import Input from "./Input"


export const FormControlled = () => {
  const [mail, setMail] = useState('')
  const [password, setPassword] = useState('')
  const [checked, setChecked] = useState(false)


  const toggleChecked = (isChecked: boolean) => {
    setChecked(isChecked)
  }

  const handleChangeMail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMail(event.target.value)
  }

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  const passwordSecurity = password.length > 8 ? 'Fort' : 'Faible'
  
  return (
    <form className=" w-96 flex flex-col gap-2" onSubmit={handleSubmit}>
      <h2>Form Controlled</h2>
      <Input name="mail" type="text" onChange={handleChangeMail} value={mail} label="Mail" />
      <Input name="password" type="password" onChange={handleChangePassword} value={password} label="Mot de passe" />
      <p>La sécurité de votre mot de passe est : {passwordSecurity}</p>
      <CGUCheckbox checked={checked} onCheck={toggleChecked} />
      <button disabled={!checked} type="submit">Envoyer</button>
    </form>
  )
}
