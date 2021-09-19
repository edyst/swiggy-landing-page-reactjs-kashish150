import React from 'react';
import ReactDOM from 'react-dom';
import './Feature.css';
function Feature(props){
    return <div>
        <img className="featimg" src={props.imgsrc}/>
        <h2 className="feath2">{props.h2}</h2>
        <p className="featp2">{props.p2}</p>
        </div>
}
export default Feature;