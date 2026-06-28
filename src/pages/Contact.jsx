import { useState } from "react";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="container">

      <h1>Contact Us</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Enter your name"
          required
        />

        <input
          type="email"
          placeholder="Enter your email"
          required
        />

        <textarea
          rows="6"
          placeholder="Your message"
          required
        ></textarea>

        <button type="submit">
          Submit
        </button>

      </form>

      {submitted && (
        <h3
          style={{
            color: "green",
            marginTop: "20px",
          }}
        >
          Thank you! We will contact you soon.
        </h3>
      )}
    </div>
  );
}

export default Contact;