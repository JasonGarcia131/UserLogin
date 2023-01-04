import React from "react";
import NavBar from "./NavBar";
import "../pages/profile.css"

function Banner(props) {

    const { setTheme, theme } = props;

    return (
        <header>
            <div id="banner" className={theme === "light" ? "lightBanner" : "shadowBanner"}>
                <NavBar setTheme={setTheme} theme={theme} />
            </div>
        </header>
    )
}

export default Banner