/*
fs - работа с файловой системой 
*/
//fs - File System

const fs = require('fs');
const path = require('path');

//Make dir (асинхронное создание папки)
//Make dir Sync (создание папки с блокированием потока)

//Создадим путь нашей новой папки (которую мы будем сейчас создавать)
const newFolder = path.join(__dirname, 'test-folder'); 
//Создаем папку
fs.mkdir(newFolder, (error) => {
    if (error) {
        throw error;
    }

    console.log('Папка создана');
});

//Создаем файл (сначала путь к нему с помощью модуля path)
const newFilePath = path.join(__dirname, 'test-folder', 'music.txt');
//Теперь сам файл с помощью модуля fs
fs.writeFile(newFilePath, 'my text here', (error) => {
    if (error) {
        throw error;
    }

    console.log('Файл успешно создан');
});

//Теперь прочтём файл
fs.readFile(newFilePath, 'utf-8', (error, data) => {
    if (error) {
        throw error;
    }

    console.log('Файл: ', data);
});