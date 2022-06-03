import React, { useState } from "react";
import * as S from "./styled";
import axios from "axios";

function App(props) {
  const [user, setUser] = useState("");
  function handleSearch() {
    axios
      .get(`https://api.github.com/users/${user}/repos`)
      .then((response) => console.log(response.data));
  }
  return (
    <>
      <S.Container>
        <S.Input
          className="user"
          placeholder="Username"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <S.Button onClick={handleSearch} type="button">
          Search
        </S.Button>
      </S.Container>
    </>
  );
}

export default App;
