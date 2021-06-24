import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(12);

  // setTimeout(() => {
  //   setCounter(counter + 1);

  // }, 1000);

  const handleClick = () => {
    // if (counter === 15) debugger;
    setCounter(counter + 1);
  };
  console.log("rendering...", counter);
  return (
    <div className="App">
      <header className="App-header">
        <p>This is a simpleCounter</p>
        <strong>{counter}</strong>

        <br />
        <button onClick={handleClick}>Add</button>
      </header>
    </div>
  );
}

export default App;
