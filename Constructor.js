//паттерн конструктор (объектов) используется для создания объектов
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getInfo() {
    alert(`${this.name} ${this.age}`);
  }
}
let roman = new User('Roman', 31);
console.log(roman.getInfo());
