import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

type ClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => void;

function App() {
    const handleClick: ClickHandler = (event) => {
        console.log(event);
        // Здесь можно добавить дополнительную логику обработки события
    };

  return (
  <div>
      <h1>Привет Андрей!</h1>
      <button onClick={handleClick}>Жми сюда!</button>
  </div>
  )
}

export default App
