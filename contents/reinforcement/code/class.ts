class Data {
  /*
    day: number;
    month: number;
    year: number;
  */

  constructor(
    public day: number,
    public month: number,
    public year: number = 1970
  ) {}
}

const data = new Data(1, 2);
console.log(data.day);
console.log(data.month);
console.log(data.year);

class Car {
  private velocidadeAtual: number = 0;

  constructor(
    public marca: string,
    public modelo: string,
    private velocidadeMax: number = 220
  ) {}

  private alterarVelocidade(delta: number) {
    //...
  }

  acelerar() {
    this.alterarVelocidade(5);
  }

  frear() {
    this.alterarVelocidade(-5);
  }
}

const carro = new Car("Lamborghini", "Urus", 450);
