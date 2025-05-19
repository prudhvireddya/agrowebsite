import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function About() {
  const founders = [
    {
      name: "Prudhvi Reddy",
      role: "Founder & Product Lead",
      image: "/founder1.jpg"
    },
    {
      name: "Tarun Reddy",
      role: "Co-Founder & Tech Lead",
      image: "/founder2.jpg"
    }
  ];

  const feedbacks = [
    {
      name: "Ramu",
      location: "Andhra Pradesh",
      message: "AgroWise helped me plan better and reduce losses."
    },
    {
      name: "Siva",
      location: "Telangana",
      message: "I get alerts in Telugu. It feels like the app was made for me."
    },
    {
      name: "Veera",
      location: "Odisha",
      message: "AgroWise helped me to remind watering for my crop."
    }
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    centerMode: true,
    centerPadding: "20px",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "0px"
        }
      }
    ]
  };

  return (
    <section>
      {/* About Hero Background */}
      <div
        style={{
          backgroundImage: "url('/farm1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "100px 20px",
          textAlign: "center",
          color: "#fff"
        }}
      >
        <h1 style={{ fontSize: "48px", fontWeight: "bold", textShadow: "2px 2px 6px rgba(0,0,0,0.7)" }}>
          AgroWise — Where Future Farming Begins
        </h1>
        <p style={{ fontSize: "20px", marginTop: "20px", maxWidth: "800px", margin: "20px auto", textShadow: "1px 1px 4px rgba(0,0,0,0.5)" }}>
          Connecting small to large farmers with digital solutions that simplify planning, reduce cost, and boost productivity. AgroWise is bridging the rural-urban agri-tech divide — one farm at a time.
        </p>
      </div>

      {/* Company Info */}
      <div style={{ padding: "60px 40px", backgroundColor: "#f9f9f9", textAlign: "center" }}>
        <h2 style={{ fontSize: "32px", marginBottom: "30px" }}>Our Story</h2>
        <div style={{ maxWidth: "900px", margin: "0 auto", fontSize: "18px", lineHeight: "1.7" }}>
          <p>
            AgroWise is a digital platform for every farmer — from small-scale cultivators to commercial producers. Whether you're growing on 0.1 acre or 100, our tools are built to help you succeed.
          </p>
          <p style={{ marginTop: "20px" }}>
            Founded on the belief that technology should be inclusive, AgroWise blends local wisdom with smart solutions. From multilingual crop planning to water need alerts and pest detection by crop phase, every feature empowers farmers with knowledge and ease.
          </p>
          <p style={{ marginTop: "20px", fontWeight: "bold" }}>
            AgroWise — technology rooted in the soil.
          </p>
        </div>
      </div>

      {/* Founders Slider Section */}
      <div style={{ backgroundColor: "#fff", padding: "60px 20px" }}>
        <h3 style={{ textAlign: "center", fontSize: "28px", marginBottom: "40px" }}>Meet the Founders</h3>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <Slider {...sliderSettings}>
            {founders.map((founder, index) => (
              <div key={index}>
                <div style={{ backgroundColor: "#f3f3f3", padding: "30px", borderRadius: "16px", textAlign: "center", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
                  <img
                    src={founder.image}
                    alt={founder.name}
                    style={{
                      width: "160px",
                      height: "160px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
                    }}
                  />
                  <h3 style={{ marginTop: "16px", fontSize: "22px" }}>{founder.name}</h3>
                  <p style={{ fontSize: "14px", color: "#555" }}>{founder.role}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Feedback Section with Farm2 Background */}
      <div
        style={{
          backgroundImage: "url('/farm2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "80px 20px",
          textAlign: "center",
          color: "#fff"
        }}
      >
        <h3 style={{ fontSize: "28px", marginBottom: "40px", textShadow: "2px 2px 6px rgba(0,0,0,0.7)" }}>
          Stories from the Field
        </h3>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <Slider {...sliderSettings}>
            {feedbacks.map((item, index) => (
              <div key={index}>
                <div style={{ backgroundColor: "rgba(255,255,255,0.9)", color: "#333", borderRadius: "16px", padding: "30px", margin: "10px", minHeight: "180px" }}>
                  <blockquote style={{ fontSize: "18px", fontStyle: "italic", lineHeight: "1.6" }}>
                    "{item.message}"
                  </blockquote>
                  <p style={{ marginTop: "10px", fontWeight: "bold" }}>{item.name} — {item.location}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default About;