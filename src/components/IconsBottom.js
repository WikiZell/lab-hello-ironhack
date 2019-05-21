import React from 'react';
import './IconsBottom.css'; 

const iconsBottom = (props) => {
    return (
        <div className="icon-container">
            <img src={props.imgPath} alt={props.title}/>
            <h2>{props.title}</h2>
            <p><span className="text-black">{props.subTitle}</span></p>
        </div>
    );
}

export default iconsBottom;