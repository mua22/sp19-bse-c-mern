import React from "react";
const Counter = (props) => {
  console.log(props);
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
  let myStyles = {
    color: count < 5 ? "red" : "green",
    backgroundColor: props.theme,
  };
  return (
    <div style={myStyles}>
      <h5>Counter Component</h5>
      <button onClick={countDown}>-</button> {count}{" "}
      <button onClick={countUp}> +</button>
      <br />
      Current Counter Value is {count} <br />
      {count < 0 && <span>Count is less than 0</span>}
      {count < 5 ? <div>Counter is good</div> : <div>Counter is Bad</div>}
    </div>
  );
};

export default Counter;
