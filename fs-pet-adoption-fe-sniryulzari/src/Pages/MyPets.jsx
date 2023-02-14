import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import SearchPetCard from "../components/Search-PetCard";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const MyPets = () => {
  const [mySavedPetId, setmySavedPetId] = useState([]);
  const [mySavedPetInfo, setmySavedPetInfo] = useState([]);

  const [myAdoptedPetId, setmyAdoptedPetId] = useState([]);
  const [myAdoptedPetInfo, setMyAdoptedPetInfo] = useState([]);

  const [myFosteredPetId, setmyFosteredPetId] = useState([]);
  const [myFosteredPetInfo, setMyFosteredPetInfo] = useState([]);

  const [togglePets, setTogglePets] = useState(true);

  const navigate = useNavigate();

  const getMyPetsId = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/users/mypets`, {
        withCredentials: true,
      });

      setmySavedPetId(res.data[0].savedPet);
      setmyAdoptedPetId(res.data[0].adoptPet);
      setmyFosteredPetId(res.data[0].fosterPet);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMyPetsId();
  }, []);

  const getMySavedPetsInfo = async () => {
    try {
      for (let key of mySavedPetId) {
        const res = await axios.get(
          `http://localhost:8080/pets/mySavedPets/${key}`,
          {
            withCredentials: true,
          }
        );

        if (res.data._id) {
          setmySavedPetInfo((prev) => [...prev, res.data]);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMySavedPetsInfo();
  }, [mySavedPetId]);

  const getMyAdoptedPetsInfo = async () => {
    try {
      for (let key of myAdoptedPetId) {
        const res = await axios.get(
          `http://localhost:8080/pets/myAdoptedPets/${key}`,
          {
            withCredentials: true,
          }
        );

        if (res.data._id) {
          setMyAdoptedPetInfo((prev) => [...prev, res.data]);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMyAdoptedPetsInfo();
  }, [myAdoptedPetId]);

  const getMyFosteredPetsInfo = async () => {
    try {
      for (let key of myFosteredPetId) {
        const res = await axios.get(
          `http://localhost:8080/pets/myFosteredPets/${key}`,
          {
            withCredentials: true,
          }
        );

        if (res.data._id) {
          setMyFosteredPetInfo((prev) => [...prev, res.data]);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMyFosteredPetsInfo();
  }, [myFosteredPetId]);

  return (
    <div>
      <div className="my-pets-container">
        <div className="my-pets-header-container">
          <h1 className="my-pets-header">My Pets Page</h1>
          {togglePets ? (
            <button
              className="pet-card-button my-pets-button"
              onClick={(e) => {
                setTogglePets(false);
              }}
            >
              My Saved Pets
            </button>
          ) : (
            <button
              className="pet-card-button my-pets-button"
              onClick={(e) => {
                setTogglePets(true);
              }}
            >
              My Owen Pets
            </button>
          )}
        </div>

        {!togglePets && (
          <div>
            <h2 className="my-pets-sub-header">My Saved Pets</h2>
            <Row xs={1} md={2} lg={3} xl={4} className="search-pet-results">
              {mySavedPetInfo.map((pet) => (
                <Col
                  key={pet._id}
                  onClick={() => navigate(`/petcard?petId=${pet._id}`)}
                  className="my-pets"
                >
                  <SearchPetCard {...pet} />
                </Col>
              ))}
            </Row>
          </div>
        )}

        {togglePets && (myAdoptedPetInfo.length || myFosteredPetInfo.length) ? (
          <div>
            <h2 className="my-pets-sub-header">My Owen Pets</h2>
            <Row xs={1} md={2} lg={3} xl={4} className="search-pet-results">
              {myAdoptedPetInfo.map((pet) => (
                <Col
                  key={pet._id}
                  onClick={() => navigate(`/petcard?petId=${pet._id}`)}
                  className="my-pets"
                >
                  <SearchPetCard {...pet} />
                </Col>
              ))}
              {myFosteredPetInfo.map((pet) => (
                <Col
                  key={pet._id}
                  onClick={() => navigate(`/petcard?petId=${pet._id}`)}
                  className="my-pets"
                >
                  <SearchPetCard {...pet} />
                </Col>
              ))}
            </Row>
          </div>
        ) : togglePets &&
          !(myAdoptedPetInfo.length || myFosteredPetInfo.length) ? (
          <h3 className="my-pets-header">
            You currently do not own or foster any pets.
          </h3>
        ) : null}
      </div>
      <Footer />
    </div>
  );
};

export default MyPets;
