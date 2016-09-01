var React = require('react');
class HelloWorld extends React.Component {
    render() {
        const message = this.props.message || "Hello, World!";
        return <h1>{message}</h1>;
    }
}

export default HelloWorld 

