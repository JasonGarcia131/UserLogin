import Banner from "../components/Banner";
import UserCard from "../components/UserCard";
import MainCard from "../components/MainCard";
import { useState } from "react";
import { useEffect } from "react";
import useAuth from "../hooks/useAuth";
import { axiosPrivate } from "../api/axios";
import jwt_decode from "jwt-decode";

const LIMIT = 10;
function Profile() {

    //Authenticated User
    const { auth } = useAuth();

    //User info decoded from the access token
    const decode = auth.accessToken
        ? jwt_decode(auth.accessToken)
        : undefined

    const user = decode?.UserInfo;
    const id = user?.userId;
    const bannerImageLight = user?.bannerImageLight;
    const bannerImageShadow = user?.bannerImageShadow;




    const [theme, setTheme] = useState("light");
    const [paginatedPosts, setPaginatedPosts] = useState([]);

    // State variable for a single post
    const [post, setPost] = useState({
        id: id,
        postTheme: theme,
        content: "",
        isPrivate: false
    });

    //State variable for the pagination results
    const [page, setPage] = useState({
        next: {
            page: 0,
            limit: 0
        },
        previous: {
            page: 0,
            limit: 0
        },
    });

    //State variable for any error messages
    const [message, setMessage] = useState("");

    //Fetch posts on page load.
    useEffect(() => {

        getPosts(1);

    }, []);

    //Changes the theme of the page.
    const handleChangeTheme = (themeChosen) => {
        setPaginatedPosts([]);
        setTheme(themeChosen);
        setPost((prevData)=>({...prevData, postTheme: themeChosen}));
    }

    const getPosts = async (nextPage) => {
        const controller = new AbortController();
        try {

            const response = await axiosPrivate.get(`/posts/paginate/?id=${id}&page=${nextPage}&limit=${LIMIT}&theme=${theme}`, {
                signal: controller.signal
            });

            controller.abort();

            setPage({
                next: response?.data?.next,
                previous: response?.data?.previous,
                total: response?.data?.total
            });

            setPaginatedPosts([...paginatedPosts, response?.data?.results]);

        } catch (e) {

            console.log("error", e);
        }
    }


    const handleSubmit = async (e) => {

        e.preventDefault();

        if (post.content.length === 0) return setMessage("Oops... please try again.");

        if (post.length > 100) return setMessage("You've exceeded the number of words!");

        try {

            const response = await axiosPrivate.post(`/posts`, post);

            //Sets the most recent post on the page.
            setPaginatedPosts([...paginatedPosts, response.data]);
            setPage((prevData) => ({ ...prevData, total: page.total + 1 }));

            //Re-initialize state variables
            setPost({
                id: id,
                postTheme: theme,
                content: "",
                isPrivate: false
            })
            setMessage("Entry recored");

            window.location.reload();

        } catch (e) {
            console.log("error", e);
        }

    }

    return (
        <div className="profileWrapper">
            <Banner theme={theme} setTheme={setTheme} handleChangeTheme={handleChangeTheme} bannerImageLight={bannerImageLight} bannerImageShadow={bannerImageShadow} />
            <UserCard theme={theme} user={user} numberOfPosts={page.total} />
            <MainCard theme={theme} user={user} paginatedPosts={paginatedPosts.flat()} setPaginatedPosts={setPaginatedPosts} setPost={setPost} post={post} handleSubmit={handleSubmit} message={message} page={page} getPosts={getPosts} />
        </div>
    )

}

export default Profile;