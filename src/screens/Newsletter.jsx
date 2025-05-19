import React, { useState } from "react";

function Newsletter() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section style={{ padding: "60px 20px", backgroundColor: "#f9f9f9", textAlign: "center" }}>
      <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>Subscribe to Our Newsletter</h2>
      <p style={{ fontSize: "18px", maxWidth: "700px", margin: "0 auto 40px", lineHeight: "1.6" }}>
        Be the first to know about new features, product updates, and agri events. Stay informed, stay ahead.
      </p>

      {!submitted ? (
        <form
          action="https://formspree.io/f/mvgaygrp"
          method="POST"
          onSubmit={(e) => {
            e.preventDefault();
            e.target.submit();
            setSubmitted(true);
          }}
          style={{ maxWidth: "400px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "20px" }}
        >
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            required
            style={inputStyle}
          />
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            required
            style={inputStyle}
          />
          <button type="submit" style={buttonStyle}>Subscribe</button>
        </form>
      ) : (
        <p style={{ fontSize: "18px", marginTop: "40px", color: "#228B22" }}>
          Thank you for subscribing! You'll hear from us soon.
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

export default Newsletter;
