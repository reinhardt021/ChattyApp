import React, {Component} from 'react';

class ChatBar extends Component {
    handleKeyPress(e) {
        if (e.key === 'Enter') {
            const target = e.target;
            console.log('enter typed');
            console.log('target: ', target);
            console.log('here is the info >> user: ' + e.target.username + ' message: ' + e.target.message);

            // get the chatbar-username
            // get the chatbar-message
            // this.props.handleSubmit(chatbar-username, chatbar-message);
        } else {
            console.log('NOT enter typed');
        }
    }

    render() {
        console.log('Rendering <ChatBar />');
        return (
            <footer className='chatbar'>
                <form onKeyPress={this.handleKeyPress}>
                    <input name='username' className='chatbar-username' placeholder='Your Name (optional)' defaultValue={this.props.currentUser.name} />
                    <input name='message' className='chatbar-message' placeholder='Type a message and hit ENTER' />
                </form>
            </footer>
        );
    }
}

export default ChatBar;
