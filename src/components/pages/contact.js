import React from 'react';
import NavButton from '../nav-button';
import Page from './page';
import SectionCard from '../section-card';
import CardTitle from '../card-title';
import { Card, Button } from 'react-bootstrap';

export default class contact extends React.Component {
    state = {};

    constructor(props) {
        super();
    }

    componentWillMount() {
        var themeColors = document.documentElement;
        themeColors.style.setProperty('--dark-color', '#013030');
        themeColors.style.setProperty('--light-color', '#e8ffff');
        themeColors.style.setProperty('--gradient-start', '#7afdff');
        themeColors.style.setProperty('--gradient-end', '#9efdff');

        // Looks like a sunrise
        // themeColors.style.setProperty('--gradient-end', '#fcea88');
    }

    render() {
        return (
            <Page>
                <SectionCard id="contact">
                    <CardTitle>Don't Be a Stranger</CardTitle>
                    <div>
                        <Button className="button">Phone</Button>
                        <Button className="button">Email</Button>
                    </div>
                </SectionCard>
            </Page>
        )
    }
}