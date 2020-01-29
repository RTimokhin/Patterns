//паттерн фасад - создаёт более простой интерфейс для взаимодействия с классами
class Complaints {
  constructor() {
    this.complaints = []; //инициализируем пустой массив
  }
  reply(complaints) {}; //инициализируем метод reply
  add(complaint) {
    this.complaints.push(complaint); //добавляет элемент в массив complaints
    return this.reply(complaint); //возвращает результат работы метода reply
  }
}

class ProductComplaints extends Complaints { //класс наследуется от класса Complaints
  reply({id, customer, details}) { //создадим функциональность метода reply для класса ProductComplaints
    return `Product: ${id}: ${customer} (${details})`
  }
}

class ServiceComplaints extends Complaints { //класс наследуется от класса Complaints
  reply({id, customer, details}) { //создадим функциональность метода reply для класса ServiceComplaints
    return `Service: ${id}: ${customer} (${details})`
  }
}

class ComplaintRegistry { //создадим класс, к-ый по сути и будет являться шаблоном фасад
  register(customer, type, details) {
    //расширим класс дополнительными полями
    const id = Date.now();
    let complaint;
    if(type === 'service') {
      complaint = new ServiceComplaints();
    } else {
      complaint = new ProductComplaints();
    }
    return complaint.add({id, customer, details}); //вернём объект complaint
  }
}

const registry = new ComplaintRegistry();
console.log(registry.register('Roman', 'service', 'undefined'));
console.log(registry.register('Elena', 'product', 'error'));
