import "./App.css";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <h1>Counter App</h1>
      <Counter diff={1} />
    </div>
  );
}

export default App;
