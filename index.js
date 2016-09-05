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
        this.inputted = new Signal();
        this.update = this.update.bind(this);
        this.acceptInput = this.update.bind(this);
        this.timer = setTimeout(this.update, 5000);
    }

    update() {
        const getRandomInt = (min, max) => {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        };
        const hellos = [
            "Hello, World", "Hola Mundo", "مرحبا بالعالم", "Bonjour le monde", "Hallo Welt", "你好，世界", "Hei verden",
            "Witaj świecie", "Привет мир", "Selam Dünya", "नमस्कार संसार", "こんにちは世界", "ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ ਦੁਨਿਆ",
            "שלום עולם", "नमस्ते दुनिया"
        ];

        clearTimeout(this.timer);
        this.changed.dispatch(hellos[getRandomInt(0, hellos.length)]);
        this.timer = setTimeout(this.update, 5000);
    }

    acceptInput() {
        clearTimeout(this.timer);
        this.inputted.dispatch(); 
    }
}

const page = new Page();

ReactDOM.render(
  <HelloWorld page={page} onClick={page.acceptInput} />,
  document.getElementById('example')
);

ReactDOM.render(
  <Update update={page.update} />,
  document.getElementById('example2')
);
