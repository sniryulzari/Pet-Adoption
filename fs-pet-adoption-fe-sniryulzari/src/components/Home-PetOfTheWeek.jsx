import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import petOfTheWeekFrame from "../Images/petOfTheWeekFrame.jpeg";

function PetOfTheWeek() {
  const [petOfTheWeek, setPetOfTheWeek] = useState({});
  const [isMousedOver, setMouseOver] = useState(false);

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  const getPetOfTheWeek = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8080/appOperations/weeklyPet`,
        {
          withCredentials: true,
        }
      );
      console.log("res.data:", res.data);
      setPetOfTheWeek(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPetOfTheWeek();
  }, []);

  return (
    <div className="home-pet-of-the-week-container">
      <span className="pet-of-the-week-heading-top">Meet Our</span>
      <h2 className="pet-of-the-week-heading-bottom">PET OF THE WEEK!</h2>
      <div className="pet-of-the-week-card">
        <div className="pet-of-the-week-card-left">
          <img src={petOfTheWeekFrame} />
          <img
            src={petOfTheWeek[0]?.imageUrl}
            alt="pet of the week"
            className="pet-of-the-week-image"
            style={{
              animationName: isMousedOver
                ? "pet-of-the-week-image-hover"
                : "pet-of-the-week-image-unhover",
            }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          />
        </div>
        <div className="pet-of-the-week-card-right">
          <span className="pet-name">{petOfTheWeek[0]?.name}</span>
          {/* <p className="pet-bio">{petOfTheWeek[0]?.bio}</p> */}
          <p className="pet-bio">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <button className="pet-of-the-week-button">
            Click To Adopte {petOfTheWeek[0]?.name}
          </button>
        </div>
      </div>
    </div>
  );
}

export default PetOfTheWeek;
