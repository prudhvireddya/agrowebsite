import React, { useState } from "react";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section style={{ padding: "60px 40px", backgroundColor: "#ffffff" }}>
      <h2 style={{ fontSize: "32px", marginBottom: "20px", textAlign: "center" }}>Contact Us</h2>

      <p style={{ fontSize: "18px", textAlign: "center", marginBottom: "30px" }}>
        Have a question, suggestion, or want to collaborate? Drop us a message below.
      </p>

      {!submitted ? (
        <form
          action="https://formspree.io/f/mvgaygrp"  // Replace this with your Formspree form endpoint
          method="POST"
          onSubmit={(e) => {
            e.preventDefault(); // ⛔ stop React default
            e.target.submit();  // ✅ manually submit the form
            setSubmitted(true); // ✅ show the message
          }}
          
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            fontSize: "16px"
          }}
        >
          <input name="name" type="text" placeholder="Your Name" required style={inputStyle} />
          <input name="email" type="email" placeholder="Your Email" required style={inputStyle} />
          <textarea name="message" rows="5" placeholder="Your Message" required style={inputStyle} />

          <button type="submit" style={buttonStyle}>Send Message</button>
        </form>
      ) : (
        <p style={{ textAlign: "center", fontSize: "18px", marginTop: "40px", color: "#228B22" }}>
          Thank you! Your message has been sent.
        </p>
      )}
    </section>
  );
}

const inputStyle = {
  padding: "12px",
  border: "1px solid #ccc",
  borderRadius: "6px",
  fontSize: "16px"
};

const buttonStyle = {
  padding: "12px",
  backgroundColor: "#228B22",
  color: "white",
  border: "none",
  borderRadius: "8px",
  fontSize: "16px",
  cursor: "pointer"
};

export default Contact;
