import React from "react";
const Counter = () => {
  //   let count = 5;
  const [count, setCount] = React.useState(5);
  const countUp = () => {
    setCount(count + 1);
    // count++;
    // alert(count);
  };
  const countDown = () => {
    setCount(count - 1);
    // count--;
    // alert(count);
  };
  return (
    <div>
      <h5>Counter Component</h5>
      <button onClick={countDown}>-</button> {count}{" "}
      <button onClick={countUp}> +</button>
      <br />
      Current Counter Value is {count} <br />
      {count < 0 && <span>Count is less than 0</span>}
    </div>
  );
};

export default Counter;
