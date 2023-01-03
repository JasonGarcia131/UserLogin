function Post(props) {

    const {username, post, profilePicture } = props;

    return (
        <article>
            <div className="postUserInfoFlex">
                <div id="postProfilePicture" className="profilePictureWrapper">
                    <img className="profilePicture" src={profilePicture} alt="profile picture"/>
                </div>
                <h3>{username}</h3>
            </div>
            <p>{post}</p>
        </article>
    )
}

export default Post;