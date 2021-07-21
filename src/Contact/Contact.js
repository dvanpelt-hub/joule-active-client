import React, { useState } from "react";
import "./Contact.css";

const DB_URL = process.env.REACT_APP_DB_URL2;

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  // const resetForm = () => {
  //   setFirstName("");
  //   setLastName("");
  //   setEmail("");
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    const postContactData = async () => {
      try {
        const url = DB_URL;
        const options = {
          method: "POST",
          mode: "cors",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            first_name: firstName,
            last_name: lastName,
            email: email,
          }),
        };
        await fetch(url, options)
          .then((response) => {
            if (!response.ok) {
              throw new Error("Error: " + response.status);
            }
            return response.json();
          })
          .then((responseJson) => {
            alert("Thank you for reaching out!");
            // resetForm();
          });
      } catch (err) {
        console.log(err);
      }
    };
    postContactData();
  };

  const onFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const onLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="contact-container">
      <form id="contact-form" method="POST" onSubmit={handleSubmit}>
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
      </form>
    </div>
  );
};

export default Contact;
