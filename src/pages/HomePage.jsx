import HomeLowermiddle from "../components/HomeLowermiddle";
import HomeNav from "../components/HomeNav";
import HomeUpperBody from "../components/HomeUpperBody";
import Homefooter from "../components/Homefooter";
import Homemiddle from "../components/Homemiddle";

function HomePage() {
    return (
        <div className="homepage">
            <HomeNav />
            <HomeUpperBody />
            <Homemiddle />
            <HomeLowermiddle />
            <Homefooter />
        </div>
      );
}

export default HomePage;