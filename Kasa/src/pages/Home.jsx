import Banner from "../components/Banner/Banner";
import CardList from "../components/Cards/Cards";
import ImageHome from "../images/image-banner-paysage.png";

function Home() {
  return (
    <div className="Home">
      <Banner className="bannerHome"
      title="Chez vous, partout et ailleurs"
      image={ImageHome}
        />
        <CardList />
    </div>
  );
}

export default Home;
