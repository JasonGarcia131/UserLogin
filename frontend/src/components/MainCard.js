import React, {useState } from "react";
import PostTextBox from "./PostTextBox";
import Post from "./Post";
import "../pages/profile.css"
import Paginate from "./Paginate";

function MainCard(props) {

    const [editMode, setEditMode] = useState(false);

    const { theme, user, posts, setPost, post, handleSubmit, message, page, getPosts } = props;

    const { id, username, profilePicture } = user;

    const handleDelete = (i) => {
        console.log("clicked delete")
        setEditMode(!editMode);
    }

    //////////Need to find to hide delete button
        console.log("posts", posts)
    const  mappedPost = posts?.map((post, i) => {
            return (
                <div key={i}>
                    <Post username={post.author.username} profilePicture={post.author.profilePicture} content={post.content} handleDelete={handleDelete} theme={post.theme} date={post.createdAt} />
                    <div className="deleteButtonWrapper">
                        <button onClick={() => handleDelete(i)} className={editMode ? "hide" : "unhide"}>Delete</button>
                        <p>{post.isPrivate ? "Private" : "Public"}</p>
                    </div>
                </div>
            )
        })

    return (
        <section className="postWrapper">
            {theme === "light" ? <h2>Affirmations</h2> : <h2>Shadow Thoughts</h2>}
            {/* <div className={!editMode ? "hide" : "unhide"} onClick={()=>setEditMode(!editMode)}>Delete Entries</div> */}
            <PostTextBox theme={theme} id={id} setPost={setPost} post={post} handleSubmit={handleSubmit} />
            <p>{message.length > 0 ? message : ""}</p>
            <Paginate page={page} getPosts={getPosts}/>
            {mappedPost}
        </section>
    )
}

export default MainCard;