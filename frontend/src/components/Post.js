function Post(props) {

    const {username, post, profilePicture, i, handleDelete, theme } = props;

    return (
        <article className={theme === "light" ? "lightPostCard" : "shadowPostCard"}>
            <div className="postUserInfoFlex">
                <div id="postProfilePicture" className="profilePictureWrapper">
                    <img className="profilePicture" src={profilePicture} alt="profile picture"/>
                </div>
                <h3 id="postUsername">{username}</h3>
                <p id="postDate">11/28/10</p>
            </div>
            <p>{post}</p>
            {/* <button onClick={()=>handleDelete(i)}>Delete</button> */}
        </article>
    )
}

export default Post;