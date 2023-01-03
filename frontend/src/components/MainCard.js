import React, { useState } from "react";
import PostTextBox from "./PostTextBox";
import Post from "./Post";
import "../pages/profile.css"

function MainCard (props) {

    const {theme, user, posts} = props;

    const {id, username, profilePicture} = user;

    const mappedPost = posts?.content?.map((post, i) => {
        return(
            <Post key={i} username={username} profilePicture={profilePicture} post={post.post}/>
        )
    })

    return(
        <main className="postWrapper">
            {theme === "light" ? <h2>Affirmations</h2> : <h2>Shadow Thoughts</h2>}
            <PostTextBox theme={theme} id={id} />
            {mappedPost}
        </main>
    )
}

export default MainCard;