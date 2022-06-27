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
