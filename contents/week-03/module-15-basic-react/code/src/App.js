import React, { useState } from "react";

function App(props) {
  const [ user, setUser ] = useState('César')
  return (
    <>
    <p>{ user }</p>
      <input
        name="user"
        id="user"
        className="user"
        placeholder="Username"
      />
      <button type="button">Search</button>
    </>
  );
}

export default App;
