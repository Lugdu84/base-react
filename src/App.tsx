import { FormControlled } from "./components/FormControllled"
import { FormUnControlled } from "./components/FormUncontrolled"
import { Title } from "./components/Title"
import './index.css'

function App() {

  return <>
    <Title name="Apprendre React avec Vite" color="blue" />
    <FormControlled />
    <FormUnControlled />
  </>
}

export default App
