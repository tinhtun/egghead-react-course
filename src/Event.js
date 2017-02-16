import React from 'react';

class Event extends React.Component {
    constructor() {
        super();
        this.state = {
            currentEvent: 'No Event'
        }
        this.updateEvent = this.updateEvent.bind(this);
    }

    updateEvent(event) {
        this.setState({ currentEvent: event.type })
    }

    render() {
        return (
            <div>
                <textarea onFocus={this.updateEvent}
                            onBlur={this.updateEvent}>
                    
                </textarea>
                <h2>{this.state.currentEvent}</h2>
            </div>
        );
    }
}

export default Event;