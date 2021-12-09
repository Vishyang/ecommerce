import React from 'react'
import { NavLink } from "react-router-dom";
import Catalogue from "./Components/Catalogue/Catalogue";
// import Contacts from "./Components/Contacts/Contact";
function Menu() {
    return (
        <>

            
            {/* <NavLink exact activeClassName="active_Class" to="/Menu">calalog</NavLink>
<Catalogue/> */}
{/* <NavLink exact activeClassName="active_Class" to="/">AboutUs</NavLink> */}

<Catalogue />
            {/*  <a href="/">AboutUs</a>
            <a href="/contact">Contact</a>*/}
        </>
    );
}
export default Menu;