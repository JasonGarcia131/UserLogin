function Post(props) {

    const { username, post, profilePicture, i, handleDelete, theme } = props;

    const date = new Date(post.createdAt);

    const month = date.getMonth() + 1;
    const day = date.getDate() + 1;
    const year = date.getFullYear();
    const dateOfPost = `${month}/${day}/${year}`


  


    return (
        <article className={theme === "light" ? "lightPostCard" : "shadowPostCard"}>
            <div className="postUserInfoFlex">
                <div id="postProfilePicture" className="profilePictureWrapper">
                    <img className="profilePicture" src={profilePicture} alt="profile picture" />
                </div>
                <h3 id="postUsername">{username}</h3>
                <p id="postDate">{dateOfPost}</p>
            </div>
            <p>{post?.content}</p>
        </article>
    )
}

export default Post;