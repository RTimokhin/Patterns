//паттерн итератор - служит для создания объектов, у к-ых можно последовательно получать доступ к информации
class MyIterator {
  constructor(data) {
    this.index = 0;
    this.data = data;
  }
  [Symbol.iterator]() {
    return {
      next: () => {
        if(this.index < this.data.length) {
          return {
            value: this.data[this.index++],
            done: false
          }
        } else {
          this.index = 0;
          return {
            done: true,
            value: void 0
          }
        }
      }
    }
  }
}
const iterator1 = new MyIterator(['This', 'is', 'iterator']);
for(const val of iterator1) {
  console.log(val);
}

//аналогично с помощью генератора
function* generator(collection) {
  let index = 0;
  while(index < collection.length) {
    yield collection[index++];
  }
}
const iterator2 = new MyIterator(['This', 'is', 'iterator']);
const gen = generator(['This', 'is', 'iterator']);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
