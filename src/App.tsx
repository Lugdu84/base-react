import { FormControlled } from "./components/FormControllled"
import { FormUnControlled } from "./components/FormUncontrolled"
import { ShowIncrement } from "./components/ShowIncrement"
import { Title } from "./components/Title"
import './index.css'

function App() {

  return <div className="flex flex-col items-center gap-4">
    <Title name="Apprendre React avec Vite" color="blue" />
    <FormControlled />
    <FormUnControlled />
    <ShowIncrement />
  </div>
}

export default App
