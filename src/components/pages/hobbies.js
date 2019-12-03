import React from 'react';
import NavButton from '../nav-button';
import Page from './page';
import SectionCard from '../section-card';
import CardTitle from '../card-title';
import { Card, Button, Carousel } from 'react-bootstrap';
import Dragonair from '../../assets/images/dragonair.png';
import KyloRen from '../../assets/images/kylo.png';
import Tiger from '../../assets/images/tiger.png';
import YouTube from '../../assets/images/youtube.png';
import Gif from '../../assets/images/gif.png';
import British from '../../assets/images/british.png';
import America from '../../assets/images/america.png';
import Spain from '../../assets/images/spanish.svg';
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
                <SectionCard id="programming">
                    <CardTitle>My Personal Programming Projects</CardTitle>
                    <div className="projectIconContainer">
                        <a href="https://github.com/copelandBTC/YouTubeRake" target="_blank">
                            <img id="youtube" src={YouTube} alt="YouTube Project" />
                        </a>
                        <a href="https://github.com/copelandBTC/Giffer" target="_blank">
                            <img id="gif" src={Gif} alt="Gif Project" />
                        </a>
                    </div>
                </SectionCard>
                <SectionCard id="art">
                    <CardTitle>My Art</CardTitle>
                    <Carousel>
                        <Carousel.Item>
                            <img className="art" src={Dragonair} alt="Picture 1" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="art" src={KyloRen} alt="Picture 2" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="art" src={Tiger} alt="Picture 3" />
                        </Carousel.Item>
                    </Carousel>
                </SectionCard>
                <SectionCard id="languages">
                    <CardTitle>Languages I know</CardTitle>
                    <Card.Text>
                        Human languages, not programming languages. A long time ago, I discovered a passion for learning
                        foreign languages. I may be a bit rusty, but I translated this whole page into Spanish. ¡Guau! Just
                        see for yourself.
                    </Card.Text>
                    <div className="languageButtonContainer">
                        <Button style={{ background: `url(${British})`, backgroundSize: "90%", backgroundRepeat: "no-repeat" }} className="button languageButton"></Button>
                        <Button style={{ background: `url(${Spain})`, backgroundSize: "100%", backgroundRepeat: "no-repeat" }} className="button languageButton"></Button>
                        <Button style={{ background: `url(${America})`, backgroundSize: "110%", backgroundRepeat: "no-repeat" }} className="button languageButton"></Button>
                    </div>
                </SectionCard>
            </Page>
        )
    }
}