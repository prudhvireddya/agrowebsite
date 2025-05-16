import React from "react";

function Footer() {
  return (
    <footer style={{
      textAlign: "center",
      padding: "20px",
      fontSize: "14px",
      backgroundColor: "#f2f2f2",
      color: "#555",
      marginTop: "auto"
    }}>
      © {new Date().getFullYear()} AgroWise • All rights reserved
    </footer>
  );
}

export default Footer;
