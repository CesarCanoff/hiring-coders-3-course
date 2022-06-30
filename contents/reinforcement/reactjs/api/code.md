# Códigos API

## Instalação

```
npm install axios
```

## index.ts

```ts
// Importando o Axios.
import axios from 'axios';

// Criando a URL base.
const baseApi = axios.create({
  baseURL = 'http://localhost:4000';
  headers: { // Passando os Headers.
    "Content-Type": 'applications/json',
  }
})

export default baseApi;
```

## psicologos.ts

```ts
interface PsicologoPayload {
  nome: string;
  apresentacao: string;
  email: string;
  senha: string;
}

export function cadastroPsicologo(payload: PsicologoPayload) {
  return baseApi.post("/psicologos", payload);
}

export function listarPsicologo() {
  return baseApi.get("/psicologos");
}
```

## create.tsx

```ts
...more codes
const cadastro = async (event: FormEvent) => {
  event.preventDefault();

  const payload = {
    nome,
    apresentacao,
    email,
    senha
  };

  try {
    const response = await cadastroPsicologo(payload);
    if (response.status !== 201) {
      return alert('Deu algo errado.');
    }

    alert('Cadastro efeituado com sucesso!.');
  } catch (error) {
    alert('Deu algo errado.');
  }
}
```

## list.tsx

```ts
import { useEffect, useState } from "react";
import { listarPsicologo } from "../../services/MainApi/psicologos";

interface Psicologo {
  nome: string;
  apresentacao: string;
  email: string;
  senha: string;
}

export default function PsicologoList() {
  const [psicologos, setPsicologos] = useState<Psicologo[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await listarPsicologo();
        setPsicologos(response.data);
      } catch (error) {
        alert("Deu algo errado");
      }
    };
    gwtData();
  }, [setPsicologos]);

  return (
    <main className="container card my-5 p-5">
      <h1>Lista de Psicólogos</h1>
      <ul className="list-group">
        {psicologos.map((psicologo) => (
          <li className="list-group-item">{psicologo.nome}</li>
        ))}
      </ul>
    </main>
  );
}
```
