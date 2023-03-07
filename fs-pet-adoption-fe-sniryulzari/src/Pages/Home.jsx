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
import mainImage from "../Images/1.jpg";
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
        <img className="main-image" alt="main image" src={mainImage} />
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
              Search Your New Pet
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

        <div className="home-bottom-page-container">
          {/* <label>what are we doing?</label>
        <p>
        For almost two decades, Ado-Pet has helped in creating true social
        change by bringing pet adoption into the mainstream. Our work has
        helped make a difference to the Israel rescue community and thousands
        of pets in need of rescue and rehabilitation. But, until every pet is
        safe, respected, and loved, we all still have big, hairy work to do.
        Find out more about our mission to help save 10,000 healthy and
        rehomable pets each year.
      </p> */}
        </div>
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
      {/* <HomePhotoGallery /> */}
      {/* <PetOfTheWeek /> */}
      {/* <HomeClientsTestimonials /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
