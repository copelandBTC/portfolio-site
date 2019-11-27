import React from 'react';
import NavButton from '../nav-button';
import TechListItem from '../tech-list-item';
import TechList from '../tech-list';
import '../../styles/hire-me.css';
import { Card, Button } from 'react-bootstrap';
import SectionCard from '../section-card';
import CardTitle from '../card-title';
import Page from './page';

export default class HireMe extends React.Component {
    state = {};

    constructor(props) {
        super();
        this.techList = [
            <TechListItem imgSrc="https://via.placeholder.com/75" itemName="JavaScript" />,
            <TechListItem imgSrc="https://via.placeholder.com/75" itemName="TypeScript" />,
            <TechListItem imgSrc="https://via.placeholder.com/75" itemName="React" />,
            <TechListItem imgSrc="https://via.placeholder.com/75" itemName="Redux" />,
            <TechListItem imgSrc="https://via.placeholder.com/75" itemName="Vue" />,
            <TechListItem imgSrc="https://via.placeholder.com/75" itemName="C#" />,
            <TechListItem imgSrc="https://via.placeholder.com/75" itemName="Java" />,
            <TechListItem imgSrc="https://via.placeholder.com/75" itemName="Python" />,
            <TechListItem imgSrc="https://via.placeholder.com/75" itemName="Git" />,
        ];
    }

    render() {
        return (
            <Page>
                <Button block className="resumeButton" size="large">My Resume</Button>
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
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <TechList listItems={ this.techList.slice(0, 3) } />
                        <TechList listItems={ this.techList.slice(3, 6) } />
                        <TechList listItems={ this.techList.slice(6) } />
                    </div>
                </SectionCard>
            </Page>
        )
    }
}