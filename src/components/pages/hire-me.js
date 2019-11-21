import React from 'react';
import NavButton from '../nav-button';

export default class HireMe extends React.Component {
    state = {};

    constructor(props) {
        super();
    }

    render() {
        return (
            <div>
                <header>
                    Hi, I'm Brandon!
                </header>
                <div id="about">
                    I could fly when I was younger. I could fly, I had super strength,
                    I could eat a flower and shoot fire from my hands, and I had the courage
                    to swing a sword at evil and save a princess. When I held a controller in
                    my hands, I could do all that and much more. The games I played when I was
                    a boy took me to other worlds. When I grew up, it dawned on me one day
                    that I had the power to create my own worlds. Before I knew it, I had
                    "how to program" in my search bar, and so began a new adventure. 
                </div>
                <button>My Resume</button>
                <div id="education">
                    <h2>MY EDUCATION</h2>
                    <p>Sam Houston State University</p>
                    <p>Huntsville, TX</p>
                    <p>Bachelor's of Computer Science</p>
                    <p>3.6 Major GPA</p>
                </div>
                <div id="work">
                    <h2>MY CAREER SO FAR</h2>
                    <div>
                        <p>PERQ</p>
                        <p>Indianapolis, IN</p>
                        <p>Software Developer</p>
                        <p>July 2018 - October 2019</p>
                    </div>
                    <div>~ * ~</div>
                    <div>
                        <p>Infosys</p>
                        <p>Indianapolis, IN</p>
                        <p>Software Developer</p>
                        <p>September 2017 - July 2018</p>
                    </div>
                </div>
                <div id="tech">
                    <h2>TECHNOLOGIES I'VE USED</h2>
                    <ul>
                        <li>JavaScript</li>
                        <li>TypeScript</li>
                        <li>React</li>
                        <li>Redux</li>
                        <li>Vue</li>
                        <li>C#</li>
                        <li>Visual Studio</li>
                        <li>Java</li>
                        <li>Python</li>
                        <li>Git</li>
                    </ul>
                </div>
            </div>
        )
    }
}