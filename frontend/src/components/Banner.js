import React from "react";
import NavBar from "./NavBar";
import "../pages/profile.css"

function Banner(props) {

    const { theme, handleChangeTheme } = props;

    return (
        <header>
            <div id="banner" className={theme === "light" ? "lightBanner" : "shadowBanner"}>
                <NavBar theme={theme} handleChangeTheme={handleChangeTheme} />
            </div>
        </header>
    )
}

export default Banner