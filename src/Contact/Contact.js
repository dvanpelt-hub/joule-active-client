import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faUserFriends } from "@fortawesome/free-solid-svg-icons";

// const DB_URL = process.env.REACT_APP_DB_URL1;
const mailIcon = <FontAwesomeIcon icon={faEnvelope} />;
const fbIcon = <FontAwesomeIcon icon={faUserFriends} />;

const Contact = () => {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [email, setEmail] = useState("");

  // const resetForm = () => {
  //   setFirstName("");
  //   setLastName("");
  //   setEmail("");
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const postContactData = async () => {
  //     try {
  //       const url = `${DB_URL}api/v1/mailingList`;
  //       const options = {
  //         method: "POST",
  //         mode: "cors",
  //         headers: {
  //           Accept: "application/json",
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           first_name: firstName,
  //           last_name: lastName,
  //           email: email,
  //         }),
  //       };
  //       await fetch(url, options)
  //         .then((response) => {
  //           if (!response.ok) {
  //             throw new Error("Error: " + response.status);
  //           }
  //           return response.json();
  //         })
  //         .then((responseJson) => {
  //           alert("Thank you for reaching out!");
  //           return responseJson;
  //           // resetForm();
  //         });
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   postContactData();
  // };

  // const onFirstNameChange = (e) => {
  //   setFirstName(e.target.value);
  // };

  // const onLastNameChange = (e) => {
  //   setLastName(e.target.value);
  // };

  // const onEmailChange = (e) => {
  //   setEmail(e.target.value);
  // };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <div className="email-container">
        {mailIcon}
        <p>customerservice@jouleactive.com</p>
      </div>
      <div className="fb-icon-container">{fbIcon}</div>
      <div className="fb-link-container">
        <a href="https://www.facebook.com/jouleactive/">
          JOULE Active Facebook
        </a>
      </div>
      {/* <form id="contact-form" method="POST" onSubmit={handleSubmit}>
        <h2>Contact Us!</h2>
        <label htmlFor="first">First Name</label>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            onChange={onFirstNameChange}
          />
        </div>
        <label htmlFor="last">Last Name</label>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            onChange={onLastNameChange}
          />
        </div>
        <label htmlFor="email">Email address</label>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            onChange={onEmailChange}
          />
        </div>
        <button type="submit" className="btn-primary">
          Submit
        </button>
      </form> */}
    </div>
  );
};

export default Contact;
