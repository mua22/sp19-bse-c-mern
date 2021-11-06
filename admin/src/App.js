import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/examples/Counter";

function App() {
  return (
    <div className="App">
      <h1>Hello C Section</h1>
      <Counter theme="yellow" country="pakistan" />
      <Counter theme="blue" />
      <Counter theme="aqua" />
    </div>
  );
}

export default App;
