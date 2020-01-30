//патерн состояние - позволяет делегировать изменение состояния классов общему классу
class Light {
  constructor(ligth) {
    this.ligth = ligth;
  }
}
class RedLigth extends Light {
  constructor() {
    super('red');
  }
  sign() {
    return 'СТОП';
  }
}
class YellowLigth extends Light {
  constructor() {
    super('yellow');
  }
  sign() {
    return 'ЖДИ';
  }
}
class GreenLigth extends Light {
  constructor() {
    super('green');
  }
  sign() {
    return 'ИДИ';
  }
}
class TrafficLigth {
  constructor() {
    this.states = [
      new GreenLigth(),
      new YellowLigth(),
      new RedLigth()
    ]
    this.current = this.states[0];
  }
  change() {
    const total = this.states.length;
    let index = this.states.findIndex(ligth => ligth === this.current);
    if(index + 1 < total) {
      this.current = this.states[index + 1];
    } else {
      this.current = this.states[0];
    }
  }
  sign() {
    return this.current.sign();
  }
}
const traffic = new TrafficLigth();
console.log(traffic.sign());
traffic.change();

console.log(traffic.sign());
traffic.change();

console.log(traffic.sign());
traffic.change();
