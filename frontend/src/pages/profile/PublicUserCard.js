import "../profileCSS/usercard.css";
import React, { useState } from "react";

function PublicUserCard(props) {

    const [message, setMessage] = useState("");
    const [totalPosts, setTotalPosts] = useState(0);

    const { theme, userInfo, numberOfPosts } = props;
    const { username, profilePicture, bio, id } = userInfo;

    return (
        <aside id="userCardWrapper" className={theme === "light" ? "lightUserCard" : "shadowUserCard"}>
            <div id="userCardProfilePictureWrapper" className="profilePictureWrapper">
                <img id="userCardProfilePicture" className="profilePicture" src={profilePicture} alt="avatar" />
            </div>
            <br />
            <h1 id="userNameWrapper">
                {username}
            </h1>
            <p id="userBioWrapper">
                "{bio}"
            </p>
            <br />
            <div id="journalEntriesCount">
                {numberOfPosts} <span>Journal Entries</span>
            </div>
        </aside>
    )
}

export default PublicUserCard;