import { useParams } from 'react-router-dom'

function Repo() {
  const { id } = useParams()

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-4">Repo</h1>
      <p className="text-gray-400">Repo token page for: {id}</p>
    </div>
  )
}

export default Repo
