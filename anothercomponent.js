import React from 'react';

class AnotherComponent extends React.Component {
    constructor(props) {
        super(props);
        this.update = this.update.bind(this);
    }

    update() {
        let getRandomInt = (min, max) => {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        }  
        const hellos = [
            "Hello, World", "¡Hola Mundo!", "مرحبا بالعالم", "Bonjour le monde!", "Hallo Welt!", "你好，世界", "Hei verden!",
            "Witaj świecie!", "Привет мир!", "Selam Dünya!", "नमस्कार संसार!", "こんにちは世界！", "ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ ਦੁਨਿਆ!",
            "שלום עולם!", "नमस्ते दुनिया!"
        ];

        this.props.update(hellos[getRandomInt(0, hellos.length)]);
    }

    render() {
        return <div> 
            <button onClick={this.update} name="update" type="button">Update</button>
        </div>;
    } 
}

export default AnotherComponent