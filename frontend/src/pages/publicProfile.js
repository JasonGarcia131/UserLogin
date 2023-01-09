import Banner from "../components/Banner";
import UserCard from "../components/UserCard";
import MainCard from "../components/MainCard";
import { useState } from "react";
import { useEffect } from "react";
import useAuth from "../hooks/useAuth";
import { axiosPrivate } from "../api/axios";
import jwt_decode from "jwt-decode";

const LIMIT = 10;
function publicProfile(props) {

    const user = props.UserInfo;

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

        getPosts(1);

    }, [theme]);

    const handleChangeTheme = (themeChosen) => {
        setPaginatedPosts([]);
        setTheme(themeChosen);
        setPost((prevData)=>({...prevData, postTheme: themeChosen}))
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
            })

            setPaginatedPosts([...paginatedPosts, response?.data?.results]);

        } catch (e) {

            console.log("error", e);
        }
    }

    return (
        <div>
            <Banner theme={theme} setTheme={setTheme} handleChangeTheme={handleChangeTheme} />
            <UserCard theme={theme} user={user} numberOfPosts={page.total} />
            <MainCard theme={theme} user={user} paginatedPosts={paginatedPosts.flat()} setPaginatedPosts={setPaginatedPosts} setPost={setPost} post={post} page={page} getPosts={getPosts} />
        </div>
    )

}

export default publicProfile;