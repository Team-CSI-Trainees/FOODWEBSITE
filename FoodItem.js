import React,{useState} from "react"
import  "./FoodItem.css"
import Menu from "./Menu.js"
import Carousel from "./Carousel.js"

export default function FoodItem() {
const itemlist = [
    {  
      img:<img class="row1" src="images/img1.png" ></img>,
      
    name: "Home made pizza",
      price: '$'+190
    },


    {  
      img: <img class="row1" src="images/img2.png"></img>,
      name: "Home made pizza",
      price: '$'+230
    },

    {
      img: <img class="row1" src="images/img3.png"></img>,
      name: "Home made pizza",
      price: '$'+230
    },

    {
      img: <img class="row1" src="images/img4.png"></img>,
      name: "Home made pizza",
      price: '$'+230
    },


    {
      img: <img class="row2" src="images/img5.png"/>,
      name: "Home made pizza",
      price: '$'+230
    },

    {
      img: <img class="row2" src="images/img6.png"/>,
      name: "Home made pizza",
      price: '$'+230
    },

    {
      img: <img class="row2" src="images/img7.png"/>,
      name: "Home made pizza",
      price: '$'+230
    },

    {
      img: <img class="row2" src="images/img8.png"/>,
      name: "Home made pizza",
      price: '$'+230
    },



    {
      img: <img class="row3" src="images/img1.png"/>,
      name: "Home made pizza",
      price: '$'+230
    },


    {
      img: <img class="row3" src="images/img2.png"/>,
      name: "Home made pizza",
      price: '$'+230
    },

    {
      img: <img class="row3" src="images/img3.png"/>,
      name: "Home made pizza",
      price: '$'+230
    },

    {
      img: <img class="row3" src="images/img4.png"/>,
      name: "Home made pizza",
      price: '$'+230
    },

    


  ];

const mapping=itemlist.map((card,i)=>{
return (<Menu img={itemlist[i].img }
            name={itemlist[i].name}
          price={itemlist[i].price}/>);

}
) ; 

const images=[
  { id: 1,
src: <img class="pizza"src="images/img1.png" ></img>,
name: "Home made pizza",
price: '$'+190
},
{
id: 2,
src:<img class="pizza" src= "images/img2.png"></img>,
name: "Home made pizza",
      price: '$'+230
},
{
id: 3,
src:  <img class="pizza" src="images/img3.png"></img>,
name: "Home made pizza",
price: '$'+230
}
];


const carousel=images.map((c,i)=>{
  return (<Menu img={images[i].src }
    name={images[i].name}
    price={images[i].price}
  />);
});


  return (
    <>
 <h2 class="homekitchen">Home Kitchen</h2> 
        <div className="cards">
            {mapping}
            
            <h2 class="popularitems">Popular Items</h2>
            
            <img class="prev" src="images/prev.png"></img>
              {carousel}
             <img class="next" src="images/next.png"></img>
            </div>
        {/* </div> */}
     
    </>
  )}



