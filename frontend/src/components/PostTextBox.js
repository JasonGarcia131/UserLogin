import { useEffect, useState } from "react";
import axios from "../api/axios";
import useAuth from "../hooks/useAuth";
import { axiosPrivate } from "../api/axios";

function PostTextBox(props) {

    const { setPost, handleSubmit, post } = props;

    console.log("post", post)

    useEffect(() => { }, [post])

    return (
        <div className="textBoxContainer">
            <input
                type="textbox"
                className="postTextBoxWrapper"
                placeholder="What's on your mind?"
                maxLength={100}
                name='content'
                value={post.content}
                onChange={(e) => setPost((prevData) => ({ ...prevData, content: e.target.value }))}
            />
            <div className="textBoxControls">
                <button onClick={handleSubmit}>Post</button>
                <label htmlFor="isPrivate">Private</label>
                <input
                    type="radio"
                    name="isPrivate"
                    value={post.isPrivate}
                    onChange={(e) => setPost((prevData) => ({ ...prevData, isPrivate: true }))}
                />
                <label htmlFor="isPrivate">Public</label>
                <input
                    type="radio"
                    name="isPrivate"
                    value={post.isPrivate}
                    onChange={(e) => setPost((prevData) => ({ ...prevData, isPrivate: false }))}
                />
            </div>

        </div>
    )
}

export default PostTextBox;