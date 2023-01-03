import React from "react";
import PostTextBox from "./PostTextBox";
import Post from "./Post";
import "../pages/profile.css"

function MainCard (props) {

    const {theme, user} = props;

    const posts = user?.posts;

    const username = user.user;

    const profilePicture = user.profilePicture;

    const mappedPost = posts?.map((post, i) => {
        return(
            <Post key={i} username={username} profilePicture={profilePicture} post={post.post}/>
        )
    })

    return(
        <main className="postWrapper">
            {theme === "light" ? <h2>Affirmations</h2> : <h2>Shadow Thoughts</h2>}
            <PostTextBox/>
            {mappedPost}
        </main>
    )
}

export default MainCard;