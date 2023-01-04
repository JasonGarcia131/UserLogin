import { useEffect, useState } from "react";
import axios from "../api/axios";
import useAuth from "../hooks/useAuth";
import { axiosPrivate } from "../api/axios";

function PostTextBox(props) {

    const { setPost, handleSubmit, post} = props;

    return (
        <div className="textBoxContainer">
            <input 
                type="textbox"
                 className="postTextBoxWrapper" 
                 placeholder="What's on your mind?" 
                 maxLength={100}
                 name='content'
                 value={post.content}
                 onChange={(e)=>setPost((prevData)=>({...prevData, content: e.target.value}))}
                />
            <button onClick={handleSubmit}>Post</button>
        </div>
    )
}

export default PostTextBox;