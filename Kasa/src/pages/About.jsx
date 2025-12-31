import ImageAbout from "../images/image-banner-about.png";
import Banner from "../components/Banner/Banner";
import Accordion from "../components/Accordion/Accordion";
import aboutData from "../data/about.json";

function About() {
    return (
        <div className="about">
            <Banner className="bannerHome"
                image={ImageAbout}
            />
            <section className="about__accordions">
                {aboutData.map(item => (
                    <Accordion
                        key={item.id}
                        title={item.title}
                        content={item.content}
                    />
                ))}
            </section>
        </div>
    );
}

export default About;