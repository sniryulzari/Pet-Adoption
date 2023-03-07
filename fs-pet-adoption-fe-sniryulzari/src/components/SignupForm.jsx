import axios from "axios";
import { useContext } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import FormInput from "../components/FormInput";
import { UsersContext } from "../Context/Context-Users";

function SignupForm(props) {
  const {getServerUrl} = useContext(UsersContext);
  const { handleClose, handleLoginShow } = props;
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: "",
    repassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "firstName",
      type: "text",
      placeholder: "First Name",
      errorMessage:
        "First Name should be 3-16 characters and shouldn't include any special character",
      label: "First Name",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "lastName",
      type: "text",
      placeholder: "Last Name",
      errorMessage:
        "Last Name should be 3-16 characters and shouldn't include any special character",
      label: "Last Name",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 3,
      name: "phoneNumber",
      type: "text",
      placeholder: "Phone Number",
      errorMessage:
        "Phone Number should be 9-16 characters and should include only numbers",
      label: "Phone Number",
      pattern: "^[0-9]{9,16}",
      required: true,
    },
    {
      id: 4,
      name: "email",
      type: "email",
      placeholder: "Email Address",
      errorMessage: "It should be a valid email address",
      label: "Email Address",
      required: true,
    },
    {
      id: 5,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 6,
      name: "repassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Password don't match",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = async (e) => {
    const url = `${getServerUrl()}/users/signup`;
    try {
      e.preventDefault();
      const res = await axios.post(url, values);
      if (res.data.email.length > 0) {
        handleClose();
        handleLoginShow();
        toast.success("Signup Success!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } catch (err) {
      console.log(err);
      toast.error(err.response.data, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="SignupForm">
      <form onSubmit={handleSubmit}>
        <h1 className="signup-header">Create an account</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}

        <div className="signup-modal-bottom">
          <div className="signup-buttons">
            <button className="signup-login-btn" type="submit">
              Submit
            </button>
            <button
              className="signup-login-btn"
              type="button"
              onClick={handleClose}
            >
              Close
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignupForm;
