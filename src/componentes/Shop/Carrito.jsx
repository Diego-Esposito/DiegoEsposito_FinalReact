import { useState } from 'react';
import './Carrito.css'

export default function Carrito() {
  const counter = <Counter />;
  return (
    <div className='carrito'>
      {counter}
     
    </div>
  );
}

function Counter() {
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);

  let className = 'counter';
  if (hover) {
    className += ' hover';
  }

  return (
    <div
      className={className}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <h3>Carrito de compra</h3>
      <h1>{score}</h1>
      <button  onClick={() => setScore(score + 1)}>
        Agregar uno
      </button>
    </div>
  );
}


