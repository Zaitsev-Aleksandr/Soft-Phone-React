import React, {Component} from 'react';

class ConferenceDisplay extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default ConferenceDisplay;