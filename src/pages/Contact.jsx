import React, { useState, useEffect } from "react";

const Contact = () => {

const [input, setInput] = useState('')

  return (
    <section className="contact">
      <h2>Contact Us</h2>
      <h3>
        Please feel free to get in touch with us here. We'll set you up with a
        personal account.
      </h3>
      <p>Just add a message in the area below to request for an account.</p>
      <article className="section">
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" className="form-control" />
          </div>
        </form>
      </article>
    </section>
  );
};

export default Contact;
