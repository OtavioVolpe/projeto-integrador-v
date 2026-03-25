import { useState } from 'react'
import './App.css'

function App() {
  const [nomes, setNomes] = useState();
  const [nomeList, setNomeList] = useState([''])

  const adicionarNaLista = () => {
    setNomeList([...nomeList, nomes])
  }

  return (
    <div>
      <h1>Lista de Nomes</h1>
      
      <input type="text" onChange={(e) => setNomes(e.target.value)}></input>
      
      <button onClick={adicionarNaLista}>Adicionar</button>
      
        {nomeList.map((nomeList, index) => (
          <li key={index}>{nomeList}</li>
        ))}
    </div>
  )
}

export default App