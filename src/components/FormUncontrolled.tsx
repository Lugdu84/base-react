import Input from "./Input"


export const FormUnControlled = () => {

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = formData.get('name')
    const checked = formData.get('checked') === 'on'
    console.log('name', name)
    console.log('checked', checked)
  }
  
  return (
    <form className=" w-9/12 md:w-1/2 flex flex-col gap-2 p-2 border border-blue-700 rounded-lg" onSubmit={handleSubmit}>
      <h2>Form UnControlled</h2>
      <Input data-testid='name' name="name" type="text" label="Nom" defaultValue="" />
      <Input data-testid="checked" name="checked" type="checkbox" label="CGU" defaultChecked={false} />
      <button className="w-full bg-green-600 rounded-md py-2" type="submit">Envoyer</button>
    </form>
  )
}
