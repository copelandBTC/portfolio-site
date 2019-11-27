import React from 'react';
import NavButton from '../nav-button';
import '../../styles/page.css';

export default class Page extends React.Component {
    state = {};

    constructor(props) {
        super();
    }

    render() {
        return (
            <div>
                <header>
                    <div class="NavButtonSection">
                        <NavButton buttonText = "Why You Should Hire Me" />
                        <NavButton buttonText = "What I Do For Fun" />
                        <NavButton buttonText = "Contact" />
                    </div>
                </header>
                { this.props.children }
                <footer>
                    Made by Brandon Copeland © { new Date().getFullYear() }
                </footer>
            </div>
        );
    }
}