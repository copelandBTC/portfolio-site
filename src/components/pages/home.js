import React from 'react';
import NavButton from '../nav-button';
import Page from './page';
import '../../styles/home.css';
import HomePageNavButton from '../home-page-nav-button';

export default class Home extends React.Component {
    state = {};

    constructor(props) {
        super();
    }

    componentWillMount() {
        var themeColors = document.documentElement;
        themeColors.style.setProperty('--dark-color', '#f7f7f7');
        themeColors.style.setProperty('--light-color', '#ffffff');
        themeColors.style.setProperty('--gradient-start', '#f7f7f7');
        themeColors.style.setProperty('--gradient-end', '#ffffff');
    }

    render() {
        return (
            <div>
                <h1 className="greeting">
                    Hi, I'm Brandon!
                </h1>
                <div className="buttonContainer">
                    <div className="firstRow">
                        <HomePageNavButton id="hireme" link="whyyoushouldhireme" buttonText="Credentials" />
                        <HomePageNavButton id="hobbies" link="whatidoforfun" buttonText="Hobbies" />
                    </div>
                    <div className="secondRow">
                        <HomePageNavButton id="contact" link="contact" buttonText="Contact" /> 
                    </div>
                </div>
            </div>
        )
    }
}