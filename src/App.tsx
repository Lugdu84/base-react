import { FormControlled } from "./components/FormControllled"
import { FormUnControlled } from "./components/FormUncontrolled"
import { ShowIncrement } from "./components/ShowIncrement"
import { Title } from "./components/Title"
import { Post, useFetch } from "./hooks/useFetch"
import './index.css'

function App() {

  const { loading, data, errors } = useFetch({url: 'https://jsonplaceholder.typicode.com/posts', limit: 10})

  return <div className="flex flex-col items-center gap-4">
    <Title name="Apprendre React avec Vite" color="blue" />
    <FormControlled />
    <FormUnControlled />
    <ShowIncrement />
    {loading && <p>Chargement...</p>}
    {errors && <p>Une erreur est survenue</p>}
    {data && !loading && <div className="w-9/12 md:w-1/2 flex flex-col gap-2 p-2 border border-blue-700 rounded-lg">
      <ul>
        {data.map((post: Post) => <li key={post.id}>Title : {post.title}</li>)}
      </ul>
      </div>
      }
  </div>
}

export default App
