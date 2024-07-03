import React from "react";
import Navbar from "../components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import BackToTop from "../components/common/BackToTop";

const Root = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <BackToTop />
    </>
  );
};

export default Root;
