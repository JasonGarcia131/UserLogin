import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import "../pages/profile.css"
import axios from "../api/axios";

function Banner(props) {

    const { theme, handleChangeTheme, userInfo, id } = props;

    const [bannerImage, setBannerImage] = useState({
        theme: theme,
        image: ""
    });

    const [editBanner, setEditBanner] = useState(false);

    const bannerImageLight = userInfo.bannerImageLight;
    const bannerImageShadow = userInfo.bannerImageShadow;
    const style = theme === "light" ? `url(${bannerImageLight})` : `url(${bannerImageShadow})`

    console.log("theme in banner", theme);

    const handlebannerImage = async (e) => {
        e.preventDefault();

        const file = e.target.files[0];

        if (file && file.type.substring(0, 5) === 'image') {
            setEditBanner(true);
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                console.log("reader.results", reader.result)
                setBannerImage((prevData) => ({ ...prevData, image: reader.result }));
            }
            changeBannerImage();
        } else {
            setEditBanner(false);
            setBannerImage(null);
        }

    }


    const changeBannerImage = async (file) => {
        const response = await axios.put(`/users/${userInfo.id}`, bannerImage);
        setEditBanner(false);
        setBannerImage({
            theme: theme,
            image: ""
        });
    }

    return (
        <header>
            <div id="banner" style={{ backgroundImage: style }}>
                <NavBar theme={theme} handleChangeTheme={handleChangeTheme} />
            </div>
            <div id="banner" className={theme === "light" ? "lightBanner" : "shadowBanner"}>
                <div id="editBanner">
                    <input
                        type="file"
                        accept="/image/*"
                        placeholder="Edit Banner"
                        onChange={(e) => handlebannerImage(e)}
                    />
                    {
                        editBanner ? <button onClick={() => changeBannerImage()}>Upload Image</button> : null
                    }
                </div>
                <NavBar theme={theme} handleChangeTheme={handleChangeTheme} />
            </div>
        </header>
    )
}

export default Banner