import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import petOfTheWeek from "../Images/cat-1.webp";

function PetOfTheWeek() {
    const [petOfTheWeek, setPetOfTheWeek] = useState({});

    const getPetOfTheWeek = async () => {
        try {
          const res = await axios.get(`http://localhost:8080/pets/weeklyPet`, {
            withCredentials: true,
          });
          setPetOfTheWeek(res.data);
        } catch (err) {
            console.log(err);
        }
    };
    
    
    useEffect(() => {
        getPetOfTheWeek();
        console.log("petOfTheWeek:", petOfTheWeek);
  }, []);
  

  return (
    <div className="home-pet-of-the-week-container">
      <span className="pet-of-the-week-heading-top">Meet Our</span>
      <h2 className="pet-of-the-week-heading-bottom">PET OF THE WEEK!</h2>
      <div className="pet-of-the-week-card">
        <div className="pet-of-the-week-card-left">
          <img
            src={petOfTheWeek.imageUrl}
            alt="pet of the week"
            className="pet-of-the-week-image"
          />
        </div>
        <div className="pet-of-the-week-card-right">
          <span>{petOfTheWeek.name}</span>
          <p>pet info</p>
          <button>Adopte {"name of pet"}</button>
        </div>
      </div>
    </div>
  );
}

export default PetOfTheWeek;
