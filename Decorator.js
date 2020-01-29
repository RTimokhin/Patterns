//паттерн декоратор - позволяет добавлять поведение или функционал в существующие классы
class Server {
  constructor(ip, port) {
    this.ip = ip;
    this.port = port;
  }
  get url() {
    return this.ip + ' / ' + this.port;
  }
}
function aws(server) {
  server.isAWS = true;
  server.awaInfo = function() {
    return server.url;
  }
  return server;
}
function azure(server) {
  server.port +=888;
  return server;
}
const server1 = aws(new Server('192.168.1.1', 2000));
const server2 = azure(new Server('10.4.0.1', 2500))
console.log(server1.url);
console.log(server1.awaInfo());
console.log(server2.url);
