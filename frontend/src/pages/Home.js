import { useNavigate, Link } from "react-router-dom";
import useLogout from "../hooks/useLogout";
import useAuth from "../hooks/useAuth";
import jwt_decode from "jwt-decode";

const Home = () => {
    const navigate = useNavigate();
    const logout = useLogout();

    const signOut = async () => {
        await logout();
        navigate('/linkpage');
    }

      //Authenticated User
      const { auth } = useAuth();

      //User info decoded from the access token
      const decode = auth.accessToken
          ? jwt_decode(auth.accessToken)
          : undefined
  
      const user = decode?.UserInfo;
  
      console.log("user", user)
      const id = user?.userId;

    return (
        <section>
            <h1>Home</h1>
            <br />
            <Link to='/profile'>Profile</Link>
            <br />
            <Link to="/news">New upcoming features</Link>
            <br />
            <Link to='/feedback'>Give feedback ?</Link>
            <br />
            <p>Copy profile link: https://JasonGarcia131.github.io/users/{id}</p>
            <div className="flexGrow">
                <button onClick={signOut}>Sign Out</button>
            </div>
        </section>
    )
}

export default Home
