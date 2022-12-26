import React from "react";
import PostTextBox from "./PostTextBox";

function MainCard (props) {

    const {theme} = props;

    return(
        <main>
            {theme === "light" ? <h2>Affirmations</h2> : <h2>Shadow Thoughts</h2>}
            <PostTextBox/>
        </main>
    )
}

export default MainCard;