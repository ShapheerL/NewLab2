import './App.css';
import { useState } from 'react';

const App = () => {
const [count, setCount] = useState(0);
const[multiplier, setMultipier] = useState(1);
const updateCount = () => setCount(count + multiplier);

  return (
    <div className="App">
      <h1>Samosa Selector</h1>
      <h2>Count: </h2>
      <img className='samosa' src='.\src\assets\pngwing.com.png' onClick={updateCount}></img>
    </div>
  )
}

export default App 