import React from "react";
import "../pages/profile.css"

function UserCard(props) {

    const {theme} = props;

    return (
        <aside id="userCardWrapper" className={theme === "light" ? "lightAside" : "shadowAside"}>
            <div className="profilePictureWrapper">
                Profile Picture
            </div>
            <div className="userNameWrapper">
                UserName
            </div>
            <div className="userBioWrapper">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nostrum enim assumenda exercitationem, dolores doloremque soluta quia vel saepe possimus!
            </div>
            <div className="friendsWrapper">
                <a href="#">Followers</a>0
                <a href="#">Following</a>0
            </div>
            <div>
                <a href="#">Search friends by sign</a>
            </div>
        </aside>
    )
}

export default UserCard;