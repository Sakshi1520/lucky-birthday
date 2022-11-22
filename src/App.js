import { useState } from "react";
import './App.css';

function App() {
  const [date, setDate] = useState();
  const [number, setNumber] = useState(0);
  const [message, setMessage] = useState('');

  function isLucky() {
    const sum = getSum();
    if(sum % number === 0) {
      setMessage(`Yayy! ${number} is Luckyy🥳🥳`);
    }
    else {
      setMessage(`Oops! ${number} is not so Lucky 😕`);
    }
  }

  function getSum() {
    const dateArray = date.replaceAll('-', '').split("");
    let sum = 0;
    dateArray.forEach((e) => {
      sum = sum + (+e);
    });
    return sum;
  }

  return (
    <div className="App">
      <h1 className="title">Is your birthday lucky?🤔</h1>
      <div className="input--container">
        <label className="input--label" htmlFor='birth-date'>Date Of Birth:</label>
        <input className="input" type='date' name='birth-date' onSelect={(e) => setDate(e.target.value)}/>
      </div>
      <div className="input--container">
        <label className="input--label" htmlFor="lucky-number">Lucky Number:</label>
        <input className="input" type="number" name="lucky-number" onInput={(e) => setNumber(e.target.value)} />
      </div>
      <button className="button" onClick={isLucky}>Check</button>
      <p className="message">{message}</p>
    </div>
  );
}

export default App;
