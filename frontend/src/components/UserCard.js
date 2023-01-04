import React, { useEffect, useState } from "react";
import "../pages/profile.css"
import useAuth from "../hooks/useAuth";


function UserCard(props) {

    const [totalPosts, setTotalPosts] = useState(0);


    const { theme, user, numberOfPosts } = props;
    const { username, profilePicture, bio } = user;

    console.log("number od posts", numberOfPosts)
    // const following = friends[0];
    // const followers = friends[1];

    const getTotalFriends = (arrayOfFriends) => {
        let totalFriends = 0;
        return totalFriends = arrayOfFriends.length;
    }

    // useEffect(() => {

    //     setFollowersTotal(getTotalFriends(following));
    //     setFollowingTotal(getTotalFriends(followers));

    // }, [])

    return (
        <aside id="userCardWrapper" className={theme === "light" ? "lightAside" : "shadowAside"}>
            <div className="profilePictureWrapper">
                <img className="profilePicture" src={profilePicture} alt="husky" />
            </div>
            <div className="userNameWrapper">
                {username}
            </div>
            <div className="userBioWrapper">
                {bio}
            </div>
            <div className="friendsWrapper">
               {numberOfPosts} <span>Manifestations</span>
            </div>
            <div>
                <a href="#">Search friends by sign</a>
            </div>
        </aside>
    )
}

export default UserCard;