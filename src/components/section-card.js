import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

const SectionCard = (props) => {
    return (
        <section>
            <Card className="sectionCard">
                <Card.Body>
                    { 
                        props.children.map(child => {
                            return <h5 style={{ display: "flex", justifyContent: "center" }}>{ child }</h5>
                        })
                    }
                </Card.Body>
            </Card>
        </section>
    );
}

export default SectionCard;