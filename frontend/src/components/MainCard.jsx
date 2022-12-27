import React from "react";
import PostTextBox from "./PostTextBox";
import Post from "./Post";

function MainCard (props) {

    const {theme} = props;

    return(
        <main>
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