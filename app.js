const chalk = require('chalk'); // 'chalk' - абсолютный путь, nodeJS понимает, что мы обращаемся к папке node_modules

//вывод какого-либо дерьма из другого файла
const text = require('./data.js');

//пошел сервер
const http = require('http');

//подключаем модуль fs, чтобы работать с файлами (то есть чтобы сервак мог давать файлы юзеру)
const fs = require('fs');
//модуль для работы с путями
const path = require('path');

//Теперь подгрузим страницы сайта из файла
const pathWithSite = 'browser-interface';
const indexPath = path.join(__dirname, pathWithSite, 'index.html');
const contactPath = path.join(__dirname, pathWithSite, 'contact.html');
const styleFilePath = path.join(__dirname, pathWithSite, 'style.css');
const siteScripts = path.join(__dirname, pathWithSite, 'script.js');

//Порт сервера
const PORT = 3000;

const server = http.createServer((req, res) => {
    console.log(req.url);

    switch (req.url) {
        case '/':
            fs.readFile(indexPath, (err, data) => {
                if (err) {
                    throw err;
                }
                
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            });

            res.writeHead(200, { 'Content-Type': 'text/html' });
            break;

        case '/contact':
            fs.readFile(contactPath, (err, data) => {
                if (err) {
                    throw err;
                }

                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            });
            break;

        case '/style.css':
            fs.readFile(styleFilePath, (err, data) => {
                if (err) {
                    throw err;
                }

                res.writeHead(200, { 'Content-Type': 'text/css' });
                res.end(data);
            });
            break;

        case '/script.js':
            fs.readFile(siteScripts, (err, data) => {
                if (err) {
                    throw err;
                }

                res.writeHead(200, { 'Content-Type': 'application/javascript' });
                res.end(data);
            });
            break;

        default:
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 not found');
    }
});

server.listen(PORT, '192.168.0.184', () => {
    console.log('Сервер работает');
});