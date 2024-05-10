import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const tdy = new Date();
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  function reset() {
    setStep(1);
    setCount(0);
  }

  return (
    <div>
      <div>
        <p>
          0
          <input
            type="range"
            min="0"
            max="10"
            value={step}
            onChange={(e) => setStep(Number(e.target.value))}
          />
          10
        </p>
      </div>
      <div>
        {<button onClick={(c) => setCount(count - step)}>-</button>}
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        {<button onClick={() => setCount(count + step)}>+</button>}
      </div>
      <p style={{ fontSize: "20px" }}>
        {`${Math.abs(count)} days ${count < 0 ? "before" : "from"} today is 
        ${new Date(tdy.setDate(tdy.getDate() + count)).toDateString()}`}
      </p>
      {count !== 0 && <button onClick={reset}>Reset</button>}
    </div>
  );
}
