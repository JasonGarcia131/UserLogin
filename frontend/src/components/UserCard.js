import React, { useEffect, useState } from "react";
import "../pages/profile.css"
import useAuth from "../hooks/useAuth";
import axios from "../api/axios";

function UserCard(props) {

    const [totalPosts, setTotalPosts] = useState(0);
    const [newProfilePicture, setNewProfilePicture] = useState("");


    const { theme, userInfo, numberOfPosts } = props;
    const { username, profilePicture, bio, id } = userInfo;

    const handleProfileImage = async (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        
        const results = await FileReader(file);
      
        console.log('results', results);

        if (file && file.type.substring(0, 5) === 'image') {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                console.log("reader.results", reader.result)
                setNewProfilePicture(reader.result);
            }
            handleSubmit();
        }
        // changeBannerImage();

    }

    const handleSubmit = async () => {
        const response = await axios.put(`/users/${id}`, newProfilePicture);
        console.log("response", response);
    }


    return (
        <aside id="userCardWrapper" className={theme === "light" ? "lightUserCard" : "shadowUserCard"}>
            <div className="profilePictureWrapper">
                <img className="profilePicture" src={profilePicture} alt="avatar" />
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