import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./Homepage.css";

const destinations = [
  {
    name: "Paris, France",
    description: "The City of Light with iconic landmarks and romance.",
    image:
      "https://www.chooseparisregion.org/sites/default/files/news/6---Tour-Eiffel_AdobeStock_644956457_1920_72dpi.jpg",
    background:
      "https://www.chooseparisregion.org/sites/default/files/news/6---Tour-Eiffel_AdobeStock_644956457_1920_72dpi.jpg",
  },
  {
    name: "Tokyo, Japan",
    description: "A blend of tradition and tech in a vibrant cityscape.",
    image:
      "https://res.cloudinary.com/aenetworks/image/upload/c_fill,ar_2,w_3840,h_1920,g_auto/dpr_auto/f_auto/q_auto:eco/v1/gettyimages-1390815938?_a=BAVAZGDX0",
    background:
      "https://res.cloudinary.com/aenetworks/image/upload/c_fill,ar_2,w_3840,h_1920,g_auto/dpr_auto/f_auto/q_auto:eco/v1/gettyimages-1390815938?_a=BAVAZGDX0",
  },
  {
    name: "New York, USA",
    description: "The Big Apple with culture, skyscrapers, and energy.",
    image:
      "https://cdn.britannica.com/94/167894-050-C7E2C482/Brooklyn-Bridge-East-River-New-York-City.jpg",
    background:
      "https://cdn.britannica.com/94/167894-050-C7E2C482/Brooklyn-Bridge-East-River-New-York-City.jpg",
  },
  {
    name: "Rome, Italy",
    description: "Ancient ruins, historic sites, and delicious cuisine.",
    image:
      "https://www.libertytravel.com/sites/default/files/styles/full_size/public/Rome-a.jpg?itok=390XtC1J",
    background:
      "https://www.libertytravel.com/sites/default/files/styles/full_size/public/Rome-a.jpg?itok=390XtC1J",
  },
  {
    name: "Santorini, Greece",
    description: "Whitewashed houses and sunsets over the Aegean Sea.",
    image:
      "https://c.ndtvimg.com/2025-01/li082u28_nm_295x200_31_January_25.jpg",
    background:
      "https://c.ndtvimg.com/2025-01/li082u28_nm_295x200_31_January_25.jpg",
  },
  {
    name: "Cape Town, South Africa",
    description: "Mountains meet ocean in this adventure-filled city.",
    image:
      "https://www.micato.com/wp-content/uploads/2018/09/cape-town-1-2.jpg",
    background:
      "https://www.micato.com/wp-content/uploads/2018/09/cape-town-1-2.jpg",
  },
];

const TravelPlannerSlider = () => {
  const [bgImage, setBgImage] = useState(destinations[0].background);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const navigate = useNavigate();

  const handleSlideChange = (swiper) => {
    const index = swiper.realIndex;
    setBgImage(destinations[index].background);
  };

  return (
    <>
      <div
        className="magic-slider"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "background-image 1s ease-in-out",
        }}
      >
        <div className="background-overlay">
          <header className="navbar">
            <div className="logo">Travel Planner</div>
            <div className="auth-buttons">
              <button className="auth-button" onClick={() => setShowLogin(true)} > Login </button>
              <button className="auth-button signup" onClick={() => setShowSignup(true)} > Sign Up </button>
            </div>
          </header>

          <div className="hero-text">
            <h1>EXPLORE YOUR NEXT ADVENTURE</h1>
            <h2 className="subheading">Plan Memorable Journeys</h2>
            <button className="cta-button" onClick={() => navigate("/Planner")}>
              Start Planning
            </button>
          </div>

          <Swiper
            spaceBetween={20}
            slidesPerView={3}
            loop={true}
            autoplay={{ delay: 1500, disableOnInteraction: false }}
            onSlideChange={handleSlideChange}
            className="card-slider"
            modules={[Autoplay]}
          >
            {destinations.map((dest, index) => (
              <SwiperSlide key={index}>
                <div className="destination-card">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="destination-image"
                  />
                  <h3>{dest.name}</h3>
                  <p>{dest.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Floating Menu */}
          <div className="floating-menu">
            <ion-icon name="home-outline"></ion-icon>
            <ion-icon
              name="map-outline"
              onClick={() => navigate("/About")}
            ></ion-icon>
            <ion-icon
              name="airplane-outline"
              onClick={() => navigate("/Planner")}
            ></ion-icon>
            <ion-icon
              name="chatbubble-outline"
              onClick={() => {  }}
            ></ion-icon>
            <ion-icon
              name="mail-outline"
              onClick={() => navigate("/Contact")}
            ></ion-icon>
          </div>

          {/* Login Modal */}
          {showLogin && (
            <div className="modal-overlay" onClick={() => setShowLogin(false)}>
              <div className="modal-box" onClick={(e) => e.stopPropagation()}>
                <h2>Login</h2>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button className="modal-submit">Login</button>
                <button
                  className="modal-close"
                  onClick={() => setShowLogin(false)}
                >
                  Close
                </button>
              </div>
            </div>
          )}

          {/* Sign Up Modal */}
          {showSignup && (
            <div className="modal-overlay" onClick={() => setShowSignup(false)}>
              <div className="modal-box" onClick={(e) => e.stopPropagation()}>
                <h2>Sign Up</h2>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button className="modal-submit">Sign Up</button>
                <button
                  className="modal-close"
                  onClick={() => setShowSignup(false)}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default TravelPlannerSlider;
