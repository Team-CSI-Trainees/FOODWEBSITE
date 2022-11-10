
import './App.css';
import "./Footer.css";
import Footer from "./Footer.js"
import FoodItem from "./FoodItem.js";
import Page from "./Page.js";
import {BrowserRouter, HashRouter, Link, MemoryRouter, NavLink, Prompt, Redirect, Route, Router, StaticRouter, Switch, generatePath, matchPath, useHistory, useLocation, useParams, useRouteMatch, withRouter} from "react-router-dom";
// import Menu from "./menu.js"
// import { Outlet, Link } from "react-router-dom";
export default function App() {
  return (<>
<Page/>
<FoodItem/>
<Footer/>
</>
  );
}