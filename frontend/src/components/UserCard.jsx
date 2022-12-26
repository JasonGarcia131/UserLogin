import React from "react";

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
        </aside>
    )
}

export default UserCard;