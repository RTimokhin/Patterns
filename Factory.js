//паттерн фабрика (объектов) служит для создания объектов в зависимости от специфических условий
class DefaultMember {
  constructor(name, cost) {
    this.name = name;
    this.cost = 100;
  }
}

class StandartMember {
  constructor(name, cost) {
    this.name = name;
    this.cost = 300;
  }
}

class EliteMember {
  constructor(name, cost) {
    this.name = name;
    this.cost = 500;
  }
}

class Subscription {
  static list = {
    default : DefaultMember,
    standart: StandartMember,
    elite: EliteMember
  }
  create(name, type = 'default') {
    const Membership = Subscription.list.type || Subscription.list.default;
    const member = new Membership(name);
    member.type = type;
    member. define = function() {
      console.log(`${this.name} ${this.type} ${this.cost}`);
    }
    return member;
  }
}

const factory = new Subscription();
const members = [
  factory.create('Roman', 'default'),
  factory.create('Elena', 'standart'),
  factory.create('Ivan', 'elite')
]
members.forEach(m => {m.define()});
