import React from "react";
import "../pages/profile.css"

function Banner(props) {

    const { setTheme, theme } = props;

    return (
        <header>
            <div id="banner" className={theme === "light" ? "lightBanner" : "shadowBanner"}>
            </div>
            <nav className="navBarWrapper">
                <p>
                    What's on your mind?
                </p>
                <button onClick={()=>setTheme("light")}>Light</button>
                <button onClick={()=>setTheme("shadow")}>Shadow</button>
                <button>{theme==="light" ? <p>Affirmation</p> : <p>Shadow Thought</p>}</button>
            </nav>
        </header>
    )
}

export default Banner