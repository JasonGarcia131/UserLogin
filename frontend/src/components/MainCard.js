import React, { useState } from "react";
import PostTextBox from "./PostTextBox";
import Post from "./Post";
import "../pages/profile.css"

function MainCard (props) {

    const {theme, user, posts, setPost, post, handleSubmit, errorMessage, handleDelete} = props;

    const {id, username, profilePicture} = user;

    // const handleDelete = () => {

    // }

    const mappedPost = posts?.map((post, i) => {
        return(
            <Post key={i} username={username} profilePicture={profilePicture} post={post.content} handleDelete={handleDelete} theme={theme}/>
        )
    })

    return(
        <section className="postWrapper">
            {theme === "light" ? <h2>Affirmations</h2> : <h2>Shadow Thoughts</h2>}
            <PostTextBox theme={theme} id={id} setPost={setPost} post={post} handleSubmit={handleSubmit}/>
            <p>{errorMessage.length > 0 ? errorMessage : ""}</p>
            {mappedPost}
        </section>
    )
}

export default MainCard;