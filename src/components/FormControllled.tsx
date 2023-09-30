import { useMemo, useState } from "react"
import { CGUCheckbox } from "./CGUCheckbox"
import Input from "./Input"


const passwordSecurity = (test: string) => test.length > 8 ? 'Fort' : 'Faible'

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

  const security = useMemo(() => {
    console.log('Calcul de la sécurité')
    return passwordSecurity(password)
  }, [password])

  
  return (
    <form className=" w-9/12 md:w-1/2 flex flex-col gap-2 p-2 border border-blue-700 rounded-lg" onSubmit={handleSubmit}>
      <h2 className=" text-center">Form Controlled</h2>
      <Input name="mail" type="text" onChange={handleChangeMail} value={mail} label="Mail" />
      <Input name="password" type="password" onChange={handleChangePassword} value={password} label="Mot de passe" />
      <p>La sécurité de votre mot de passe est : {security}</p>
      <CGUCheckbox checked={checked} onCheck={toggleChecked} />
      <button className="w-full bg-green-600 rounded-md py-2" disabled={!checked} type="submit">Envoyer</button>
    </form>
  )
}
