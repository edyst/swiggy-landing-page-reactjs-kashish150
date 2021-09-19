import React from 'react';
import ReactDOM from 'react-dom';
import Feature from './Feature';
import './Cp2.css';
function Cp2(){
return <div className="container">  
       <div className="flex-container"> 
         <div className="feature"><Feature imgsrc={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_210,h_398/4x_-_No_min_order_x0bxuf"} h2={'No Minimum Order'} p2={"Order in for yourself or for the group,with no restrictions on order value"}/></div>
         <div className="feature"><Feature imgsrc={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_224,h_412/4x_Live_order_zzotwy"} h2={"Live Order Tracking"} p2={"Know where your order is at all times,from the restaurant to your doorstep"}/></div>
         <div className="feature"><Feature imgsrc={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_248,h_376/4x_-_Super_fast_delivery_awv7sn"} h2={"Lightning-Fast Delivery"} p2={"Experience Swiggy's superfast deliveryfor food delivered fresh & on time"}/></div>
         </div>
         </div>



    // 
    //        <div ClassName="flex">
    //       <div><Feature imgsrc={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_210,h_398/4x_-_No_min_order_x0bxuf"} h2={'No Minimum Order'} p2={"Order in for yourself or for the group,with no restrictions on order value"}/></div>
    //       <div><Feature imgsrc={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_224,h_412/4x_Live_order_zzotwy"} h2={"Live Order Tracking"} p2={"Know where your order is at all times,from the restaurant to your doorstep"}/></div>
    //       <div><Feature imgsrc={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_248,h_376/4x_-_Super_fast_delivery_awv7sn"} h2={"Lightning-Fast Delivery"} p2={"Experience Swiggy's superfast deliveryfor food delivered fresh & on time"}/></div>
    //        </div>
    // </div>
}
export default Cp2;