var React = require('react');
class HelloWorld extends React.Component {
    constructor(props) {
        super(props);

        this.state = {message: "Hello, World!"};
        props.page.changed.add(x => {
            this.setState({ message: x});
        });
    }

    render() {
        return <h1>{this.state.message}</h1>;
    }
}

export default HelloWorld 

