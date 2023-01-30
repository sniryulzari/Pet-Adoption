import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import petOfTheWeekFrame from "../Images/petOfTheWeekFrame.jpeg";

function PetOfTheWeek() {
  const [petOfTheWeek, setPetOfTheWeek] = useState({});

  const getPetOfTheWeek = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8080/appOperations/weeklyPet`,
        {
          withCredentials: true,
        }
      );
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
          <img src={petOfTheWeekFrame} className="pet-of-the-week-frame" />
          <div className="pet-of-the-week-image-container">
            <img
              src={petOfTheWeek[0]?.imageUrl}
              alt="pet of the week"
              className="pet-of-the-week-image"
            />
          </div>
        </div>
        <div className="pet-of-the-week-card-right">
          <span className="pet-name">{petOfTheWeek[0]?.name}</span>
          {/* <p className="pet-bio">{petOfTheWeek[0]?.bio}</p> */}
          <p className="pet-bio">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
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
