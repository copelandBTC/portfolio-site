import React from "react";

const CardTitle = (props) => {
    return (
        <h2 style={{display: "flex", justifyContent: "center"}}>
            { props.children }
        </h2>
    );
}

export default CardTitle;