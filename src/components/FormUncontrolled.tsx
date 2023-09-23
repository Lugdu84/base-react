

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
    <form onSubmit={handleSubmit}>
      <h2>Form UnControlled</h2>
          <input name="name" type="text" defaultValue={""}  />
          <input name="checked" type="checkbox" defaultChecked={false} />
          <button type="submit">Envoyer</button>
    </form>
  )
}
