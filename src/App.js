import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 40px", backgroundColor: "#f2f2f2", position: "sticky", top: 0, zIndex: 10 }}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <img src="/weblogo.png" alt="AgroWise Logo" style={{ width: "40px" }} />
        <div style={{ fontWeight: "bold", fontSize: "24px", color: "#228B22" }}>AgroWise</div>
      </div>
      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
        <Link to="/careers">Careers</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

function Home() {
  return (
    <section id="home" style={{ textAlign: "center", padding: "60px 20px", backgroundImage: "url('https://images.unsplash.com/photo-1600431521340-491eca880813?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')", backgroundSize: "cover", color: "#fff" }}>
      <img src="/weblogo.png" alt="AgroWise Logo" style={{ width: "100px", marginBottom: "10px", borderRadius: "8px", backgroundColor: "#fff", padding: "10px", boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }} />
      <h1 style={{ fontSize: "48px", marginBottom: "10px", fontWeight: "bold" }}>AgroWise</h1>
      <p style={{ fontSize: "20px", fontStyle: "italic" }}>Grow Smarter, Live Better</p>
      <button style={{ marginTop: "30px", padding: "12px 24px", backgroundColor: "#228B22", color: "white", border: "none", borderRadius: "8px", fontSize: "16px" }}>Join the Movement</button>
    </section>
  );
}

function About() {
  return (
    <section style={{ padding: "60px 40px", backgroundColor: "#f9f9f9" }}>
      <h2 style={{ fontSize: "32px", marginBottom: "16px" }}>About AgroWise</h2>
      <p style={{ fontSize: "18px", maxWidth: "800px" }}>
        AgroWise is on a mission to bring smart, hardware-free technology into the hands of Indian farmers. From expense tracking and crop planning to government scheme access — we’re building a platform that supports every step of the journey.
      </p>
    </section>
  );
}

function Products() {
  return (
    <section style={{ padding: "60px 40px", backgroundColor: "#ffffff" }}>
      <h2 style={{ fontSize: "32px", marginBottom: "16px" }}>Our Products</h2>
      <ul style={{ fontSize: "18px", lineHeight: "1.6" }}>
        <li>📊 Farm Expense Tracker</li>
        <li>📅 Crop Calendar</li>
        <li>🏦 Scheme & Loan Access</li>
        <li>🌐 Multilingual Support (Telugu, English)</li>
      </ul>
    </section>
  );
}

function Careers() {
  return (
    <section style={{ padding: "60px 40px", backgroundColor: "#f9f9f9" }}>
      <h2 style={{ fontSize: "32px", marginBottom: "16px" }}>Careers</h2>
      <p style={{ fontSize: "18px", maxWidth: "800px" }}>
        We are looking for passionate developers, designers, and agriculture experts to join us on our mission. Come help build a better future for Indian farming.
      </p>
    </section>
  );
}

function Contact() {
  return (
    <section style={{ padding: "60px 40px", textAlign: "center", backgroundColor: "#ffffff" }}>
      <h2 style={{ fontSize: "32px", marginBottom: "16px" }}>Contact Us</h2>
      <p style={{ fontSize: "18px", marginBottom: "20px" }}>Have a question or want to collaborate?</p>
      <button style={{ padding: "12px 24px", backgroundColor: "#228B22", color: "white", fontSize: "16px", borderRadius: "8px", border: "none" }}>Join the Waitlist</button>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ textAlign: "center", padding: "20px", fontSize: "14px", backgroundColor: "#f2f2f2", color: "#555" }}>
      © {new Date().getFullYear()} AgroWise • All rights reserved
    </footer>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;