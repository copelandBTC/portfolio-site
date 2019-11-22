import React from 'react';
import NavButton from '../nav-button';
import Page from './page';

export default class contact extends React.Component {
    state = {};

    constructor(props) {
        super();
    }

    render() {
        return (
            <Page>
                <section id="contact">
                    <h2>
                        Don't Be a Stranger
                    </h2>
                    <div>
                        <button>Phone</button>
                        <button>Email</button>
                    </div>
                </section>
            </Page>
        )
    }
}