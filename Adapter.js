//структурыне дизайн паттерны позволяют интергрировать в существующее прилож новый функционал не ломая его
//паттерн адаптер
class OldCalc {
  operations(t1, t2, operation) {
    switch (operation) {
      case 'add': return t1 + t2;
      case 'sub': return t1 - t2;
      default: return NaN;
    }
  }
}
class NewCalc {
  add(t1, t2) {
    return t1 + t2;
  }
  sub(t1, t2) {
    return t1 - t2;
  }
}
class CalcAdap {
  constructor() {
    this.calc = new NewCalc();
  }
  operations(t1, t2, operation) {
    switch (operation) {
      case 'add': return this.calc.add(t1, t2);
      case 'sub': return this.calc.sub(t1, t2);
      default: return NaN;
    }
  }
}
const oldCalc= new OldCalc();
console.log(oldCalc.operations(10, 5, 'add'));

const newCalc = new NewCalc();
console.log(newCalc.add(10, 5));

const adapter = new CalcAdap();
console.log(adapter.operations(10, 5, 'sub'));
