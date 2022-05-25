/*
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Player extends User {
  constructor(name, age, game) {
    super(name, age);
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
