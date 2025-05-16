import React from "react";

function Home() {
  return (
    <section>
      {/* Hero Section */}
      <div style={{
        textAlign: "center",
        padding: "80px 20px",
        backgroundImage: "url('https://images.unsplash.com/photo-1600431521340-491eca880813?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff"
      }}>
        <img
          src="/weblogo.png"
          alt="AgroWise Logo"
          style={{
            width: "100px",
            marginBottom: "10px",
            borderRadius: "8px",
            backgroundColor: "#fff",
            padding: "10px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
          }}
        />
        <h1 style={{ fontSize: "48px", marginBottom: "10px", fontWeight: "bold" }}>AgroWise</h1>
        <p style={{ fontSize: "20px", fontStyle: "italic" }}>Grow Smarter, Live Better</p>
        <button
          style={{
            marginTop: "30px",
            padding: "12px 24px",
            backgroundColor: "#228B22",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            cursor: "pointer"
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = "#1c741c"}
          onMouseOut={(e) => e.target.style.backgroundColor = "#228B22"}
        >
          Join the Movement
        </button>
      </div>

      {/* Our Vision Section */}
      <div style={{ padding: "60px 40px", backgroundColor: "#fff", textAlign: "center" }}>
        <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>Empowering Farmers with Smart Tools</h2>
        <p style={{ fontSize: "18px", maxWidth: "800px", margin: "0 auto", lineHeight: "1.6" }}>
          AgroWise helps Indian farmers grow efficiently without hardware dependency. Whether it's expense tracking, multilingual crop planning, or getting alerts for government schemes — everything works right from your phone.
        </p>
      </div>

      {/* Farm Images Section */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        padding: "40px",
        flexWrap: "wrap",
        backgroundColor: "#f9f9f9"
      }}>
        <img
          src="/farm1.jpg"
          alt="Farm 1"
          style={{
            maxWidth: "400px",
            width: "100%",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
          }}
        />
        <img
          src="/farm2.jpg"
          alt="Farm 2"
          style={{
            maxWidth: "400px",
            width: "100%",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
          }}
        />
      </div>
    </section>
  );
}

export default Home;
