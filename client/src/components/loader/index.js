import React from "react";
import "./style.css";

const Loader = () => {
    return (
        <div className="loader-wrapper">
            <div className="lds-spinner">
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
            </div>
        </div>

    );
};

export default Loader;