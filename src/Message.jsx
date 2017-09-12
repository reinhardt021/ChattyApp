import React, {Component} from 'react';
import UserMessage from './UserMessage.jsx';
import SystemMessage from './SystemMessage.jsx';

class Message extends Component {
    render() {
        console.log('Rendering <Message />');
        return (
            this.props.message.type === 'system' ?
                <SystemMessage message={this.props.message} /> :
                <UserMessage message={this.props.message} />
        );
    }
}

export default Message;
