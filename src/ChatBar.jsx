import React, {Component} from 'react';

class ChatBar extends Component {
    render() {
        console.log('Rendering <ChatBar />');
        return (
            <footer className="chatbar">
                <form onSubmit={this.props.handleSubmit}>
                    <input className="chatbar-username" placeholder="Your Name (optional)" defaultValue={this.props.currentUser.name} />
                    <input className="chatbar-message" placeholder="Type a message and hit ENTER" />
                </form>
            </footer>
        );
    }
}

export default ChatBar;
