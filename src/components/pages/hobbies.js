import React from 'react';
import NavButton from '../nav-button';
import Page from './page';
import SectionCard from '../section-card';
import CardTitle from '../card-title';
import { Card, Button } from 'react-bootstrap';
import "../../styles/hobbies.css";


export default class Hobbies extends React.Component {
    state = {};

    constructor(props) {
        super();
    }

    componentWillMount() {
        var themeColors = document.documentElement;
        themeColors.style.setProperty('--dark-color', '#292600');
        themeColors.style.setProperty('--light-color', '#fffdde');
        themeColors.style.setProperty('--gradient-start', '#fffaa1');
        themeColors.style.setProperty('--gradient-end', '#faf7bb');
    }

    render() {
        return (
            <Page>
                <SectionCard id="about-hobbies">
                    <CardTitle>I Have Quite a Few Hobbies</CardTitle>
                    <Card.Text>
                        I do in fact have a life outside the world of programming, although programming
                        itself was a hobby for me before it became a career. I have a lot of interests,
                        and it all boils down to two fundamental facts about me: I love to learn, and I
                        love to create. 
                    </Card.Text>
                </SectionCard>
                <SectionCard id="programming">
                    <CardTitle>My Personal Programming Projects</CardTitle>
                    <Card.Text>
                        <a href="https://github.com/copelandBTC">Here</a> is where you can find some of my personal coding projects, and even some old
                        school projects I did back in the day, although if you ask me those are a lot less
                        fun. 
                    </Card.Text>
                </SectionCard>
                <SectionCard id="art">
                    <CardTitle>My Art</CardTitle>
                    <Card.Text>
                        I've been drawing since I could put a pencil to paper. It's mostly digital nowadays,
                        but here's a sample of what I've done. 
                    </Card.Text>
                    <div>
                        // Put image carousel here
                    </div>
                </SectionCard>
                <SectionCard id="languages">
                    <CardTitle>Languages I know</CardTitle>
                    <Card.Text>
                        Human languages, not programming languages. A long time ago, I discovered a passion for learning
                        foreign languages. I may be a bit rusty, but I translated this whole page into Spanish. ¡Guau! Just
                        see for yourself.
                    </Card.Text>
                    <div className="languageButtonContainer">
                        <Button className="button languageButton">English</Button>
                        <Button className="button languageButton">Español</Button>
                        <Button className="button languageButton">English (American)</Button>
                    </div>
                </SectionCard>
            </Page>
        )
    }
}