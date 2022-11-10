import { BrowserRouter, HashRouter, Link, MemoryRouter, NavLink, Prompt, Redirect, Route, Router, StaticRouter, Switch, generatePath, matchPath, useHistory, useLocation, useParams, useRouteMatch, withRouter } from "react-router-dom";
// import Fooditem from "./FoodItem.js";
import React from "react"
import "./Page.css"
export default function Page() {
    return (<>
        
            <div class="navbar">
               

                    <ul> 
                        <li class="jtgeats">JTGeats</li>
                        <li>
                            <Link to="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link>
                                Menu
                            </Link>
                        </li>
                        <li>
                            <Link>Blog</Link>
                        </li>
                        <li> <Link>Contact</Link></li>
                        
                        <div class="sl">
                        <div class="srchlck"> <img class="img1" src="srch.png" width="35px" height="35px"></img></div> 
                      <div class="srchlck"><img src="lck.png" class="img2" width="35px" height="30px" /></div> 
                      </div>
                    </ul>

                    
             
            </div>
            <header class="header">
            <div class="content">
                <div class="para">
                    <h1>Authentic Home<br></br>
                        food in India </h1>
                    JTGeats is a courier service in which authentic home<br></br>
                    cook food is delivered to a customer.<br></br>
                    
                    
                </div>
                <input class="searchbox" text="search" placeholder="Search food you love" ></input>
                        <span class="sbox">Search</span>
            </div>
            

            <div class="boy">
                {/* <div class="usegrid"> */}
                {/* <div class="pic"> */}
                <img class="pic" src="cuate.png" ></img>
            </div>
            


            {/* </div> */}
            {/* </div> */}
        </header>

       <main>





       </main>


















    </>



















    );
}