import { Link } from "react-router-dom";

const News = () => {

    return (
        <section className="sectionWrapper">
            <Link to="/">Home</Link>
            <br/>
            <h1>Upcoming Features: </h1>
            <br/>
            <ul>
                <li>
                    Search friends by horoscope sign.
                </li>
                <li>
                    Private Messaging.
                </li>
                <li>
                    Custom banner image for more personalized experience.
                </li>
            </ul>
        </section>
    )
}

export default News;