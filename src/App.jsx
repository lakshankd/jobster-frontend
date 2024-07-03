import Banner from "./components/home/Banner";
import "./App.css";
import Category from "./components/home/Category";
import FeatureInfo from "./components/home/FeatureInfo";
import PlansAndPackages from "./components/home/PlansAndPackages";
import Sectors from "./components/home/Sectors";
import LatestBlogPosts from "./components/home/LatestBlogPosts";
import HelpSection from "./components/home/HelpSection";
import BrowseListing from "./components/home/BrowseListing";
import BrowseCenturiesOfJobs from "./components/home/BrowseCenturiesOfJobs";

function App() {
  return (
    <>
      <Banner />
      <Category />
      <FeatureInfo />
      <Sectors />
      <BrowseListing />
      <PlansAndPackages />
      <BrowseCenturiesOfJobs />
      <LatestBlogPosts />
      <HelpSection />
    </>
  );
}

export default App;
