import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../styles/home.css';

const HomePageNavButton = (props) => {
    return (
        <NavLink to={`/${props.link}`}>
            <Button id={ props.id } className="homeButton">
                { props.buttonText }
            </Button>
        </NavLink>
    );
}

export default HomePageNavButton;