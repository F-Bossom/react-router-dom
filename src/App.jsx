import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PokemonList from './components/PokemonList/PokemonList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Pokemon</h1>
    <PokemonList />
    </>
  )
}

export default App
