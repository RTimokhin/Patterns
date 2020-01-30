//паттерн прокси - позволяет ставить ловушки на поля объекты, вызов функции и т.д.
function networkFetch(url) {
  return `${url} - Ответ от сервера`;
}
const cash = new Set();
const proxiedFetch = new Proxy(networkFetch, {
  apply(target, thisArg, args) {
    const url = args[0];
    if(cash.has(url)) {
      return `${url} - Ответ из кэша`;
    } else {
      cash.add(url);
      return Reflect.apply(target, thisArg, args);
    }
  }
})
console.log(proxiedFetch('angular.io'));
console.log(proxiedFetch('react.io'));
console.log(proxiedFetch('angular.io'));
