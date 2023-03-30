import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { UsersContext } from "../Context/Context-Users";

function PetCard() {
  const [pet, setPet] = useState();
  const { isLogin, getServerUrl } = useContext(UsersContext);
  const [savePet, setSavePet] = useState(false);
  const [adoptPet, setAdoptPet] = useState(false);
  const [fosterPet, setFosterPet] = useState(false);
  const [avialable, setAvialable] = useState(false);

  const getPetId = () => {
    const queryParams = new URLSearchParams(window.location.search);
    const id = queryParams.get("petId");
    return id;
  };

  const fetchPet = async (petId) => {
    const url = `${getServerUrl()}/pets/${petId}`;
    try {
      const res = await axios.get(url, {
        withCredentials: true,
      });
      setPet(res.data);

      setAvialable(false);
      if (res.data.adoptionStatus === "Available") {
        setAvialable(true);
      }

      console.log("avialable", avialable);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const id = getPetId();
    fetchPet(id);
  }, []);

  const getUserInfo = async () => {
    const url = `${getServerUrl()}/users/userInfo`;
    try {
      const petId = getPetId();
      const res = await axios.get(url, {
        withCredentials: true,
      });

      const savedPet = res.data.savedPet;
      const adoptPet = res.data.adoptPet;
      const fosterPet = res.data.fosterPet;

      setSavePet(false);
      for (let i = 0; i <= savedPet.length; i++) {
        if (savedPet[i] === petId) {
          setSavePet(true);
          return;
        }
      }

      setAdoptPet(false);
      for (let i = 0; i <= adoptPet.length; i++) {
        if (adoptPet[i] === petId) {
          setAdoptPet(true);
          return;
        }
      }

      setFosterPet(false);
      for (let i = 0; i <= fosterPet.length; i++) {
        if (fosterPet[i] === petId) {
          setFosterPet(true);
          return;
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUserInfo();
  });

  const handleSavePet = async () => {
    const petId = getPetId();
    const url = `${getServerUrl()}/users/${petId}`;
    try {
      const res = await axios.put(
        url,
        {},
        {
          withCredentials: true,
        }
      );
      if (res.data.ok) {
        setSavePet(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleUnSavedPet = async () => {
    try {
      const petId = getPetId();
      const url = `${getServerUrl()}/users/${petId}`;
      const res = await axios.delete(url, {
        withCredentials: true,
      });
      if (res.data.ok) {
        setSavePet(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleAdopt = async () => {
    try {
      const petId = getPetId();
      const url = `${getServerUrl()}/users/adopt/${petId}`;
      const res = await axios.put(
        url,
        {},
        {
          withCredentials: true,
        }
      );
      const userId = res.data;
      if (userId) {
        const url = `${getServerUrl()}/pets/adopt`;
        try {
          const res = await axios.put(
            url,
            { userId, petId },
            {
              withCredentials: true,
            }
          );
          setAdoptPet(true);
          setFosterPet(false);
        } catch (err) {
          console.log(err);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleFoster = async () => {
    try {
      const petId = getPetId();
      const url = `${getServerUrl()}/users/foster/${petId}`;
      const res = await axios.put(
        url,
        {},
        {
          withCredentials: true,
        }
      );
      const userId = res.data;
      if (userId) {
        const url = `${getServerUrl()}/pets/foster`;
        try {
          const res = await axios.put(
            url,
            { userId, petId },
            {
              withCredentials: true,
            }
          );
          setFosterPet(true);
          setAdoptPet(false);
        } catch (err) {
          console.log(err);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleReturn = async () => {
    try {
      const petId = getPetId();
      const url = `${getServerUrl()}/users/returnPet/${petId}`;
      const res = await axios.delete(url, {
        withCredentials: true,
      });
      const userId = res.data;
      if (userId) {
        const url = `${getServerUrl()}/pets/returnPet`;
        try {
          const res = await axios.put(
            url,
            { userId, petId },
            {
              withCredentials: true,
            }
          );
          if (res.data) {
            setFosterPet(false);
            setAdoptPet(false);
            setSavePet(false);
          }
        } catch (err) {
          console.log(err);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="pet-card-container">
      {pet ? (
        <div className="pet-card">
          <img
            src={pet.imageUrl}
            height="500em"
            width="500em"
            alt="Pet Image"
            className="pet-card-image"
          ></img>
          <div className="card-right">
            <div className="pet-card-info">
              <span className="pet-card-pet-name">{pet.name}</span>

              <p className="pet-info">
                This {pet.type} is of the breed {pet.breed}.
              </p>
              <p className="pet-info">
                {pet.name} is {pet.height} cm tall and weight {pet.weight} kg.
              </p>
              <p className="pet-info">color: {pet.color}</p>
              <p className="pet-info">Adoption Status: {pet.adoptionStatus}</p>
              <p className="pet-info">Hypoallergenic: {pet.hypoallergenic}</p>
              <p className="pet-info">
                Dietary Restrictions: {pet.dietaryRestrictions}
              </p>
              <p className="pet-info">Bio: {pet.bio}</p>
            </div>

            {isLogin && (avialable || adoptPet || fosterPet) ? (
              <div className="pet-card-button-container">
                {fosterPet ? (
                  <button className="pet-card-button" onClick={handleAdopt}>
                    Adopt
                  </button>
                ) : null}

                {adoptPet || fosterPet ? (
                  <button className="pet-card-button" onClick={handleReturn}>
                    Return Pet
                  </button>
                ) : (
                  <div>
                    <button className="pet-card-button" onClick={handleAdopt}>
                      Adopt
                    </button>
                    <button className="pet-card-button" onClick={handleFoster}>
                      Foster
                    </button>
                  </div>
                )}

                {savePet && !(adoptPet || fosterPet) ? (
                  <button
                    className="pet-card-button"
                    onClick={handleUnSavedPet}
                  >
                    Unsave Pet
                  </button>
                ) : null}

                {!savePet && !(adoptPet || fosterPet) ? (
                  <button className="pet-card-button" onClick={handleSavePet}>
                    Save Pet
                  </button>
                ) : null}
              </div>
            ) : null}
          </div>
        </div>
      ) : (
        ""
      )}
    </section>
  );
}

export default PetCard;
