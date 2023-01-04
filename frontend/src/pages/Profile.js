import Banner from "../components/Banner";
import UserCard from "../components/UserCard";
import MainCard from "../components/MainCard";
import { useState } from "react";
import { useEffect } from "react";
import useAuth from "../hooks/useAuth";
import axios, { axiosPrivate } from "../api/axios";
import jwt_decode from "jwt-decode";

function Profile() {

    const [theme, setTheme] = useState("");
    const [posts, setPosts] = useState([]);
    const { auth } = useAuth();

    console.log("auth in profile", auth);

    const decode = auth.accessToken
        ? jwt_decode(auth.accessToken)
        : undefined

    const user = decode?.UserInfo;
    const id = user?.userId;

    console.log("id in profile", id);
    console.log("username in profile", user?.username);
    console.log("bio in profile", user?.bio);



    useEffect(() => {
        setTheme("light");

        getPosts();

    }, []);

    const getPosts = async () => {
        try {
            const response = await axiosPrivate.get(`/posts/${id}`);
            console.log("response in profile", response);
            setPosts(response.data);
        } catch (e) {
            console.log(e);
        }
    }

    console.log("Theme", theme);

    return (
        <main >
            <Banner theme={theme} setTheme={setTheme} />
            <UserCard theme={theme} user={user} />
            <MainCard theme={theme} user={user} posts={posts?.posts} />
        </main>
    )

}

export default Profile;