import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

const SectionCard = (props) => {
    return (
        <section>
            <Card style={{ width: '40rem', background: '#d4fff4', marginBottom: "40px", borderRadius: "3%", boxShadow: "5px 5px 5px #0b2e13" }}>
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