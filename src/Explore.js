import ExploreHeroSection from "./components/ExploreHeroSection";
import { useProductContext } from "./context/productcontex";

const Explore = () => {
  const { myName } = useProductContext();

  const data = {
    name: "BookMania",
  };

  return (
    <>
      {myName}
      <ExploreHeroSection myData={data} />
    </>
  );
};

export default Explore;


