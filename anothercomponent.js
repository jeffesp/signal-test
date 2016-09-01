import React from 'react';

class AnotherComponent extends React.Component {
    render() {
        return <div> 
            <button onClick={this.props.update} name="update" type="button">Update</button>
        </div>;
    } 
}

export default AnotherComponent