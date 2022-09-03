"use strict";
class Data {
    /*
      day: number;
      month: number;
      year: number;
    */
    constructor(day, month, year = 1970) {
        this.day = day;
        this.month = month;
        this.year = year;
    }
}
const data = new Data(1, 2);
console.log(data.day);
console.log(data.month);
console.log(data.year);
