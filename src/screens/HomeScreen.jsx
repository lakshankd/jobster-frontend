import React from "react";
import Banner from "../components/home/Banner";
import Category from "../components/home/Category";
import FeatureInfo from "../components/home/FeatureInfo";
import Sectors from "../components/home/Sectors";
import BrowseListing from "../components/home/BrowseListing";
import PlansAndPackages from "../components/home/PlansAndPackages";
import BrowseCenturiesOfJobs from "../components/home/BrowseCenturiesOfJobs";
import LatestBlogPosts from "../components/home/LatestBlogPosts";
import HelpSection from "../components/home/HelpSection";

const HomeScreen = () => {
  return (
    <>
      <Banner />
      <Category />
      <FeatureInfo />
      <Sectors />
      <BrowseListing />
      <PlansAndPackages />
      <LatestBlogPosts />
      <BrowseCenturiesOfJobs />
      <HelpSection />
    </>
  );
};

export default HomeScreen;
