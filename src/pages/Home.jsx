import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import CountriesSection from "../components/CountriesSection";
import Faq from "../components/Faq";
import Pricing from "../components/Pricing";
import TouristsSpots from "../components/TouristsSpots";

const Home = () => {
  const spots = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <TouristsSpots spots={spots}></TouristsSpots>
      <CountriesSection></CountriesSection>
      <Pricing></Pricing>
      <Faq></Faq>
    </div>
  );
};

export default Home;
