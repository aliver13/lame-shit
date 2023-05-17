//Модуль, который позволяет получить доступ к информации об ОС
const os = require('os');

console.log(`Архитектура процессора: ${os.arch}`);

console.log(`Всего памяти: ${os.totalmem}`);

console.log(`Свободная оперативка: ${os.freemem}`);

console.log(`Операционная система: ${os.platform}`);

console.log(`Инфа по процессорам: ${os.cpus}`);

console.log(`Включен: ${os.uptime}`);