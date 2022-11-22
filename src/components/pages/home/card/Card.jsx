import React from 'react';
import './card.css';
import Sdata from './Sdata';

export default function Card() {
  return (
    <div className="card">
      <div className="heading">
        <h1>Featured Properties</h1>
        <p>Handpicked properties by our team.</p>
      </div>

        <div className="cart">
          {Sdata.map((product) => (
            <div className="box">
              <img src={product.cover} alt="rg" />
              <div className="cart-info">
                <h3>{product.title}</h3>
                <p>{product.desc}</p>
                <button>Booking Now</button>
                <hr />
                <div className="item">
                  <span>{product.space}</span>
                  <span>{product.bad}</span>
                  <span>{product.bathroom}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
}
