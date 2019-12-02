import React from 'react';
import NavButton from '../nav-button';
import TechListItem from '../tech-list-item';
import TechList from '../tech-list';
import '../../styles/hire-me.css';
import { Card, Button } from 'react-bootstrap';
import SectionCard from '../section-card';
import CardTitle from '../card-title';
import Page from './page';
import JavaScriptImage from '../../assets/images/javascript.png';
import PythonImage from '../../assets/images/python.png';
import TypeScriptImage from '../../assets/images/typescript.png';
import ReactImage from '../../assets/images/react.png';
import ReduxImage from '../../assets/images/redux.png';
import VueImage from '../../assets/images/vue.png';
import CSharpImage from '../../assets/images/csharp.png';
import JavaImage from '../../assets/images/java.png';
import GitImage from '../../assets/images/git.png';

export default class HireMe extends React.Component {
    state = {};

    constructor(props) {
        super();
        this.techList = [
            <TechListItem imgSrc={ JavaScriptImage } itemName="JavaScript" />,
            <TechListItem imgSrc={ TypeScriptImage } itemName="TypeScript" />,
            <TechListItem imgSrc={ ReactImage } itemName="React" />,
            <TechListItem imgSrc={ ReduxImage } itemName="Redux" />,
            <TechListItem imgSrc={ VueImage } itemName="Vue" />,
            <TechListItem imgSrc={ CSharpImage } itemName="C#" />,
            <TechListItem imgSrc={ JavaImage } itemName="Java" />,
            <TechListItem imgSrc={ PythonImage } itemName="Python" />,
            <TechListItem imgSrc={ GitImage } itemName="Git" />,
        ];
    }

    componentWillMount() {
        var themeColors = document.documentElement;
        themeColors.style.setProperty('--dark-color', '#0b2e13');
        themeColors.style.setProperty('--light-color', '#d4fff4');
        themeColors.style.setProperty('--gradient-start', '#23ffb6');
        themeColors.style.setProperty('--gradient-end', '#5bffca');
    }

    render() {
        return (
            <Page>
                <Button className="button" size="large">My Resume</Button>
                <SectionCard id="education">
                    <CardTitle>MY EDUCATION</CardTitle>
                    <Card.Text>Sam Houston State University</Card.Text>
                    <Card.Text>Huntsville, TX</Card.Text>
                    <Card.Text>Bachelor's of Computer Science</Card.Text>
                    <Card.Text>3.6 Major GPA</Card.Text>
                </SectionCard>
                <SectionCard id="work">
                    <CardTitle>MY CAREER SO FAR</CardTitle>
                        <Card.Text>PERQ</Card.Text>
                        <Card.Text>Indianapolis, IN</Card.Text>
                        <Card.Text>Software Developer</Card.Text>
                        <Card.Text>July 2018 - October 2019</Card.Text>
                    <hr />
                        <Card.Text>Infosys</Card.Text>
                        <Card.Text>Indianapolis, IN</Card.Text>
                        <Card.Text>Software Developer</Card.Text>
                        <Card.Text>September 2017 - July 2018</Card.Text>
                </SectionCard>
                <SectionCard id="tech">
                    <CardTitle>TECHNOLOGIES I'VE USED</CardTitle>
                    <div className="techList">
                        <TechList listItems={ this.techList.slice(0, 3) } />
                        <TechList listItems={ this.techList.slice(3, 6) } />
                        <TechList listItems={ this.techList.slice(6) } />
                    </div>
                </SectionCard>
            </Page>
        )
    }
}