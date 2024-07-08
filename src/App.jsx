import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
import BackToTop from "./components/common/BackToTop";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
