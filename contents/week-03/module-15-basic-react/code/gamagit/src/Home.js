import React, { useState } from "react";
import axios from 'axios';

function Home(props) {
  const [user, setUser] = useState("");
  function handleSearch() {
    axios.get(`https://api.github.com/users/${user}/repos`)
    .then(response => console.log(response.data))
  }
  return (
    <>
      <p>{user}</p>
      <input
        className="user"
        placeholder="Username"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <button onClick={handleSearch} type="button">
        Search
      </button>
    </>
  );
}

export default Home;