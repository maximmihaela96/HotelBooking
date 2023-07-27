import React from 'react';
import { Link } from 'react-router-dom';
import { card } from '../services/styleService';
import { img } from '../services/styleService';



const HotelCard = ({ hotel }) => {
  return (
        <div style={card}>
        <Link key={hotel.id} to={`/hotels/${hotel.id}`}>
        <img style={img} src={hotel.image} alt={hotel.name} />
          <h1>{hotel.name}</h1>
          <p>{hotel.location}</p>
        </Link>
      </div>

  );
};

export default HotelCard;