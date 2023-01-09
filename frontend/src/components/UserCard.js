import React, { useEffect, useState } from "react";
import "../pages/profile.css"
import useAuth from "../hooks/useAuth";


function UserCard(props) {

    const [totalPosts, setTotalPosts] = useState(0);


    const { theme, user, numberOfPosts } = props;
    const { username, profilePicture, bio } = user;



    return (
        <aside id="userCardWrapper" className={theme === "light" ? "lightUserCard" : "shadowUserCard"}>
            <div className="profilePictureWrapper">
                <img className="profilePicture" src={profilePicture} alt="husky" />
            </div>
            <h1 className="userNameWrapper">
                {username}
            </h1>
            <p className="userBioWrapper">
                {bio}
            </p>
            <div className="friendsWrapper">
               {numberOfPosts} <span>Journal Entries</span>
            </div>
        </aside>
    )
}

export default UserCard;