import React from 'react';
import './hero.css';
export default function Hero() {
  return (
    <div className="hero">
      <div className="hero_heading">
        <h1>Find Your Dream Home</h1>
        <p>From as low as $10 per day with limited time offer discounts.</p>
        <div className="hero_btn">
          <button>Buy </button>
          <button className="now">Now </button>
        </div>
      </div>
      <div className="user-info">
        <div className="client">
          <div><input type="text" placeholder="Enter Keyword " /></div>
          <div><input type="text" placeholder="Property" /></div>
          <div><input type="text" placeholder="Location" /></div>
          <div className="price">
            <select name="price" id="">
              <option value="price">$22</option>
              <option value="">$232</option>
              <option value="">$252</option>
              <option value="">$252</option>
            </select>
          </div> 
          <div className="usersubmitfrom">
             <button className="adavance">Advance </button>
              <button>Search </button>
          </div>
        </div>
      </div>
    </div>
  );
}
