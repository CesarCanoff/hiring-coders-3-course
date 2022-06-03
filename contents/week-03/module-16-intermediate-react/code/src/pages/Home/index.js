import React, { useState } from "react";
import * as S from "./styled";
import axios from "axios";
import { useHistory } from "react-router-dom";

function App(props) {
  const [user, setUser] = useState("");
  const [error, setError] = useState(false);
  const history = useHistory();

  function handleSearch() {
    axios
      .get(`https://api.github.com/users/${user}/repos`)
      .then((response) => {
        console.log(response.data);
        const repos = response.data;
        const reposName = [];
        repos.map((repository) => {
          reposName.push(repository.name);
        });
        localStorage.setItem("repositoriesName", JSON.stringify(reposName));
        setError(false);
        history.push("/repositories");
      })
      .catch((err) => {
        setError(true);
      });
  }
  return (
    <S.HomeContainer>
      <S.Content>
        <S.Input
          className="user"
          placeholder="Username"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <S.Button onClick={handleSearch} type="button">
          Search
        </S.Button>
      </S.Content>
      {error ? (
        <S.Error>
          Ocorreu um erro!, não sei qual foi, mas ele ocorreu rs.
        </S.Error>
      ) : (
        ""
      )}
    </S.HomeContainer>
  );
}

export default App;
