import React from "react";
import './NavItem.css'


const NavItem = (props) =>{
    return(
        <li className="nav-item navItem">
            <a className="nav-link" href={props.navLink}>
                <img src={props.navIcon} width={16} className='mb-1 mx-1' />
                {props.children}</a>
        </li>
    )
}

export default NavItem