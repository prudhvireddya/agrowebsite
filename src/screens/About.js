import React from "react";

function About() {
  return (
    <section style={{ padding: "60px 40px", backgroundColor: "#f9f9f9" }}>
      <h2 style={{ fontSize: "32px", marginBottom: "30px", textAlign: "center" }}>About AgroWise</h2>

      {/* Company Story */}
      <div style={{ maxWidth: "800px", margin: "0 auto", fontSize: "18px", lineHeight: "1.6" }}>
        <p>
          AgroWise was founded with a simple goal: to make smart farming accessible without needing expensive hardware. Our journey began in the heart of India’s agricultural communities, where we witnessed the need for easy-to-use tools that empower farmers to manage their fields, finances, and futures better.
        </p>
        <p style={{ marginTop: "20px" }}>
          By combining practical farming knowledge with cutting-edge software, AgroWise is helping bridge the digital gap in agriculture. From crop calendars to multilingual support, every feature is crafted with simplicity and impact in mind.
        </p>
      </div>

      {/* Founders Section */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "40px",
        marginTop: "60px",
        flexWrap: "wrap"
      }}>
        {/* Founder 1 */}
        <div style={{ textAlign: "center", maxWidth: "220px" }}>
          <img
            src="/founder1.jpg"
            alt="Founder 1"
            style={{
              width: "180px",
              height: "180px",
              borderRadius: "50%",
              objectFit: "cover",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
            }}
          />
          <h3 style={{ marginTop: "12px", fontSize: "20px" }}>Prudhvi Reddy</h3>
          <p style={{ fontSize: "14px", color: "#777" }}>Founder & Product Lead</p>
        </div>

        {/* Founder 2 (optional placeholder) */}
        <div style={{ textAlign: "center", maxWidth: "220px" }}>
          <img
            src="/founder2.jpg"
            alt="Founder 2"
            style={{
              width: "180px",
              height: "180px",
              borderRadius: "50%",
              objectFit: "cover",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
            }}
          />
          <h3 style={{ marginTop: "12px", fontSize: "20px" }}>Tarun Reddy</h3>
          <p style={{ fontSize: "14px", color: "#777" }}>Co-Founder & Tech Lead</p>
        </div>
      </div>
    </section>
  );
}

export default About;
