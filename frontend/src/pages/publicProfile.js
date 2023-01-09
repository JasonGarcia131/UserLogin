import Banner from "../components/Banner";
import UserCard from "../components/UserCard";
import { useState } from "react";
import { useEffect } from "react";
import useAuth from "../hooks/useAuth";
import axios, { axiosPrivate } from "../api/axios";
import jwt_decode from "jwt-decode";
import PublicMainCard from "../components/PublicMainCard";

const LIMIT = 10;
function PublicProfile(props) {

    const [userId, setUserId] = useState(window.location.pathname.split("/")[2]);
    const [userInfo, setUserInfo] = useState({
        username: "",
        bio: "",
        profilePicture: ""

    });
    const [theme, setTheme] = useState("light");
    const [paginatedPosts, setPaginatedPosts] = useState([]);

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

    useEffect(() => {
        // const url = window.location.pathname
        // const urlSplit = url.split("/");
        // setUserId(urlSplit[2])
        getUser();
        getPosts(1);
        console.log("user", userInfo)

    }, [theme]);

    const handleChangeTheme = (themeChosen) => {
        setPaginatedPosts([]);
        setTheme(themeChosen);
        // setPost((prevData)=>({...prevData, postTheme: themeChosen}))
    }

    const getUser = async () => {

        try {
            const response = await axios.get(`/users/${userId}`);
            console.log('response', response)

            setUserInfo({
                id: response.data[0].author._id,
                username: response.data[0].author.username,
                bio: response.data[0].author.bio,
                profilePicture: response.data[0].author.profilePicture
            })

            setPaginatedPosts([...paginatedPosts, response.data])
            // await getPosts(1);



        } catch (e) {
            console.log(e)
        }
    }

    console.log("user info", userInfo)

    const getPosts = async (nextPage) => {
        // const controller = new AbortController();

        // try {

        //     const response = await axios.get(`/posts/paginate/?id=${userInfo.id}&page=${nextPage}&limit=${LIMIT}&theme=${theme}`, {
        //         signal: controller.signal
        //     });
        //     controller.abort();

        //     console.log("response posts", response)
        //     setPage({
        //         next: response?.data?.next,
        //         previous: response?.data?.previous,
        //         total: response?.data?.total
        //     })

        //     setPaginatedPosts([...paginatedPosts, response?.data?.results]);

        // } catch (e) {

        //     console.log("error", e);
        // }
    }

    return (
        <div>
            <Banner theme={theme} setTheme={setTheme} handleChangeTheme={handleChangeTheme} />
            <UserCard theme={theme} user={userInfo} numberOfPosts={page.total} />
            <PublicMainCard theme={theme} user={userInfo} paginatedPosts={paginatedPosts.flat()} setPaginatedPosts={setPaginatedPosts} page={page} getPosts={getPosts} />
        </div>
    )

}

export default PublicProfile;