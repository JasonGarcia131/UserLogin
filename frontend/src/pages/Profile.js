import Banner from "../components/Banner";
import UserCard from "../components/UserCard";
import MainCard from "../components/MainCard";
import { useState } from "react";
import { useEffect } from "react";
import useAuth from "../hooks/useAuth";
import axios from "../api/axios";

function Profile() {

    const [theme, setTheme] = useState("");
    const [posts, setPosts] = useState([]);
    const {auth} = useAuth();

    console.log("auth", auth)

    const user = auth;

    const {id} = user

    console.log("user", user);

    useEffect(() => {
        setTheme("light");

        getPosts();

    }, []);

    const getPosts = async () => {
        try{
            const response = await axios.get(`/posts/${id}`);
            setPosts(response.data);
        }catch(e){
            console.log(e);
        }
    }

    console.log("Theme", theme);

    return (
        <main >
            <Banner theme={theme} setTheme={setTheme} />
            <UserCard theme={theme} user={user} />
            <MainCard theme={theme} user={user} posts={posts}/>
        </main>
    )

}

export default Profile;