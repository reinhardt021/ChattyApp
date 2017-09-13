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
                    id: 1,
                    type: 'system',
                    username: null,
                    content: 'Anonymous1 changed their name to nomnom. TEST'
                },
                {
                    id: 2,
                    type: 'user',
                    username: 'Anonymous1',
                    content: 'I won\'t be impressed with technology until I can download food.'
                },
                {
                    id: 3,
                    type: 'user',
                    username: 'Bob',
                    content: 'Has anyone seen my marbles? ?? ?'
                },
                {
                    id: 4,
                    type: 'user',
                    username: 'Anonymous',
                    content: 'No, I think you lose them. You lost your marbles, Bob. You lost them for good.'
                }
            ]
        };

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        console.log('componentDidMount <App />');
        setTimeout(() => {
            console.log('Simulating incoming message');
            const newMessage = {
                id: 5,
                type: 'user',
                username: 'Michelle',
                content: 'Hello there!'
            };
            const messages = this.state.messages.concat(newMessage);
            //
            this.setState({messages: messages});
        }, 3000);
    }

    handleSubmit(event) {
        console.log('>>> an event was created for the submit of stuff: ', event);
        event.preventDefault();

        // const newMessage = {
        //     id: this.state.messages.length + 1, // TODO: update when backend implemented
        //     type: 'user',
        //     username: 'Michelle', // TODO: figure out how to get the username from subcomponent
        //     content: 'Hello there!' // TODO: figure out how to get content from subcomponent
        // };
        // const messages = this.state.messages.concat(newMessage);
        // this.setState({messages: messages});
    }

    render() {
        console.log('Rendering <App />');
        return (
            <div>
                <nav className="navbar">
                    <a href="/" className="navbar-brand">Chatty</a>
                </nav>
                <MessageList messages={this.state.messages} />
                <ChatBar currentUser={this.state.currentUser} handleSubmit={this.handleSubmit} />
            </div>
        );
    }
}
export default App;
