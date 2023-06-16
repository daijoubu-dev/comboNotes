import React from "react";
import logoImg from "../images/logo.png"

const Header = () => {
    return (
        <div className="header">
            <div />
            <img src={logoImg} alt="ComboNotes" className="logo"/>
            <div />
        </div>
    )
}

export default Header;