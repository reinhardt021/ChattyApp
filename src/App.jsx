import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentUser: {name: 'Bob'},
            messages: [
                {
                    type: 'system',
                    username: null,
                    content: 'Anonymous1 changed their name to nomnom. TEST'
                },
                {
                    type: 'user',
                    username: 'Anonymous1',
                    content: 'I won\'t be impressed with technology until I can download food.'
                },
                {
                    type: 'user',
                    username: 'Bob',
                    content: 'Has anyone seen my marbles? ?? ?'
                },
                {
                    type: 'user',
                    username: 'Anonymous',
                    content: 'No, I think you lose them. You lost your marbles, Bob. You lost them for good.'
                }
            ]
        };
    }

    render() {
        console.log('Rendering <App />');
        return (
            <div>
                <nav className="navbar">
                    <a href="/" className="navbar-brand">Chatty</a>
                </nav>
                <MessageList messages={this.state.messages} />
                <ChatBar currentUser={this.state.currentUser} />
            </div>
        );
    }
}
export default App;
