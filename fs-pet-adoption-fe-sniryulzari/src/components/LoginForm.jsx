import { useContext, useState } from "react";
import { Form } from "react-bootstrap";
import axios from "axios";
import { UsersContext } from "../Context/Context-Users";
import { toast } from "react-toastify";

function LoginForm(props) {
  const { handleLoginClose, handleShow } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {
    setIsLogin,
    setfirstName,
    firstName,
    setlastName,
    lastName,
    getServerUrl,
  } = useContext(UsersContext);

  const handleLogin = async (e) => {
    const url = `${getServerUrl()}/users/login`;
    try {
      e.preventDefault();
      const res = await axios.post(
        url,
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      if (res.data.id.length > 0) {
        localStorage.setItem("loggedIn", JSON.stringify(res.data.token));
        localStorage.setItem(
          "userFirstName",
          JSON.stringify(res.data.firstName)
        );
        localStorage.setItem("userLastName", JSON.stringify(res.data.lastName));
        setIsLogin(true);
        handleLoginClose();
        setfirstName(res.data.firstName);
        setlastName(res.data.lastName);
        toast.success("Login Success!", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      }
    } catch (err) {
      console.log(err);
      toast.error(
        "The email address or password is incorrect. Please retry...",
        {
          position: toast.POSITION.TOP_RIGHT,
        }
      );
    }
  };

  return (
    <Form className="loginForm">
      <h1 className="login-header">Welcome Back!</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <div className="login-modal-bottom">
        <div className="login-buttons">
          <button
            className="signup-login-btn"
            type="submit"
            onClick={handleLogin}
          >
            Log In
          </button>
          <button
            className="signup-login-btn"
            type="button"
            onClick={handleLoginClose}
          >
            Close
          </button>
        </div>
        <span className="link-signup" onClick={handleShow}>
          Not a member? Sign up
        </span>
      </div>
    </Form>
  );
}

export default LoginForm;
