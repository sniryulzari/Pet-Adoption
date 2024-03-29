import React, { useState, useEffect, useContext } from "react";
import { UsersContext } from "../Context/Context-Users";
import SearchPetCard from "../components/Search-PetCard";
import axios from "axios";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function AdminUserPets() {
  const [userAdoptedPetInfo, setUserAdoptedPetInfo] = useState([]);
  const [userFosteredPetInfo, setUserFosteredPetInfo] = useState([]);

  const { userPets, getServerUrl } = useContext(UsersContext);
  const navigate = useNavigate();

  const adoptedPets = userPets.adoptPet;
  const fosteredPets = userPets.fosterPet;

  const getUserAdoptedPetsInfo = async () => {
    try {
      for (let key of adoptedPets) {
        const url = `${getServerUrl()}/pets/myAdoptedPets/${key}`;
        const res = await axios.get(url, {
          withCredentials: true,
        });
        if (res.data._id) {
          setUserAdoptedPetInfo((prev) => [...prev, res.data]);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUserAdoptedPetsInfo();
  }, []);

  const getUserFosteredPetsInfo = async () => {
    try {
      for (let key of fosteredPets) {
        const url = `${getServerUrl()}/pets/myFosteredPets/${key}`;
        const res = await axios.get(url, {
          withCredentials: true,
        });

        if (res.data._id) {
          setUserFosteredPetInfo((prev) => [...prev, res.data]);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUserFosteredPetsInfo();
  }, []);

  return (
    <div className="admin-user-pets-container">
      <h1 className="my-pets-header">
        Pets that {userPets.firstName} {userPets.lastName} owned
      </h1>
      <div>
        <Row xs={1} md={2} lg={3} xl={4} className="search-pet-results">
          {userAdoptedPetInfo.map((pet) => (
            <Col
              key={pet._id}
              onClick={() => navigate(`/petcard?petId=${pet._id}`)}
              className="search-pet-results-column"
            >
              <SearchPetCard {...pet} />
            </Col>
          ))}
          {userFosteredPetInfo.map((pet) => (
            <Col
              key={pet._id}
              onClick={() => navigate(`/petcard?petId=${pet._id}`)}
              className="search-pet-results-column"
            >
              <SearchPetCard {...pet} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default AdminUserPets;
