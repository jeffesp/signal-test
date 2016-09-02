// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import Signal from 'signals';
import xhr from 'xhr';


import HelloWorld from './helloworld';
import Update from './update';


class Page {
    constructor() {
        this.changed = new Signal();
    }

    update() {
        let getRandomInt = (min, max) => {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        }  
        const hellos = [
            "Hello, World", "Hola Mundo", "مرحبا بالعالم", "Bonjour le monde", "Hallo Welt", "你好，世界", "Hei verden",
            "Witaj świecie", "Привет мир", "Selam Dünya", "नमस्कार संसार", "こんにちは世界", "ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ ਦੁਨਿਆ",
            "שלום עולם", "नमस्ते दुनिया"
        ];

        this.changed.dispatch(hellos[getRandomInt(0, hellos.length)]);
    }
}

const page = new Page();

// transition every 10 sec no matter what
// should probably reset it whenever button is clicked....
setTimeout(_ => page.update(), 10000);

ReactDOM.render(
  <HelloWorld page={page} />,
  document.getElementById('example')
);

ReactDOM.render(
  <Update update={page.update} />,
  document.getElementById('example2')
);
