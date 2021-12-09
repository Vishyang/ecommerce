import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from "./Components/About/About.js";
import Contact from "./Components/Contacts/Contact.js";
import Error from "./Components/Error/Error";
// import Menu from "./Menu";
import Header from "./Components/Header/Header.js";
import Footer from "./Components/Footer/Footer.js";
import Catalogue from "./Components/Catalogue/Catalogue";
import Contacts from "./Components/Contacts/Contact";
import CartPage from "./Components/Cart/CartPage.js";
import CSSGrid1 from "./Components/Cart/Cart.js";
// import About from "./Components/About/About.js";
// import Cart from './CartPage';
import { NavLink } from "react-router-dom";
import handleClick from "./Components/Header/Bread"
function App() {
  return (
    <div className="App">
     {/* <Router>
       <Switch> */}
        <Header />

{/* <Menu/> */}
{/* <About/> */}
<Catalogue />
<Footer />
       {/* </Switch>
     </Router> */}
    </div>
    
  );
}


export default App;
