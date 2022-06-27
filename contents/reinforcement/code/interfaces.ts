interface User {
  name: string;
  email: string;
  address?: string;
}

function getUser(): User {
  return {
    name: "César",
    email: "canoff@gmail.com",
  };
}

function setUser(user: User) {
  //...
}
