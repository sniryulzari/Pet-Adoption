import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SignupModal from "../components/SignupModal";
import LoginModal from "../components/LoginModal";
import { UsersContext } from "../Context/Context-Users";
import HomeWelcome from "../components/Home-Welcome";
import HomePhotoGallery from "../components/Home-Photo-Gallery";
import PetOfTheWeek from "../components/Home-PetOfTheWeek";
import HomeClientsTestimonials from "../components/Home-Clients-Testimonials";
import Footer from "../components/Footer";
import desktopImage from '../Images/dog-4310597_1280.jpg';
import mobileImage from "../Images/alvan-nee-ZCHj_2lJP00-unsplash.jpg";
import hillsSvg from "../Images/hills.svg";

const Home = () => {
  const [show, setShow] = useState(false);
  const [loginShow, setLoginShow] = useState(false);
  const { isLogin, setfirstName, setlastName } = useContext(UsersContext);

  const navigate = useNavigate();

  useEffect(() => {
    const userFirstName = JSON.parse(localStorage.getItem("userFirstName"));
    const userLastName = JSON.parse(localStorage.getItem("userLastName"));
    setfirstName(userFirstName);
    setlastName(userLastName);
  }, []);

  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };

  const handleLoginShow = () => {
    setLoginShow(true);
  };

  const handleLoginClose = () => {
    setLoginShow(false);
  };

  return (
    <div className="home-container">
      <div className="home-top-container">
        <picture>
          <source media="(max-width: 699px)" srcSet={mobileImage} className="mobile-image"/>
          <source media="(min-width: 700px)" srcSet={desktopImage} className="desktop-image"/>
          <img src={desktopImage} alt="pet"/>
        </picture>
        <img src={hillsSvg} alt="hills" className="hills" />

        <img
          className="dog-bone-img"
          alt="dog bone img"
          src={
            "http://demo2.themelexus.com/petzen/wp-content/uploads/2020/05/revolution-icon-6.svg"
          }
        />
        <img
          className="arrow-img"
          alt="arrow img"
          src={
            "http://demo2.themelexus.com/petzen/wp-content/uploads/2020/05/revolution-icon-5.svg"
          }
        />
        <img
          className="star-img"
          alt="star img"
          src={
            "http://demo2.themelexus.com/petzen/wp-content/uploads/2020/05/revolution-icon-4.svg"
          }
        />
        <img
          className="dog-footprints-img"
          alt="dog footprints img"
          src={
            "http://demo2.themelexus.com/petzen/wp-content/uploads/2020/05/revolution-icon-1.svg"
          }
        />

        {isLogin ? (
          <div className="welcome-container">
            <span className="welcome-title-top">
              Two Is always Better Than One
            </span>
            <span className="welcome-title-bottom-start">AdoPet Your</span>
            <span className="welcome-title-bottom-end">New Best Friend</span>
            <button
              className="welcome-login-search-Button"
              onClick={() => navigate("/search")}
            >
              Search
            </button>
          </div>
        ) : (
          <div className="welcome-container">
            <span className="welcome-title-top">
              Two Is always Better Than One
            </span>
            <span className="welcome-title-bottom-start">AdoPet Your</span>
            <span className="welcome-title-bottom-end">New Best Friend</span>
            <button
              className="welcome-login-search-Button"
              onClick={handleLoginShow}
            >
              LOGIN
            </button>
          </div>
        )}

        <SignupModal
          show={show}
          handleClose={handleClose}
          handleLoginShow={handleLoginShow}
        />
        <LoginModal
          loginShow={loginShow}
          handleLoginClose={handleLoginClose}
          handleShow={handleShow}
        />
      </div>
      <HomeWelcome />
      <HomePhotoGallery />
      <PetOfTheWeek />
      <HomeClientsTestimonials />
      <Footer />
    </div>
  );
};

export default Home;
