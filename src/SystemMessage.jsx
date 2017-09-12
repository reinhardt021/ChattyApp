import React, {Component} from 'react';

class SystemMessage extends Component {
    render() {
        console.log('Rendering <SystemMessage />');
        return (
            <div className="message system">
                {this.props.message.content}
            </div>
        );
    }
}

export default SystemMessage;
