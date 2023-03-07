import React from "react";
import { useState, useContext } from "react";
import axios from "axios";
import { Form, Col, Row } from "react-bootstrap";
import { FaDog } from "react-icons/fa";
import { FaCat } from "react-icons/fa";
import { FaHorse } from "react-icons/fa";
import { GiDolphin } from "react-icons/gi";
import { GiTigerHead } from "react-icons/gi";
import RangeSlider from "react-bootstrap-range-slider";
import { PetContext } from "../Context/Context-Pets";
import SearchPetsCardList from "../components/Search-PetsCardList";
import Footer from "../components/Footer";

const SearchPets = () => {
  const [petInfo, setPetInfo] = useState({
    type: "",
    name: "",
    adoptionStatus: "",
    minHeight: 0,
    maxHeight: 300,
    minWeight: 0,
    maxWeight: 500,
  });
  const [isChecked, setIsChecked] = useState(false);
  const [isDogPress, setIsDogPress] = useState(false);
  const [isCatPress, setIsCatPress] = useState(false);
  const [isHorsePress, setIsHorsePress] = useState(false);
  const [isDolphinPress, setIsDolphinPress] = useState(false);
  const [isTigerPress, setIsTigerPress] = useState(false);

  const { setPetSearchRes, noSearchRes, setNoSearchRes, getServerUrl } =
    useContext(PetContext);

  function handlePetInfo(e) {
    setPetInfo({ ...petInfo, [e.target.name]: e.target.value });
  }

  const handleSearch = async (e) => {
    e.preventDefault();
    setNoSearchRes(false);
    const url = `${getServerUrl()}/pets/search`;
    const res = await axios.get(url, {
      params: { ...petInfo },
    });
    if (res.data.length === 0) {
      setNoSearchRes(true);
    } else {
      setPetSearchRes(res.data);
    }
  };

  const handleClearSearch = (e) => {
    setPetInfo({
      type: "",
      name: "",
      adoptionStatus: "",
      minHeight: 0,
      maxHeight: 300,
      minWeight: 0,
      maxWeight: 500,
    });
    setIsDogPress(false);
    setIsCatPress(false);
    setIsHorsePress(false);
    setIsDolphinPress(false);
    setIsTigerPress(false);

    setNoSearchRes(false);
  };

  const selectStyle = {
    border: "1px solid blue",
    borderRadius: "20px",
  };

  const unselectStyle = {
    border: "none",
  };

  return (
    <div className="search-page-container">
      <div className="search-container">
        <div className="search-header">
          <h1 className="search-header-text">Search for Pet</h1>
        </div>
        <div className="pets-icons">
          <FaDog
            className="pet-icon dog-icon"
            size="5em"
            name="type"
            style={isDogPress ? selectStyle : unselectStyle}
            onClick={() => {
              setPetInfo({ ...petInfo, type: "Dog" });
              setIsDogPress(!isDogPress);
              setIsCatPress(false);
              setIsHorsePress(false);
              setIsDolphinPress(false);
              setIsTigerPress(false);
            }}
          />
          <FaCat
            className="pet-icon cat-icon"
            size="5em"
            name="type"
            style={isCatPress ? selectStyle : unselectStyle}
            onClick={() => {
              setPetInfo({ ...petInfo, type: "Cat" });
              setIsCatPress(!isCatPress);
              setIsDogPress(false);
              setIsHorsePress(false);
              setIsDolphinPress(false);
              setIsTigerPress(false);
            }}
          />
          <FaHorse
            className="pet-icon horse-icon"
            size="5em"
            name="type"
            style={isHorsePress ? selectStyle : unselectStyle}
            onClick={() => {
              setPetInfo({ ...petInfo, type: "Horse" });
              setIsHorsePress(!isHorsePress);
              setIsDogPress(false);
              setIsCatPress(false);
              setIsDolphinPress(false);
              setIsTigerPress(false);
            }}
          />
          <GiDolphin
            className="pet-icon dolphin-icon"
            size="5em"
            name="type"
            style={isDolphinPress ? selectStyle : unselectStyle}
            onClick={() => {
              setPetInfo({ ...petInfo, type: "Dolphin" });
              setIsDolphinPress(!isDolphinPress);
              setIsDogPress(false);
              setIsCatPress(false);
              setIsHorsePress(false);
              setIsTigerPress(false);
            }}
          />
          <GiTigerHead
            className="pet-icon tiger-icon"
            size="5em"
            name="type"
            style={isTigerPress ? selectStyle : unselectStyle}
            onClick={() => {
              setPetInfo({ ...petInfo, type: "Tiger" });
              setIsTigerPress(!isTigerPress);
              setIsDogPress(false);
              setIsCatPress(false);
              setIsHorsePress(false);
              setIsDolphinPress(false);
            }}
          />
        </div>

        <Form.Group className="mb-3 fs-3" id="formGridCheckbox">
          <Form.Check
            type="checkbox"
            label="Advanced Search"
            className="advanced-search-checkbox"
            onChange={(e) => setIsChecked(e.target.checked)}
          />
        </Form.Group>

        <div className={isChecked ? "d-block" : "d-none"}>
          <Form className="advanced-search-container">
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label className="search-field">Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Name"
                  onChange={handlePetInfo}
                  className="search-field"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label className="search-field">
                  Adoption Status
                </Form.Label>
                <Form.Select
                  name="adoptionStatus"
                  // value={petInfo.adoptionStatus}
                  defaultValue="Choose..."
                  onChange={handlePetInfo}
                  className="search-field"
                >
                  <option value="">Choose...</option>
                  <option value="Adopted">Adopted</option>
                  <option value="Fostered">Fostered</option>
                  <option value="Available">Available</option>
                </Form.Select>
              </Form.Group>
            </Row>

            <Form.Group as={Row} className="search-bars">
              <Form.Label className="search-field my-3">
                Height (min - max cm)
              </Form.Label>
              <Col xs="6">
                <RangeSlider
                  value={petInfo.minHeight}
                  onChange={(e) => {
                    setPetInfo({ ...petInfo, minHeight: e.target.value });
                  }}
                  tooltipPlacement="top"
                  tooltip="on"
                  className="search-field my-3"
                  name="minHeight"
                  min={0}
                  max={300}
                />
              </Col>
              <Col xs="6">
                <RangeSlider
                  value={petInfo.maxHeight}
                  onChange={(e) =>
                    setPetInfo({ ...petInfo, maxHeight: e.target.value })
                  }
                  tooltipPlacement="bottom"
                  tooltip="on"
                  className="search-field my-3"
                  name="maxHeight"
                  min={0}
                  max={300}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="search-bars">
              <Form.Label className="search-field my-3">
                Weight (min - max kg)
              </Form.Label>
              <Col xs="6">
                <RangeSlider
                  value={petInfo.minWeight}
                  onChange={(e) =>
                    setPetInfo({ ...petInfo, minWeight: e.target.value })
                  }
                  tooltipPlacement="top"
                  tooltip="on"
                  className="search-field my-3"
                  name="minWeight"
                  min={0}
                  max={500}
                />
              </Col>
              <Col xs="6">
                <RangeSlider
                  value={petInfo.maxWeight}
                  onChange={(e) =>
                    setPetInfo({ ...petInfo, maxWeight: e.target.value })
                  }
                  tooltipPlacement="bottom"
                  tooltip="on"
                  className="search-field my-3"
                  name="maxWeight"
                  min={0}
                  max={500}
                />
              </Col>
            </Form.Group>
          </Form>
        </div>
        <div className="search-pet-btn-container">
          <button
            type="submit"
            className="search-pet-btn"
            onClick={handleSearch}
          >
            Search
          </button>
          <button
            type="submit"
            className="search-pet-btn clear-search"
            onClick={handleClearSearch}
          >
            Clear Search
          </button>
        </div>
        {noSearchRes ? (
          <p className="search-no-result-text">Sorry no result found</p>
        ) : (
          <SearchPetsCardList />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default SearchPets;
