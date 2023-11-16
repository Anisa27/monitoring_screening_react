import React from "react";
import './style.css';  

function TitleBar(props){
    return (
        <div className="Navbar">
            <h1>{props.title}</h1>
        </div>
    )
}

export default TitleBar