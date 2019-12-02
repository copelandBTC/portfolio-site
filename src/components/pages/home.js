import React from 'react';
import NavButton from '../nav-button';
import Page from './page';

export default class Home extends React.Component {
    state = {};

    constructor(props) {
        super();
    }

    render() {
        return (
            <Page>
                <div>
                    Hi, I'm Brandon!
                </div>
            </Page>
        )
    }
}