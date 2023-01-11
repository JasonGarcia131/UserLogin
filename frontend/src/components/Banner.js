import React from "react";
import NavBar from "./NavBar";
import "../pages/profile.css"

function Banner(props) {

    const { theme, handleChangeTheme, bannerImageLight, bannerImageShadow } = props;


let style;
    return (
        <header>
            {
                bannerImageLight || bannerImageShadow
                    ? theme === "light" ? style = { backgroundImage: `url(${bannerImageLight})` } : style = { backgroundImage: `url(${bannerImageLight})` }
                        (

                            <div id="banner" style={{backgroundImage: style.backgroundImage}}>
                                <NavBar theme={theme} handleChangeTheme={handleChangeTheme} />
                            </div>
                        )
                    :
                    <div id="banner" className={theme === "light" ? "lightBanner" : "shadowBanner"}>
                        <NavBar theme={theme} handleChangeTheme={handleChangeTheme} />
                    </div>
            }

        </header>
    )
}

export default Banner