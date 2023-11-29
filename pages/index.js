import React, { useState } from 'react';

function Home() {
  const [clickedCount, setClickedCount] = useState(0);
  const [secretOptionUnlocked, setSecretOptionUnlocked] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleButtonClick = () => {
    setClickedCount(clickedCount + 1);

    // Se três botões foram clicados, desbloqueie a opção secreta
    if (clickedCount + 1 === 3) {
      setSecretOptionUnlocked(true);
    }
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleMouseOver = (event) => {
    // Muda a cor do botão invisível quando o mouse passa sobre ele
    event.target.style.backgroundColor = 'lightblue';
  };

  const handleMouseOut = (event) => {
    // Restaura a cor original quando o mouse sai do botão invisível
    event.target.style.backgroundColor = 'blue';
  };

  return (
    <div>
      <p>
        <strong>Opa Opa, Parabéns! Você é a primeira pessoa que ganhou isso.</strong>
      </p>
      <p>Voce ganhou um VALE com três Opções de encontro.</p>
      <select name="select" onChange={handleOptionChange}>
        <option value="valor1">Vale Sushi</option>
        <option value="valor2">Vale Parque</option>
        <option value="valor3">Vale Cinema</option>
        {secretOptionUnlocked && <option value="valor4">Da sua escolha</option>}
      </select>

      {/* Botões invisíveis */}
      <button
        style={{ opacity: 0, backgroundColor: 'blue', cursor: 'pointer' }}
        onClick={handleButtonClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Botão Invisível 1
      </button>
      <button
        style={{ opacity: 0, backgroundColor: 'blue', cursor: 'pointer' }}
        onClick={handleButtonClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Botão Invisível 2
      </button>
      <button
        style={{ opacity: 0, backgroundColor: 'blue', cursor: 'pointer' }}
        onClick={handleButtonClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Botão Invisível 3
      </button>
    </div>
  );
}

export default Home;
