// Создать класс Programmer, инстанс которого обладает полями name, stack (массив строк, типа [«Python», «PHP», «Java»]),
//  и методом .code() (который перебирает массив stack и выводит сообщения вида «Oleg is coding on Python», «Oleg is coding on PHP»,
//      «Oleg is coding on Java»). Метод code должен храниться в прототипе класса.
//  Переопределить метод toString у инстансов Programmer, чтобы они выводили сообщение вида «Hello my name is Oleg»

class Programmer {
  constructor(userName, stack) {
    this.userName = userName;
    this.stack = stack;
    Programmer.prototype.code = function () {
      stack.forEach((element) => {
        console.log(`${this.userName} is coding on ${element}`);
      });
      Programmer.prototype.toString = function prToString() {
        console.log(`Hello my name is ${this.userName} `);
      };
    };
  }
  static getSeniorDeveloper(programmerTeam) {
    return programmerTeam.filter((programmer) => {
      return programmer.stack.length > 4;
    });
  }
}

const programmerTeam = [
  new Programmer("Petya", ["JS", "Python", "Go", "Ruby"]),
  new Programmer("Vlad", ["Java", "PHP"]),
  new Programmer("Olga", ["CSS", "HTMl"]),
  new Programmer("Valerchik", ["Assembler", "API", "C++", "C#", "PHP"]),
  new Programmer("Artem", ["C++", "C#"]),
  new Programmer("Vova", ["Go", "Ruby"]),
  new Programmer("Sergei", ["SQL", "Swift"]),
  new Programmer("Anya", ["TypeScript", "React", "JS", "CSS", "HTML"]),
  new Programmer("Roman", ["Delphi", "Scala"]),
  new Programmer("Maksim", ["Kotlin", "Golang"]),
];

console.log(Programmer.getSeniorDeveloper(programmerTeam));

// code () {
// this.stack.forEach(techology) => {
//     console.log(`${this.stack} codes on techology`);
// }
// }

// const programmer = new Programmer("Oleg", ["Python", "PHP", "Java"]);
// programmer.code();
// programmer.toString();

// Создать массив из 10 случайных инстансов Programmer, и отфильтровать их с помощью функции getSeniorDeveloper так,
//  чтобы в результирующий массив попали только те Programmer, у которы длина массива stack больше 4.

// console.log(programmerTeam);

// const getSeniorDeveloper = programmerTeam.filter(programmerTeam => programmerTeam.stack.length > 4)

// console.log(getSeniorDeveloper);

// Напишите функцию, которая вычисляет длину линий в стандартной двухмерной системе координат.
//  Координаты начала и конца линий должны храниться в объектах.

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

const p1 = new Point(51, 123);
const p2 = new Point(16, 98);
const p3 = new Point(76, 5);
const p4 = new Point(45, 18);
const p5 = new Point(16, 63);
const p6 = new Point(55, 34);

class Line {
  constructor(p1, p2) {
    this.p1 = p1;
    this.p2 = p2;
  }

  get length() {
    const katet1 = this.p1.x - this.p2.x;
    const katet2 = this.p1.y - this.p2.y;
    return Math.sqrt(katet1 ** 2 + katet2 ** 2);
  }

  static caLinesFormATriangle(line1, line2, line3) {
    return (
      line1.length + line2.length > line3.length &&
      line2.length + line3.length > line1.length &&
      line3.length + line1.length > line2.length
    );
  }
}

const line1 = new Line(p1, p2);
const line2 = new Line(p3, p4);
const line3 = new Line(p5, p6);

console.log(Line.caLinesFormATriangle(line1, line2, line3));

// Создать конструктор Car, который принимает параметры model, color, price.
//  Конструктор должен возвращать объект в котором присутствуют вышеназванные поля со значениями.
//  Каждый представитель класса Car должен обладать методом run() который выводит сообщение вида : MODEL + “ ” + COLOR + ” is running”.

class Car {
  constructor(model, color, price) {
    this.model = model;
    this.color = color;
    this.price = price;
  }
  run() {
    console.log(`MODEL - ${this.model}, COLOR - ${this.color}, is running`);
  }
}

const machineDescription = new Car("BMW", "Black", "16000$");

machineDescription.run();

// Создать конструктор Book, с помощью этого конструктора создать массив из 8 книг (объектов).
//  Каждая книга должна представлять из себя объект, в котором есть три поля: author, bookName, pageAmount.
//   Создать функцию getBiggerBook(), которая принимает массив книг и возвращает ОДНУ книгу с наибольшим количеством страниц

class Book {
  constructor(author, bookName, pageAmount) {
    this.author = author;
    this.bookName = bookName;
    this.pageAmount = pageAmount;
  }
}

const arrayBook = [
  new Book("David Baldacci", "SIMPLY LIES", 246),
  new Book("Laura Dave", "THE LAST THING HE TOLD ME", 335),
  new Book("Colleen Hoover", "IT ENDS WITH US", 403),
  new Book("Bonnie Garmus", "LESSONS IN CHEMISTRY", 378),
  new Book("IT STARTS WITH US", "Colleen Hoover", 291),
  new Book("David Grann", "THE WAGER", 420),
  new Book("Ann Napolitano", "HELLO BEAUTIFUL", 230),
  new Book("John Sandford", "DARK ANGEL", 376),
];

console.log(arrayBook);

let getBiggerBook = arrayBook.reduce((acc, curr) =>
  acc.pageAmount > curr.pageAmount ? acc : curr
);

console.log(getBiggerBook);

// Создать класс Timer, инстанс которого запускает таймер и выводит в консоль прошедшее время в секундах (1 2 3 4 5 и тд)
//  инстанс должен обладать методами .start() .stop() которые запускают и останавливают таймер
//   а также методом .reset() который сбрасывает таймер на 0. С помощью Timer вы должны создать несколько таймеров и убедится в том,
//    что они работают независимо друг от друга. останавливайте таймер через некоторое время после запуска с помощью setTimeout()

class Timer {
  constructor() {
    this.intervalId = null;
    this.time = 0;
  }

  start() {
    this.intervalId = setInterval(() => {
      console.log(this.time++);
    }, 1000);
  }
  stop() {
    clearInterval(this.intervalId);
  }
  reset() {
    this.time = 0;
  }
}

const timerCheck = new Timer()

console.log(timerCheck);

timerCheck.start();

setTimeout(() => {
  timerCheck.reset();
}, 5000);

setTimeout(() => {
  timerCheck.stop();
}, 7000);

