import React, {Component} from 'react';
import UserMessage from './UserMessage.jsx';
import SystemMessage from './SystemMessage.jsx';

class Message extends Component {
    render() {
        console.log('Rendering <Message />');

        // TODO: need condition to check type of message
        var userMessage = true;

        return (userMessage ? <UserMessage /> : <SystemMessage />);
    }
}

export default Message;
