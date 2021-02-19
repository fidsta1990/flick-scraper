import React, { useState, useEffect } from "react";

const Contact = () => {
  const [user, setUser] = useState({ name: "", email: "", message: "" });
  const [users, setUsers] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const inputValue = e.target.value;
    setUser({ ...user, [name]: inputValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const target = e.target.value;
    if (user.name && user.email && user.message && target !== "") {
      const newUser = { ...user, id: new Date().getTime().toString() };
      setUsers([...users, newUser]);
      setUser({ name: "", email: "", message: "" });
    } else {
    }
  };

  return (
    <section className="contact">
      <h2>Contact Us</h2>
      <h3>
        Please feel free to get in touch with us here. We'll set you up with a
        personal account.
      </h3>
      <p>Just add a message in the area below to request for an account.</p>
      <article className="section">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              className="form-control"
              value={user.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="name@email.com"
              className="form-control"
              value={user.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group form-message">
            <label htmlFor="message">Message:</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              value={user.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit" className="form-btn">
            send
          </button>
        </form>
      </article>
    </section>
  );
};

export default Contact;
