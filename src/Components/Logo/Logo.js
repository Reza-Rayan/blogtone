import React from "react";
import logoImg from '../../Assets/Logo.svg'

const Logo = (props) => {
    return(
        <img src={logoImg} width={props.logoSize} className="m-auto" />
    );
      
}

export default Logo