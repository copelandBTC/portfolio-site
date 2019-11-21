import React from 'react';
import NavButton from '../nav-button';

export default class contact extends React.Component {
    state = {};

    constructor(props) {
        super();
    }

    render() {
        return (
            <div>
                <section id="contact">
                    <h2>
                        Don't Be a Stranger
                    </h2>
                    <div>
                        <button>Phone</button>
                        <button>Email</button>
                    </div>
                </section>
            </div>
        )
    }
}