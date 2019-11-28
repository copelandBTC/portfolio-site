import React from "react";

const CardTitle = (props) => {
    return (
        <div>
            <h2 style={{display: "flex", justifyContent: "center"}}>
                { props.children }
            </h2>
        </div>
    );
}

export default CardTitle;