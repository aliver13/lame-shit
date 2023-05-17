const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('anything', (data) => {
    console.log('ON: enything', data);
});

setTimeout(() => {
    console.log('Пошел эмит');

    setTimeout(() => {
        emitter.emit('anything', 'Скр скр в мервых наааайкааах');

        setTimeout(() => {
            console.log('Пошел эмит 2');

            setTimeout(() => {
                emitter.emit('anything', 'Скр скр в мервых наааайкааах');
            }, 5000)
            
        }, 10000)

    }, 5000)

}, 10000)

console.log('Тут какие-нибудь действия');