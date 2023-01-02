import React from "react";
import PostTextBox from "../../../frontend/src/components/PostTextBox";
import Post from "../../../frontend/src/components/Post";
import "../pages/profile.css"

function MainCard (props) {

    const {theme} = props;

    return(
        <main className="postWrapper">
            {theme === "light" ? <h2>Affirmations</h2> : <h2>Shadow Thoughts</h2>}
            <PostTextBox/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </main>
    )
}

export default MainCard;