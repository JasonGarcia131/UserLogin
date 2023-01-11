import { Link } from "react-router-dom";

const About = () => {
    return(
        <section  className="sectionWrapper">
            <Link to="/">back</Link>
            <h1>About Stars</h1>
            <br/>
            <p>Stars is a digital journal that gives you the space to journal your greatest achievements or express your vulnerable emotions.</p>
            <p>Users can select whether each entry is public to share with everyone, or private for more personal entries.</p>
        </section>
    )
}

export default About;