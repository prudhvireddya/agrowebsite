import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Products() {
  const upcomingProducts = [
    {
      title: "AW Farm Weather / News",
      description: "Get hyperlocal weather and curated agri-news — realising soon."
    },
    {
      title: "AW Farm Manager",
      description: "A complete farm planning to record keeping tool — realising soon."
    },
    {
      title: "AW Social Farming",
      description: "A community-first platform to connect, share & learn — coming soon."
    }
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <section style={{ backgroundColor: "#fff" }}>
      {/* Emotion Quote */}
      <div style={{ backgroundColor: "#f9f9f9", padding: "80px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "34px", fontWeight: "700" }}>
          Tools that help farmers earn better, not just farm better.
        </h2>
        <p style={{ fontSize: "18px", marginTop: "20px", maxWidth: "800px", margin: "0 auto", lineHeight: "1.6" }}>
          At AgroWise, our mission is to empower farmers — not with complexity, but with simplicity that makes a difference.
        </p>
      </div>

      {/* Core Product List */}
      <div style={{ padding: "60px 40px" }}>
        <h2 style={{ fontSize: "32px", marginBottom: "16px", textAlign: "center" }}>Our Core Products</h2>
        <p style={{ fontSize: "18px", maxWidth: "800px", margin: "0 auto", textAlign: "center", marginBottom: "40px", lineHeight: "1.6" }}>
          At AgroWise, we design software-first solutions for farmers. Our tools simplify farm management and put power in the hands of every farmer — no hardware required.
        </p>
        <ul style={{
          fontSize: "18px",
          lineHeight: "2",
          maxWidth: "700px",
          margin: "0 auto",
          paddingLeft: "20px"
        }}>
          <li>📊 <strong>Farm Expense Tracker</strong> — Record, categorize, and monitor all your farming expenses.</li>
          <li>📅 <strong>Crop Calendar</strong> — Plan your seasonal activities with alerts and reminders.</li>
          <li>🏦 <strong>Scheme & Loan Access</strong> — Get notified about government schemes and apply easily.</li>
          
        </ul>
      </div>

      {/* Upcoming Products Slider with Background */}
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
        <h2 style={{ fontSize: "30px", marginBottom: "40px", textShadow: "2px 2px 6px rgba(0,0,0,0.6)" }}>Upcoming Innovations</h2>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <Slider {...sliderSettings}>
            {upcomingProducts.map((product, index) => (
              <div key={index}>
                <div style={{ backgroundColor: "rgba(255, 255, 255, 0.9)", color: "#333", borderRadius: "16px", padding: "30px", margin: "10px", minHeight: "180px" }}>
                  <h3 style={{ fontSize: "22px", marginBottom: "10px" }}>{product.title}</h3>
                  <p style={{ fontSize: "16px", lineHeight: "1.6" }}>{product.description}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <p style={{ marginTop: "40px", fontStyle: "italic", fontSize: "16px", textShadow: "1px 1px 4px rgba(0,0,0,0.4)" }}>
          More exciting tools will be announced soon.
        </p>
      </div>
    </section>
  );
}

export default Products;
