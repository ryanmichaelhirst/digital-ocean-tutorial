import React from "react";

const Msg = ({ header, msg }) => {
    return (
        <div className="msg">
            <h1>{header}</h1>
            <p>{msg}</p>
        </div>
    );
};

export default Msg;