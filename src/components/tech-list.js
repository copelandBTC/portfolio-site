import React from 'react';
import { ListGroup } from 'react-bootstrap';
 
const TechList = (props) => {
    return (
        <ListGroup>
            <h6>{ props.listItems }</h6>
        </ListGroup>
    )
}

export default TechList;