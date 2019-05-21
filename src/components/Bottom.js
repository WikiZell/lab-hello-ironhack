import React from 'react';
import IconsBottom from './IconsBottom'
import './Bottom.css';


const bottom = () => {
    return (
        <section className="Bottom-Section">
            <IconsBottom title="Declarative" subTitle="React makes it painless to create interactive UIs." imgPath="/images/icon1.png"></IconsBottom>
            <IconsBottom title="Components" subTitle="Build encapsulated components that manage their state." imgPath="/images/icon2.png"></IconsBottom>
            <IconsBottom title="Single-Way" subTitle="A set of immutable values are passed to the components." imgPath="/images/icon3.png"></IconsBottom>
            <IconsBottom title="JSX" subTitle="Statically-typed, designed to run on modern browsers." imgPath="/images/icon4.png"></IconsBottom>
        </section>
    );
}

export default bottom;