import { useState } from 'react'
import './App.css'
import ImageRickMorty from './image/rick-morty.png'
import Characters from './Components/Characters';

function App() {
  const [characters, setCharacters] = useState(null);

  const reqApi = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character");

    const charactersApi = await api.json();
    setCharacters(charactersApi.results);
  };

  return (
    <div className='App'>
      <header className='App-header'>
      <h1 className='title'>Rick & Morty</h1>
      {characters ? (
        <Characters characters={characters} setCharacters={setCharacters} />
      ) : (
      <>
      <img src={ImageRickMorty} alt='Rick & Morty' className='img-home' />
      <button onClick={reqApi} className='btn-search'>Buscar personajes</button>
      </>
      )}
      </header>
    </div>
  )
}

export default App
