import { useEffect, useState } from "react";
import axios from "../api/axios";
import useAuth from "../hooks/useAuth";
import { axiosPrivate } from "../api/axios";

const USERS_POST = '/users'
function PostTextBox(props) {

    const [post, setPost] = useState({
        postTheme: "",
        post: ""
    });
    const [errorMessage, setErrorMessage] = useState("");

    const {theme, id} = props;

    useEffect(()=>{
        setPost((prevData)=>({...prevData, postTheme: theme }))
    },[theme])

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!post) return setErrorMessage("Oops... please try again.");

        if(post.length > 3) return setErrorMessage("You've exceeded the number of words!");

        // try{
            console.log("id----------------------", id)
            console.log("post", theme)

            const response = await axiosPrivate.put(`/users/${id}`,post);
        //     console.log(response)
        // }catch(e){
        //     console.log(e)
        // }

    }

    return (
        <div className="textBoxContainer">
            <input 
                type="textbox"
                 className="postTextBoxWrapper" 
                 placeholder="What's on your mind?" 
                 maxLength={100}
                 name='post'
                 value={post.post}
                 onChange={(e)=>setPost((prevData)=>({...prevData, post: e.target.value}))}
                />
            <button onClick={handleSubmit}>Post</button>
        </div>
    )
}

export default PostTextBox;