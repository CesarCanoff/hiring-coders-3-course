/*
class User {
  constructor(nome, age) {
    this.nome = nome;
    this.age = age;
  }
}

class Player extends User {
  constructor(nome, age, game) {
    super(nome, age);
    this.game = game;
  }
}

const player = new Player("César", 18, "The Last Of Us - Part II");
console.log(player);
*/

class Usuario {
  public nome;
  public idade;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }
}

class Player extends Usuario {
  public jogo;

  constructor(nome: string, idade: number, jogo: string) {
    super(nome, idade);
    this.jogo = jogo;
  }

  dizerGameAtual() {
    return `Estou jogando atualmente ${this.jogo}`;
  }

  static queHorasSao() {
    return Date();
  }
}

const player = new Player("César", 18, "The Last Of Us - Part II");
console.log(player);
console.log(player.dizerGameAtual());
console.log(Player.queHorasSao());

class Jogo {
  public nome;

  constructor(nome: string) {
    this.nome = nome;
  }

  dizerNome() {
    return `Jogo: ${this.nome}`;
  }
}

interface IJogoComDescricao {
  // nome: string;
  descricao: string;
  dizerNomeComDescricao(): string;
}

class JogoComDescricao extends Jogo implements IJogoComDescricao {
  public descricao;

  constructor(nome: string, descricao: string) {
    super(nome);
    this.descricao = descricao;
  }

  dizerNomeComDescricao() {
    return `O nome é: ${this.nome}`;
  }
}

type TJogoComDescricao = {
  descricao: string;
  dizerNomeComDescricao(): string;
};

const obj: TJogoComDescricao = {
  descricao: "descricao do jogo",
  dizerNomeComDescricao() {
    return "123";
  },
};

// =================

interface Jogo {
  name: string;
  descricao: string;
}

let jogo = <Jogo>{};
jogo.name = "vcdsfvsd";
jogo.descricao = "ERERFCDXFS";
