import React from "react";

import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/examples/Counter";

function App() {
  const [theme, setTheme] = React.useState("blue");
  return (
    <div className="App">
      <h1>Hello C Section</h1>
      <div>
        Current Theme is {theme}
        <br />
        <input
          value={theme}
          onChange={(e) => {
            setTheme(e.target.value);
          }}
        />
        <br />
        <select
          value={theme}
          onChange={(e) => {
            setTheme(e.target.value);
          }}
        >
          <option value="blue">Blue</option>
          <option value="black">Black</option>
          <option value="aqua">Aqua</option>
        </select>
      </div>
      <Counter theme={theme} country="pakistan" />
      <Counter theme={theme} />
      <Counter theme={theme} />
    </div>
  );
}

export default App;
