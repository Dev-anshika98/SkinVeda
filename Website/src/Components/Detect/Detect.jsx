// src/components/FacialDetectionPage.jsx
import React from 'react';
import './Detect.css'; // Import your CSS file
import Vision from '../../assets/General/vision.png'

const Detect = () => {
  return (
    <div className="container1">
     
      <main className="main-content">
        <h1>Facial Detection with Computer Vision</h1>
        <header className="header">
        <img
          src={Vision}// Replace with your image path
          alt="Facial Analysis"
          className="header-image"
        />
      </header>
        <p>
          Utilizing advanced computer vision algorithms, our app analyzes your
          facial features to detect 15 essential skin health metrics.
        </p>
        <div className="metrics">
          <div className="metric">
            <div className="number">1</div>
            <h3>Wrinkles</h3>
            <p>Analyze the depth and severity of wrinkles.</p>
          </div>
          <div className="metric">
            <div className="number">2</div>
            <h3>Hydration</h3>
            <p>Assess the level of moisture in your skin.</p>
          </div>
          <div className="metric">
            <div className="number">3</div>
            <h3>Acne</h3>
            <p>Identify the presence and severity of acne breakouts.</p>
          </div>
          <div className="metric">
            <div className="number">4</div>
            <h3>Dark Spots</h3>
            <p>Detect the presence and severity of hyperpigmentation.</p>
          </div>
          <div className="metric">
            <div className="number">5</div>
            <h3>Dry Skin</h3>
            <p>Detect the presence of rough patches of your skin that can flake or look scaly.</p>
          </div>
          <div className="metric">
            <div className="number">6</div>
            <h3>Pimple</h3>
            <p>Detect the presence of blocked hair follicles become inflamed or infected with bacteria.</p>
          </div>
          <div className="metric">
            <div className="number">7</div>
            <h3>Fungal Infections</h3>
            <p>Detect places on your body that trap moisture or have a lot of friction</p>
          </div>
          <div className="metric">
            <div className="number">8</div>
            <h3>Dark Spots</h3>
            <p>Detect the presence and severity of hyperpigmentation.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Detect;
