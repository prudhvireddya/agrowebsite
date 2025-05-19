import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
  const offerings = [
    { title: "Multilingual Crop Planning", emoji: "🌿" },
    { title: "Expense & Yield Tracking", emoji: "💸" },
    { title: "Government Scheme Alerts", emoji: "📢" },
    { title: "Climate Intelligence", emoji: "⛅" },
    { title: "Farm Location Mapping", emoji: "📍" },
    { title: "Irrigation Type Suitability", emoji: "🌱" },
    { title: "Crop Calendar with Reminders", emoji: "🗓️" },
    { title: "Water Requirement by Crop Phase", emoji: "💧" },
    { title: "Pest & Disease Watch", emoji: "🦠" },
    { title: "Yield Prediction from Entries", emoji: "📊" },
    { title: "Rainfall Tracker", emoji: "☔️" }
  ];

  const bgSliderSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    fade: true
  };

  const heroImages = [
    "/farm1.jpg",
    "/farm2.jpg"
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  };

  return (
    <section>
      {/* Hero Section */}
      <div style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
        <Slider {...bgSliderSettings}>
          {heroImages.map((img, i) => (
            <div key={i}>
              <div
                style={{
                  backgroundImage: `url(${img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "100vh"
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    zIndex: 1
                  }}
                ></div>
                <div
                  style={{
                    position: "relative",
                    zIndex: 2,
                    textAlign: "center",
                    color: "#fff",
                    paddingTop: "120px"
                  }}
                >
                  <h1 style={{ fontSize: "64px", fontWeight: "800", textShadow: "2px 2px 8px rgba(0,0,0,0.7)" }}>
                    AgroWise
                  </h1>
                  <p style={{ fontSize: "24px", fontStyle: "italic", marginTop: "10px", textShadow: "1px 1px 5px rgba(0,0,0,0.5)" }}>
                    Where Future Farming Begins
                  </p>
                  <button
                    style={{
                      marginTop: "35px",
                      padding: "14px 30px",
                      backgroundColor: "#228B22",
                      color: "white",
                      border: "none",
                      borderRadius: "8px",
                      fontSize: "17px",
                      cursor: "pointer",
                      transition: "all 0.3s ease"
                    }}
                    onMouseEnter={(e) => (e.target.style.transform = "scale(1.07)")}
                    onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
                  >
                    Explore the Platform
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Why Agriculture Needs a Revolution */}
      <div style={{ padding: "70px 40px", backgroundColor: "#fff", textAlign: "center" }}>
        <h2 style={{ fontSize: "32px", fontWeight: "700", marginBottom: "20px" }}>
          Why Agriculture Needs a Revolution
        </h2>
        <p style={{ fontSize: "18px", maxWidth: "900px", margin: "0 auto", lineHeight: "1.8", color: "#444" }}>
          By 2050, the global population will exceed 9 billion. We must grow 60% more food with less land and water. AgroWise empowers farmers to meet this challenge with digital solutions — no expensive hardware needed.
        </p>
      </div>

      {/* What AgroWise Offers */}
      <div style={{ padding: "60px 20px", backgroundColor: "#f9f9f9", textAlign: "center" }}>
        <h2 style={{ fontSize: "32px", fontWeight: "700", marginBottom: "40px" }}>What AgroWise Offers</h2>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <Slider {...sliderSettings}>
            {offerings.map((item, index) => (
              <div key={index}>
                <div style={{ margin: "0 10px", backgroundColor: "#fff", padding: "20px", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", height: "180px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ fontSize: "36px" }}>{item.emoji}</div>
                  <h3 style={{ fontSize: "18px", marginTop: "10px" }}>{item.title}</h3>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Technology for Every Farmer */}
      <div style={{ padding: "70px 40px", backgroundColor: "#fff", textAlign: "center" }}>
        <h2 style={{ fontSize: "32px", fontWeight: "700", marginBottom: "20px" }}>
          Technology for Every Farmer
        </h2>
        <p style={{ fontSize: "18px", maxWidth: "900px", margin: "0 auto", lineHeight: "1.8", color: "#444" }}>
          AgroWise is made for everyone — from 1-acre farmers to commercial producers. No hardware needed. Just a mobile phone. Our platform is multilingual, intuitive, and designed to work even in low-connectivity areas.
        </p>
      </div>

      {/* The Global Agri Challenge */}
      <div style={{ padding: "70px 40px", backgroundColor: "#f0f8ff", textAlign: "center" }}>
        <h2 style={{ fontSize: "32px", fontWeight: "700", marginBottom: "20px" }}>
          The Global Agri Challenge
        </h2>
        <p style={{ fontSize: "18px", maxWidth: "900px", margin: "0 auto", lineHeight: "1.8", color: "#444" }}>
          Climate change, water scarcity, and population growth are squeezing farmers everywhere. AgroWise helps bridge the gap with real-time data, intelligent planning, and actionable insights that empower farmers to grow more with less.
        </p>
      </div>

      {/* Stories from the Field */}
      <div style={{ padding: "60px 40px", backgroundColor: "#fff", textAlign: "center" }}>
        <h2 style={{ fontSize: "32px", fontWeight: "700", marginBottom: "30px" }}>Stories from the Field</h2>
        <p style={{ fontSize: "18px", maxWidth: "800px", margin: "0 auto", color: "#444" }}>
          "AgroWise helped me reduce costs and make better crop decisions. I now earn more with less risk."
        </p>
        <p style={{ marginTop: "10px", fontWeight: "600" }}>– Ramu, Farmer from Andhra Pradesh</p>
      </div>

      {/* Final CTA */}
      <div style={{ padding: "80px 20px", backgroundColor: "#f0f8ff", textAlign: "center" }}>
        <h2 style={{ fontSize: "34px", fontWeight: "800", marginBottom: "20px" }}>
          Ready to Revolutionize Your Farm?
        </h2>
        <p style={{ fontSize: "18px", maxWidth: "800px", margin: "0 auto", color: "#444", lineHeight: "1.7" }}>
          Join the movement towards sustainable, smart, and inclusive agriculture. All from your phone.
        </p>
        <button
          style={{
            marginTop: "30px",
            padding: "14px 30px",
            backgroundColor: "#228B22",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "17px",
            cursor: "pointer",
            transition: "all 0.3s ease"
          }}
          onMouseEnter={(e) => (e.target.style.transform = "scale(1.07)")}
          onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        >
          Get Started Now
        </button>
      </div>

      {/* Social Footer */}
      <footer style={{ backgroundColor: "#222", color: "#fff", textAlign: "center", padding: "30px 20px" }}>
        <h3 style={{ marginBottom: "10px" }}>Follow Us</h3>
        <div style={{ fontSize: "20px", display: "flex", justifyContent: "center", gap: "20px" }}>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" style={{ color: "#fff" }}>Facebook</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" style={{ color: "#fff" }}>Instagram</a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" style={{ color: "#fff" }}>Twitter</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={{ color: "#fff" }}>LinkedIn</a>
        </div>
        <p style={{ marginTop: "20px", fontSize: "14px" }}>
          &copy; {new Date().getFullYear()} AgroWise. All rights reserved.
        </p>
      </footer>
    </section>
  );
}

export default Home;
