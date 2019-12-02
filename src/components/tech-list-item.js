import React from 'react';
import { ListGroup } from 'react-bootstrap';
import "../styles/tech-list-item.css";

const TechListItem = (props) => {
    return (
        <ListGroup.Item className="listItem">
            <img src={ props.imgSrc } />
            <p className="itemName">{ props.itemName }</p>
        </ListGroup.Item>
    );
}

export default TechListItem;