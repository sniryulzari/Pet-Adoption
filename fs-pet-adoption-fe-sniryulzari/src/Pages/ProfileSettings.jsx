import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Form, FloatingLabel } from "react-bootstrap";
import { UsersContext } from "../Context/Context-Users";

const ProfileSettings = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");

  const {getServerUrl} = useContext(UsersContext);

  const getUserInfo = async () => {
    const url = `${getServerUrl()}/users/userInfo`;
    try {
      const res = await axios.get(url, {
        withCredentials: true,
      });
      if (res.data._id) {
        setFirstName(res.data.firstName);
        setLastName(res.data.lastName);
        setPhoneNumber(res.data.phoneNumber);
        setEmail(res.data.email);
        setPassword(res.data.password);
        setBio(res.data.bio);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `${getServerUrl()}/users/userInfo`;
      const res = await axios.put(
        url,
        { firstName, lastName, phoneNumber, email, password, bio },
        {
          withCredentials: true,
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="profile-settings-container">
      <h1 className="profile-settings-header">Profile Settings</h1>
      <form className="profile-settings-form">
        <Form.Group
          className="profile-settings-field"
          controlId="formBasicFirstName"
        >
          <Form.Label>First Name</Form.Label>
          <Form.Control
            onChange={(e) => setFirstName(e.target.value)}
            name="firstName"
            type="text"
            value={firstName}
          />
        </Form.Group>

        <Form.Group
          className="profile-settings-field"
          controlId="formBasicLastName"
        >
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            onChange={(e) => setLastName(e.target.value)}
            name="lastName"
            type="text"
            value={lastName}
          />
        </Form.Group>

        <Form.Group
          className="profile-settings-field"
          controlId="formBasicPhoneNumber"
        >
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            onChange={(e) => setPhoneNumber(e.target.value)}
            name="phoneNumber"
            type="text"
            value={phoneNumber}
          />
        </Form.Group>

        <Form.Group
          className="profile-settings-field"
          controlId="formBasicEmail"
        >
          <Form.Label>Email</Form.Label>
          <Form.Control
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            type="email"
            value={email}
          />
        </Form.Group>

        <Form.Group
          className="profile-settings-field"
          controlId="formBasicPassword"
        >
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            type="password"
            // value={password}
          />
        </Form.Group>

        <Form.Group
          className="profile-settings-field"
          controlId="formBasicTextarea"
        >
          <Form.Label>Bio</Form.Label>
          <FloatingLabel
            controlId="floatingTextarea"
            className="profile-settings-field"
          >
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              onChange={(e) => setBio(e.target.value)}
              value={bio}
            />
          </FloatingLabel>
        </Form.Group>

        <div className="profile-settings-button-container">
          <button
            className="profile-settings-button"
            type="submit"
            onClick={handleSubmit}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileSettings;
