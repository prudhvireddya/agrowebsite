import React, { useState } from "react";

function Careers() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section style={{ padding: "60px 40px", backgroundColor: "#f9f9f9" }}>
      <h2 style={{ fontSize: "32px", marginBottom: "20px", textAlign: "center" }}>Careers at AgroWise</h2>

      <p style={{ fontSize: "18px", maxWidth: "800px", margin: "0 auto 40px", textAlign: "center", lineHeight: "1.6" }}>
        We’re on the lookout for passionate developers, designers, agri experts, and changemakers to build the future of Indian agriculture. Apply below to join us!
      </p>

      {!submitted ? (
        <form
          action="https://formspree.io/f/mwkgbvga"  // Replace with your real Formspree endpoint
          method="POST"
          onSubmit={() => setSubmitted(true)}
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            fontSize: "16px"
          }}
        >
          <input name="name" type="text" placeholder="Full Name" required style={inputStyle} />
          <input name="email" type="email" placeholder="Email Address" required style={inputStyle} />
          <input name="phone" type="tel" placeholder="Phone Number" required style={inputStyle} />
          <input name="role" type="text" placeholder="Role You're Applying For" required style={inputStyle} />
          <textarea name="message" rows="4" placeholder="Tell us about yourself..." required style={inputStyle} />

          <button type="submit" style={buttonStyle}>Submit Application</button>
        </form>
      ) : (
        <p style={{ textAlign: "center", fontSize: "18px", marginTop: "40px", color: "#228B22" }}>
          Thank you for applying! We'll get in touch soon.
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

export default Careers;
