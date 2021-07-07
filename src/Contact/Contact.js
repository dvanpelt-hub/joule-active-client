import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <form
        id="contact-form"
        // onSubmit={this.handleSubmit.bind(this)}
        method="POST"
      >
        <h2>Contact Us!</h2>
        <label htmlFor="first">First Name</label>
        <div className="form-group">
          <input type="text" className="form-control" />
        </div>
        <label htmlFor="last">Last Name</label>
        <div className="form-group">
          <input type="text" className="form-control" />
        </div>
        <label htmlFor="email">Email address</label>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
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
