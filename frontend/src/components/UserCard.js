import React from "react";
import "../pages/profile.css"
import useAuth from "../hooks/useAuth";


function UserCard(props) {

    const {theme, user} = props;

    const username = user.user;
    const profilePicture = user.profilePicture;

    return (
        <aside id="userCardWrapper" className={theme === "light" ? "lightAside" : "shadowAside"}>
            <div className="profilePictureWrapper">
                <img className="profilePicture" src={profilePicture} alt="husky"/>
            </div>
            <div className="userNameWrapper">
                {username}
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