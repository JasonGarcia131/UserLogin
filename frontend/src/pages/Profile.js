import Banner from "../components/Banner";
import UserCard from "../components/UserCard";
import MainCard from "../components/MainCard";
import { useState } from "react";
import { useEffect } from "react";
import useAuth from "../hooks/useAuth";

function Profile() {

    const [theme, setTheme] = useState("");
    const {auth} = useAuth();

    console.log("auth", auth)

    const user = auth;

    console.log("username", user);
    useEffect(() => {
        setTheme("light");
    }, [])

    console.log("Theme", theme);

    return (
        <div >
            <Banner theme={theme} setTheme={setTheme} />
            <UserCard theme={theme} user={user} />
            <MainCard theme={theme} user={user}/>
        </div>
    )

}

export default Profile;