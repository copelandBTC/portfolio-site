import React from 'react';
import NavButton from '../nav-button';

export default class Home extends React.Component {
    state = {};

    constructor(props) {
        super();
    }

    render() {
        return (
            <div>
                <div>
                    Hi, I'm Brandon!
                </div>
                <NavButton buttonText = "Why You Should Hire Me" />
                <NavButton buttonText = "What I Do For Fun" />
                <NavButton buttonText = "Contact" />
            </div>
        )
    }
}