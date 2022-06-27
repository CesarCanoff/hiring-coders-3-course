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
    const novaVelocidade = this.velocidadeAtual + delta;
    if (novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMax) {
      this.velocidadeAtual = novaVelocidade;
    } else {
      this.velocidadeAtual = delta > 0 ? this.velocidadeMax : 0;
    }
  }

  acelerar() {
    this.alterarVelocidade(5);
  }

  frear() {
    this.alterarVelocidade(-5);
  }
}

const carro = new Car("Lamborghini", "Urus", 450);
carro.acelerar();

class Camaro extends Car {
  private turbo = false;

  constructor() {
    super("Chevrolet", "Camaro", 500);
  }

  ligarTurbo() {
    this.turbo = true;
  }
}

const camaro = new Camaro();
camaro.acelerar();
camaro.frear();
camaro.ligarTurbo();