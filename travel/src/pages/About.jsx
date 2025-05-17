import React, { useEffect, useState } from 'react';
import './About.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutUs = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className={`aboutus-container ${darkMode ? 'dark-mode' : ''}`}>
      <div className="aboutus-content">
        {/* Dark Mode Toggle */}
        <button onClick={() => setDarkMode(!darkMode)} className="dark-toggle">
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>

        <h1 className="aboutus-title" data-aos="fade-down">Who We Are</h1>
        <p className="aboutus-tagline" data-aos="fade-up">Turning your travel dreams into reality.</p>

        <hr className="section-divider" />

        <div className="aboutus-text" data-aos="fade-up">
          <p>
            At <strong>Travel Planner</strong>, we believe travel should be effortless, exciting, and personal.
          </p>
          <p>
            Whether you're planning a weekend escape or a world tour, we're here to make it inspiring and seamless.
          </p>
        </div>

        <hr className="section-divider" />

        <div className="aboutus-stats" data-aos="zoom-in">
          <div className="stat">
            <h2>100+</h2>
            <p>Destinations</p>
          </div>
          <div className="stat">
            <h2>20K+</h2>
            <p>Happy Travelers</p>
          </div>
          <div className="stat">
            <h2>5+</h2>
            <p>Years of Experience</p>
          </div>
        </div>

        <hr className="section-divider" />

        <h2 className="team-title" data-aos="fade-up">Meet Our Team</h2>
        <div className="team-section" data-aos="fade-up">
          <div className="team-member">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0GZqRzS_mtkuXfdiEs09vQ2TbFGIYeyri_Q&s" alt="Anna Flores" />
            <h3>Anna Flores</h3>
            <p>Lead Travel Designer</p>
          </div>
          <div className="team-member">
            <img src="https://www.shutterstock.com/image-vector/doraemon-cute-hand-drawn-illustration-600nw-2352837563.jpg" alt="James Lee" />
            <h3>James Lee</h3>
            <p>Experience Curator</p>
          </div>
          <div className="team-member">
            <img src="https://www.loudegg.com/wp-content/uploads/2020/10/Mickey-Mouse.jpg" alt="Sara Ngu" />
            <h3>Sara Ngu</h3>
            <p>Explorer & Writer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
