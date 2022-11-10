// import React,{useState} from "react"

// import {itemlist} from "./FoodItem.js"
// export default function Carousel(){

//     const [currImg,setcurrImg]=useState(0);
// return(<>



// <div className="carousel">

// <div className="carouselinner" >
// {props.img}
// </div>



// </div>
// <div class="prev" onClick={()=>{
//      currImg>0 && setcurrImg(currImg-1);
// }}></div>
export default function Carousel(props) {
return(<>
    {props.img}
    </>
);  
}





























