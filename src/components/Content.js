import React from 'react';
import './Content.css'; 

const content = () => {
    return (
        <div className="App-Content">
            <div className="h1-container">
                <h1>Say Hello to ReactJS</h1>
            </div>
            <div className="p-container">
                <p>You will learn a Frontend framework from scratch, to become a Ninja Developer.</p>
            </div>
            <div className="button-Container">
                <div className="button-Awesome"><button>Awesome!</button></div>
            </div>
        </div>
    );
}

export default content;