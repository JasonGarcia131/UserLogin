import Banner from "../components/Banner";
import UserCard from "../components/UserCard";
import MainCard from "../components/MainCard";
import { useState } from "react";
import { useEffect } from "react";
import useAuth from "../hooks/useAuth";
import { axiosPrivate } from "../api/axios";
import jwt_decode from "jwt-decode";

function Profile() {

    const [theme, setTheme] = useState("light");
    const [posts, setPosts] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    const { auth } = useAuth();

    const decode = auth.accessToken
        ? jwt_decode(auth.accessToken)
        : undefined

    const user = decode?.UserInfo;
    const id = user?.userId;

    const [post, setPost] = useState({
        id: id,
        postTheme: theme,
        content: ""
    });

    useEffect(() => {

        getPosts();

        setPost((prevData) => ({ ...prevData, postTheme: theme }));

        return () => setPosts([]);

    }, [theme]);

    console.log("posts", posts)

    const getPosts = async () => {
        try {

            const response = await axiosPrivate.get(`/posts/${id}`);
            setPosts(response.data);

        } catch (e) {

            console.log(e);

        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!post) return setErrorMessage("Oops... please try again.");

        if (post.length > 100) return setErrorMessage("You've exceeded the number of words!");

        try {

            const response = await axiosPrivate.post(`/posts`, post);
            console.log(response)

        } catch (e) {

            console.log(e)

        }

    }

    return (
        <div>
            <Banner theme={theme} setTheme={setTheme} />
            <UserCard theme={theme} user={user} numberOfPosts={posts?.length} />
            <MainCard theme={theme} user={user} posts={posts} setPost={setPost} post={post} handleSubmit={handleSubmit} errorMessage={errorMessage} />
        </div>
    )

}

export default Profile;