////////////////Модули Node.js////////////////

/*
path - работа с адресами папок и файлов. Сформировать адрес папки, распарсить адрес, спарсить. 
*/

const path = require('path');

const file = 'C:/Windows/Users/Russian/Desktop/server/bablosoft.exe'

console.log(path.parse(file));

console.log(__dirname);

//join - создание пути (спарсивание, склепывание)
console.log(path.join(__dirname, 'coverter', 'index.html'));