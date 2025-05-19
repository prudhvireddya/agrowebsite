import React from "react";

function Events() {
  const events = [
    {
      title: "Smart Farming Workshop",
      date: "June 20, 2025",
      description: "A virtual event for farmers to learn about digital tools and crop planning."
    },
    {
      title: "AgroTech Expo 2025",
      date: "July 12–14, 2025",
      description: "Join us in Hyderabad for India’s largest agri-tech showcase with AgroWise demo booths."
    },
    {
      title: "Webinar: Future of Farming",
      date: "August 5, 2025",
      description: "An open Q&A session with AgroWise founders and agri experts."
    }
  ];

  return (
    <section style={{ padding: "60px 20px", backgroundColor: "#ffffff" }}>
      <h2 style={{ fontSize: "32px", textAlign: "center", marginBottom: "30px" }}>Upcoming Events</h2>
      <div style={{ maxWidth: "900px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "30px" }}>
        {events.map((event, index) => (
          <div key={index} style={{ border: "1px solid #ddd", borderRadius: "12px", padding: "20px", boxShadow: "0 2px 10px rgba(0,0,0,0.05)" }}>
            <h3 style={{ fontSize: "22px", marginBottom: "8px" }}>{event.title}</h3>
            <p style={{ fontSize: "16px", color: "#555" }}>{event.date}</p>
            <p style={{ fontSize: "16px", marginTop: "10px", lineHeight: "1.6" }}>{event.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Events;
