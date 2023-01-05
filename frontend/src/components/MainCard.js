import React, { useEffect, useState } from "react";
import PostTextBox from "./PostTextBox";
import Post from "./Post";
import "../pages/profile.css"

function MainCard(props) {

    const [editMode, setEditMode] = useState(false);

    const { theme, user, posts, setPost, post, handleSubmit, message } = props;

    const { id, username, profilePicture } = user;

    const lightPosts = posts?.filter(post => post.theme === "light");
    const shadowPosts = posts?.filter(post => post.theme === "shadow");

    const handleDelete = (i) => {
        console.log("clicked delete")
        setEditMode(!editMode);
    }

    //////////Need to find to hide delete button

    const mappedPost = theme === "light"
        ?
        lightPosts?.map((post, i) => {
            return (
                <div key={i}>
                    <Post username={username} profilePicture={profilePicture} post={post} handleDelete={handleDelete} theme={theme} />
                    <div className="deleteButtonWrapper">
                        <button onClick={() => handleDelete(i)} className={editMode ? "hide" : "unhide"}>Delete</button>
                        <p>{post.isPrivate ? "Private" : "Public"}</p>
                    </div>
                </div>
            )
        })
        :
        shadowPosts?.map((post, i) => {
            return (
                <div key={i} >
                    <Post username={username} profilePicture={profilePicture} post={post} handleDelete={handleDelete} theme={theme} />
                    <div className="deleteButtonWrapper">
                        <button className={editMode ? "hide" : "unhide"} onClick={() => handleDelete(i)}>Delete</button>
                        <p>{post.isPrivate ? "Private" : "Public"}</p>
                    </div>
                </div>
            )
        })

    return (
        <section className="postWrapper">
            {theme === "light" ? <h2>Affirmations</h2> : <h2>Shadow Thoughts</h2>}
            <div className={!editMode ? "hide" : "unhide"} onClick={()=>setEditMode(!editMode)}>Delete Entries</div>
            <PostTextBox theme={theme} id={id} setPost={setPost} post={post} handleSubmit={handleSubmit} />
            <p>{message.length > 0 ? message : ""}</p>
            {mappedPost}
        </section>
    )
}

export default MainCard;