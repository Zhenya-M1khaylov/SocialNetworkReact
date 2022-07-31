import React from 'react';
import spinner from './../../../assets/images/spinner.gif'

export const Preloader = () => {
    return (
        <div style={{backgroundColor: "white"}}>
            <img src={spinner} alt="wait"/>
        </div>
    );
};