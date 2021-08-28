import React, { useState } from 'react';
import './App.css';

function App() {

  const [ contagem, setContagem ] = useState(0);

  const botaoAction = () => {
    setContagem( contagem + 1 );
  };

  return (
    <>
      <div>{contagem} vezes</div>
      <button onClick={botaoAction}>Clique aqui</button>
    </>
  );
}

export default App; 
