import React from 'react';
import NavButton from '../nav-button';

export default class Hobbies extends React.Component {
    state = {};

    constructor(props) {
        super();
    }

    render() {
        return (
            <div>
                <section id="about-hobbies">
                    <h2>
                        I Have Quite a Few Hobbies
                    </h2>
                    <div>
                        I do in fact have a life outside the world of programming, although programming
                        itself was a hobby for me before it became a career. I have a lot of interests,
                        and it all boils down to two fundamental facts about me: I love to learn, and I
                        love to create. 
                    </div>
                </section>
                <section id="programming">
                    <h3>My Personal Programming Projects</h3>
                    <p>
                        <a href="https://github.com/copelandBTC">Here</a> is where you can find some of my personal coding projects, and even some old
                        school projects I did back in the day, although if you ask me those are a lot less
                        fun. 
                    </p>
                </section>
                <section id="art">
                    <h3>My Art</h3>
                    <p>
                        I've been drawing since I could put a pencil to paper. It's mostly digital nowadays,
                        but here's a sample of what I've done. 
                    </p>
                    <div>
                        // Put image carousel here
                    </div>
                </section>
                <section id="languages">
                    <h3>Languages I know</h3>
                    <p>
                        Human languages, not programming languages. A long time ago, I discovered a passion for learning
                        foreign languages. I may be a bit rusty, but I translated this whole page into Spanish. ¡Guau! Just
                        see for yourself. // FINGER POINT DOWN EMOJI.
                    </p>
                    <div>
                        <button>English</button>
                        <button>Español</button>
                        <button>English (American)</button>
                    </div>
                </section>
            </div>
        )
    }
}