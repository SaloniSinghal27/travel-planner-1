import React from 'react';
import './Planner.css';

function Planner() {
  return (
    <div className="planner-container">
      <header className="planner-header">
        <h1>Plan Your Trip</h1>
        <p>Let's help you organize your next great adventure!</p>
      </header>

      <div className="planner-content">
        <form className="planner-form">
          <label htmlFor="destination">Destination:</label>
          <input type="text" id="destination" name="destination" placeholder="Where are you going?" required />

          <label htmlFor="start-date">Start Date:</label>
          <input type="date" id="start-date" name="start-date" required />

          <label htmlFor="end-date">End Date:</label>
          <input type="date" id="end-date" name="end-date" required />

          <label htmlFor="budget">Budget:</label>
          <input type="number" id="budget" name="budget" placeholder="Your budget" required />

          <button type="submit">Submit Plan</button>
        </form>
      </div>
    </div>
  );
}

export default Planner;
