import AboutHeroSection from "./components/AboutHeroSection";
import { useProductContext } from "./context/productcontex";

const About = () => {
  const { myName } = useProductContext();

  const data = {
    name: "from BookMania",
  };

  return (
    <>
      {myName}
      <AboutHeroSection myData={data} />
    </>
  );
};

export default About;
