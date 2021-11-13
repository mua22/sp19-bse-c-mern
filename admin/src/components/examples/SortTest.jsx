import React from "react";

const SortTest = () => {
  const [friends, setFriends] = React.useState(["Zahid", "Mubashar", "Ali"]);
  const sortFriends = () => {
    let fs = [...friends];
    fs.sort();
    setFriends(fs);
  };
  console.log("Just Before Return");
  React.useEffect(function () {
    console.log("Use Effect Called");
    // send api call and update state what will happen
  });
  React.useEffect(function () {
    console.log("Use Effect bind with nothing");
    // send api call and update state what will happen
  }, []);
  return (
    <div>
      <button onClick={sortFriends}>Sort Friends</button>
      <ul>
        {friends.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
    </div>
  );
};

export default SortTest;
