import React from 'react';

class Update extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div> 
            <button onClick={this.props.update} name="update" type="button">Update</button>
        </div>;
    } 
}

export default Update