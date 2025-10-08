import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import { FaUsers } from "react-icons/fa"; // 👥 Users Icon

const cardData = [
  {
    img: "/assets/assam_bridge_2.jpg",
    title: "BRIDGE DETAILS",
    text: "Simplify road maintenance with streamlined processes and smart resource allocation, ensuring long-term infrastructure health.",
  },
  {
    img: "/assets/rams_road_3.jpg",
    title: "CULVERT DETAILS",
    text: "Simplify road maintenance with streamlined processes and smart resource allocation, ensuring long-term infrastructure health.",
  },
  {
    img: "/assets/rams_road_4.jpg",
    title: "TRAFFIC DETAILS",
    text: "Simplify road maintenance with streamlined processes and smart resource allocation, ensuring long-term infrastructure health.",
  },
  {
    img: "/assets/rams_road.jpg",
    title: "ROAD DETAILS",
    text: "Simplify road maintenance with streamlined processes and smart resource allocation, ensuring long-term infrastructure health.",
  },
];

const Dashboard = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [contact, setContact] = useState(null);

  // 🔹 Fetch contact details from backend API
  useEffect(() => {
    fetch("http://localhost:5000/api/contact")
      .then((res) => res.json())
      .then((data) => setContact(data))
      .catch((err) => console.error("Error fetching contact:", err));
  }, []);

  const nextCards = () => {
    if (startIndex + 3 < cardData.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const prevCards = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const visibleCards = cardData.slice(startIndex, startIndex + 3);

  return (
    <div className="dashboard-container">
      {/* Header with Users Icon */}
      <div className="dashboard-header">
        <h2>RAMS Portal</h2>
        <Link to="/add-role" className="top-icon" title="Add Role">
          <FaUsers />
        </Link>
      </div>

      {/* Top Section */}
      <div className="top-section">
        {/* Cards */}
        <div className="cards">
          {visibleCards.map((card, index) => (
            <div className="card" key={index}>
              <div className="card-image">
                {index === 0 && startIndex > 0 && (
                  <button className="arrow left" onClick={prevCards}>
                    &#10094;
                  </button>
                )}

                <img src={card.img} alt={card.title} />

                {index === visibleCards.length - 1 &&
                  startIndex + 3 < cardData.length && (
                    <button className="arrow right" onClick={nextCards}>
                      &#10095;
                    </button>
                  )}
              </div>

              <h4>{card.title}</h4>
              <p>{card.text}</p>
              <Link to="/bridge-details">Read More</Link>
            </div>
          ))}
        </div>

        {/* Vertical Scroller */}
        <div className="scroller">
          <div className="scroll-content">
            <div className="scroll-item">
              <i>📰</i> This is a modern vertical scroll effect!
            </div>
            <div className="scroll-item">
              <i>📰</i> This content will scroll upwards.
            </div>
            <div className="scroll-item">
              <i>📰</i> This is a modern vertical scroll effect!
            </div>
            <div className="scroll-item">
              <i>📰</i> This content will scroll upwards.
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div
        className="about-section"
        style={{
          backgroundImage:
            "url('/assets/shillong-assam-highwayindia-07th-feb-600nw-2272429121.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="overlay"></div>

        <div className="about-content">
          <div className="about-image">
            <h3>ABOUT RAMS</h3>
            <img src="/assets/arams_map1.jpg" alt="Assam Road Network" />
            <h4>ASSAM ROAD NETWORK</h4>
          </div>

          <div className="about-text">
            <p>
              A Road Asset Management System (RAMS) is a comprehensive tool or
              framework designed to efficiently manage and maintain road
              infrastructure assets over their lifecycle. The goal is to
              optimize the performance, safety, and cost-effectiveness of road
              assets, such as roads, bridges, traffic signs, pavements, and
              other infrastructure components. This system helps local
              governments, municipalities, and transportation authorities plan,
              monitor, and maintain the road network in a way that ensures the
              infrastructure remains safe, functional, and sustainable.
            </p>
            <Link to="/about" className="read-more-link">
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content">
          {/* Left */}
          <div className="footer-left">
            <h3>RAMS Portal</h3>
            <p>
              Efficiently manage and maintain road infrastructure
              for a sustainable future.
            </p>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>

          {/* Links */}
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/about">➤ About</Link></li>
              <li><Link to="/bridge-details">➤ Bridge Details</Link></li>
              <li><Link to="/culvert-details">➤ Culvert Details</Link></li>
              <li><Link to="/traffic-details">➤ Traffic Details</Link></li>
            </ul>
          </div>

          {/* Contact - now dynamic */}
          <div className="footer-contact">
            <h4>Contact</h4>
            {contact ? (
              <>
                <p><i className="fas fa-envelope"></i> {contact.email}</p>
                
                <p><i className="fas fa-map-marker-alt"></i> {contact.address}</p>
              </>
            ) : (
              <p>Loading contact info...</p>
            )}
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} RAMS Portal. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
