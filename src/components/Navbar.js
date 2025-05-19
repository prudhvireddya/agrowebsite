import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 40px",
    backgroundColor: "#f2f2f2",
    position: "sticky",
    top: 0,
    zIndex: 10,
    boxShadow: "0 2px 5px rgba(0,0,0,0.05)"
  };

  const linkStyle = (path) => ({
    textDecoration: "none",
    color: location.pathname === path ? "#228B22" : "#333",
    fontWeight: "500",
    transition: "color 0.3s"
  });

  return (
    <nav style={navStyle}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <img src="/weblogo.png" alt="AgroWise Logo" style={{ width: "40px" }} />
        <div style={{ fontWeight: "bold", fontSize: "24px", color: "#228B22" }}>AgroWise</div>
      </div>
      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/" style={linkStyle("/")}>Home</Link>
        <Link to="/about" style={linkStyle("/about")}>About</Link>
        <Link to="/products" style={linkStyle("/products")}>Products</Link>
        <Link to="/events" style={linkStyle("/events")}>Events</Link>
        <Link to="/newsletter" style={linkStyle("/newsletter")}>Newsletter</Link>
        <Link to="/careers" style={linkStyle("/careers")}>Careers</Link>
        <Link to="/contact" style={linkStyle("/contact")}>Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
