import React, {Component} from 'react';

class Message extends Component {
    render() {
        console.log('Rendering <Message />');
        return (
            <div className="message">
                <span className="message-username">Anonymous1</span>
                <span className="message-content">I won't be impressed with technology until I can download food.</span>
            </div>
        );
    }
}

// todo make subcomponents for system messages as well as user messages
// <div class="message">
//     <span class="message-username">Anonymous1</span>
//     <span class="message-content">I won't be impressed with technology until I can download food.</span>
// </div>
// <div class="message system">
//     Anonymous1 changed their name to nomnom.
// </div>

export default Message;
