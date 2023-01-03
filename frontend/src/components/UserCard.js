import React, { useEffect, useState } from "react";
import "../pages/profile.css"
import useAuth from "../hooks/useAuth";


function UserCard(props) {

    const [followersTotal, setFollowersTotal] = useState(0);
    const [followingTotal, setFollowingTotal] = useState(0);


    const { theme, user } = props;
    const { username, profilePicture, friends, bio } = user;

    const following = friends[0];
    const followers = friends[1];

    const getTotalFriends = (arrayOfFriends) => {
        let totalFriends = 0;
        return totalFriends = arrayOfFriends.length;
    }

    useEffect(() => {

        setFollowersTotal(getTotalFriends(following));
        setFollowingTotal(getTotalFriends(followers));

    }, [])

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
                <a href="#">Followers</a>{followersTotal}
                <a href="#">Following</a>{followingTotal}
            </div>
            <div>
                <a href="#">Search friends by sign</a>
            </div>
        </aside>
    )
}

export default UserCard;