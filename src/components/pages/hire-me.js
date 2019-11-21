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
                <section id="about-career">
                    <h2>The Beginning of My Journey</h2>
                    <div>
                        I could fly when I was younger. Not only could I fly, I had super strength,
                        I could throw fireballs, and I had the courage
                        to swing a sword at evil and save a princess. When I held a controller in
                        my hands, I could do all that and much more. The games I played when I was
                        a boy took me to other worlds. When I grew up, it dawned on me one day
                        that I had the power to create my own worlds. Before I knew it, I had
                        "how to program" in my search bar, and so began a new journey. 
                    </div>
                </section>
                <button>My Resume</button>
                <section id="education">
                    <h3>MY EDUCATION</h3>
                    <p>Sam Houston State University</p>
                    <p>Huntsville, TX</p>
                    <p>Bachelor's of Computer Science</p>
                    <p>3.6 Major GPA</p>
                </section>
                <section id="work">
                    <h3>MY CAREER SO FAR</h3>
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
                </section>
                <section id="tech">
                    <h3>TECHNOLOGIES I'VE USED</h3>
                    <ul>
                        <li>
                            <div>
                                <img src="https://via.placeholder.com/50" />
                                <p>JavaScript</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <img src="https://via.placeholder.com/50" />
                                <p>TypeScript</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <img src="https://via.placeholder.com/50" />
                                <p>React</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <img src="https://via.placeholder.com/50" />
                                <p>Redux</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <img src="https://via.placeholder.com/50" />
                                <p>Vue</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <img src="https://via.placeholder.com/50" />
                                <p>C#</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <img src="https://via.placeholder.com/50" />
                                <p>Visual Studio</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <img src="https://via.placeholder.com/50" />
                                <p>Java</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <img src="https://via.placeholder.com/50" />
                                <p>Python</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <img src="https://via.placeholder.com/50" />
                                <p>Git</p>
                            </div>
                        </li>
                    </ul>
                </section>
            </div>
        )
    }
}
