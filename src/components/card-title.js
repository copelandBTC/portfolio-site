import React from "react";
import "../styles/card-title.css";

const CardTitle = (props) => {
    return (
        <div>
            <h2 className="cardTitle">
                { props.children }
            </h2>
        </div>
    );
}

export default CardTitle;