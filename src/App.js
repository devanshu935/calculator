import CalculatorRow from './CalculatorRow';
import './App.css';
import { useState } from 'react';

const buttons = [['C', '+/-', '%', '/'],
['7', '8', '9', '*'],
['4', '5', '6', '-'],
['1', '2', '3', '+'],
['0', '', '.', '=']];

function App() {
  const [expression, setExpression] = useState('');

  function handleClick(e) {
    console.log(e.target.textContent);
    if (e.target.textContent === "C") {
      setExpression("");
      return;
    }
    if (!expression && typeof parseInt(e.target.textContent) !== "number") {
      return;
    }
    if (e.target.textContent === "=") {
      if (expression) {
        // eslint-disable-next-line 
        const output = eval(expression);
        setExpression(output);
      }
    } else setExpression((prev) => `${prev}${e.target.textContent}`);
  }

  return (
    <div className="App" style={{ marginTop: "200px" }}>
      <div style={{ width: "240px", margin: "auto" }}>
        <input style= {{width: "100%"}} value={expression} />
      </div>
      <div>
        {buttons.map(arr => {
          return (
            <CalculatorRow buttons={arr} onClick={handleClick} />
          )
        })}
      </div>
    </div>
  )
}

export default App;
