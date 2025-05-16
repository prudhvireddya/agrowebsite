import React from "react";

function Products() {
  return (
    <section style={{ padding: "60px 40px", backgroundColor: "#ffffff" }}>
      <h2 style={{ fontSize: "32px", marginBottom: "16px", textAlign: "center" }}>Our Products</h2>
      
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
        <li>🌐 <strong>Multilingual Support</strong> — Available in Telugu, English, and more to come.</li>
      </ul>
    </section>
  );
}

export default Products;
