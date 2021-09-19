import React from 'react';
import ReactDOM from 'react-dom';
import Login from'./Login';
import './Login.css';
import './Cp1.css';
function Cp1(){
    return <div className="flexcompo">
        <div className="lwidth"><Login/></div>
       <div className="login2"> <img className="maxwidthfood" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_1340/Lunch1_vlksgq"/>
        </div>
    </div>
}
export default Cp1;