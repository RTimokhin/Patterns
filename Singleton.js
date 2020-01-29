//паттерн синглонтон служит для создания объекта в единственном экземпляре
class Base {
  constructor(data) {
    if(Base.exits) { //если класс уже были инициализирован
      return Base.instance //то вернём контекст старого класса вместо инициализации нового
    }
    Base.instance = this; //просто поле, в к-ое вносим контекст данного класса
    Base.exits = true; //просто флаг, означающий, что класс уже был инициализирован
    this.data = data //в поле data заносим data
  }
  getData() { //геттер
    return this.data //вернём данные
  }
}
const mongo = new Base('MongoDB');
console.log(mongo.getData());

const mysql = new Base('MySQL');
console.log(mysql.getData());
