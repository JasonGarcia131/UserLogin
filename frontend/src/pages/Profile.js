import Banner from "../components/Banner";
import UserCard from "../components/UserCard";
import MainCard from "../components/MainCard";
import { useState } from "react";
import { useEffect } from "react";
import useAuth from "../hooks/useAuth";
import { axiosPrivate } from "../api/axios";
import jwt_decode from "jwt-decode";
import Paginate from "../components/Paginate";

const LIMIT = 0;
function Profile() {

    const [theme, setTheme] = useState("light");
    const [paginatedPosts, setPaginatedPosts] = useState([]);
    const [page, setPage] = useState({
        next: {
            page: 0,
            limit: 0
        },
        previous: {
            page: 0,
            limit: 0
        },
        current: 0
    });
    const [message, setMessage] = useState("");


    const { auth } = useAuth();

    const decode = auth.accessToken
        ? jwt_decode(auth.accessToken)
        : undefined

    const user = decode?.UserInfo;
    const id = user?.userId;

    const [post, setPost] = useState({
        id: id,
        postTheme: theme,
        content: "",
        isPrivate: false
    });

    useEffect(() => {

        // setPaginatedPosts([]);
        getPosts(1);
        
    }, [theme]);

    console.log("posts", paginatedPosts)

    const getPosts = async (nextPage) => {
        try {

            const response = await axiosPrivate.get(`/posts/paginate/?id=${id}&page=${nextPage}&limit=${LIMIT}&theme=${theme}`);

            setPage({
                next: response?.data?.next,
                previous: response?.data?.previous,
                current: response?.data?.previous?.page + 1,
                total: Math.ceil((response?.data?.total)/LIMIT)

            })
            
            setPaginatedPosts(response?.data?.results);
            // setPaginatedPosts([...paginatedPosts, response.data.results])

        } catch (e) {

            console.log(e);

        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (post.content.length === 0) return setMessage("Oops... please try again.");

        if (post.length > 100) return setMessage("You've exceeded the number of words!");

        try {

            const response = await axiosPrivate.post(`/posts`, post);
            window.location.reload();
            // const newPost = response?.data;
            // setPosts((prevData)=>[...prevData, newPost]);

            setMessage("Entry recored");

        } catch (e) {

            setMessage(e);

        }

    }

    return (
        <div>
            <Banner theme={theme} setTheme={setTheme} />
            <UserCard theme={theme} user={user} numberOfPosts={paginatedPosts?.length} />
            <MainCard theme={theme} user={user} paginatedPosts={paginatedPosts} setPaginatedPosts={setPaginatedPosts} setPost={setPost} post={post} handleSubmit={handleSubmit} message={message} page={page} getPosts={getPosts} />
        </div>
    )

}

export default Profile;