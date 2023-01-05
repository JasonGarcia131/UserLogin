import React, { useState } from "react";
import PostTextBox from "./PostTextBox";
import Post from "./Post";
import "../pages/profile.css"

function MainCard(props) {


    const { theme, user, posts, setPost, post, handleSubmit, message, handleDelete } = props;

    const { id, username, profilePicture } = user;

    const lightPosts = posts?.filter(post => post.theme === "light");
    const shadowPosts = posts?.filter(post => post.theme === "shadow");

    const mappedPost = theme === "light"
        ?
        lightPosts?.map((post, i) => {
            return (
                <>
                    <Post key={i} username={username} profilePicture={profilePicture} post={post} handleDelete={handleDelete} theme={theme} />
                    <div className="deleteButtonWrapper">
                        <button onClick={() => handleDelete(i)}>Delete</button>
                        <p>{post.isPrivate ? "Private" : "Public"}</p>
                    </div>
                </>
            )
        })
        :
        shadowPosts?.map((post, i) => {
            return (
                <>
                    <Post key={i} username={username} profilePicture={profilePicture} post={post} handleDelete={handleDelete} theme={theme} />
                    <div className="deleteButtonWrapper">
                        <button onClick={() => handleDelete(i)}>Delete</button>
                        <p>{post.isPrivate ? "Private" : "Public"}</p>
                    </div>
                </>)
        })

    return (
        <section className="postWrapper">
            {theme === "light" ? <h2>Affirmations</h2> : <h2>Shadow Thoughts</h2>}
            <PostTextBox theme={theme} id={id} setPost={setPost} post={post} handleSubmit={handleSubmit} />
            <p>{message.length > 0 ? message : ""}</p>
            {mappedPost}
        </section>
    )
}

export default MainCard;