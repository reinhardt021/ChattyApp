import React, {Component} from 'react';

class SystemMessage extends Component {
    render() {
        console.log('Rendering <SystemMessage />');
        return (
            <div className="message system">
                Anonymous1 changed their name to nomnom.
            </div>
        );
    }
}

export default SystemMessage;
