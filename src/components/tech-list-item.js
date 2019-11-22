import React from 'react';
import { ListGroup } from 'react-bootstrap';

const TechListItem = (props) => {
    return (
        <ListGroup.Item style={{background: "transparent", border: "transparent"}}>
            <img src={ props.imgSrc } />
            <p style={{ fontSize: "10px", display: "flex", justifyContent: "center" }}>{ props.itemName }</p>
        </ListGroup.Item>
    );
}

export default TechListItem;