import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { booked, available } from '../services/styleService';

function Hotel(){

    const { hotelId } = useParams();
    const [hotel, setHotel] = useState({});


    useEffect(() => {
        fetch(`http://localhost:7000/hotels/${hotelId}`)
          .then((res) => res.json())
          .then((data) => setHotel(data));
      }, [hotelId]);


      async function handleBooking(roomId) {
        // Find the room object from the id sent to the function
        const room = hotel.rooms.find((r) => r.id === roomId);
        // Set the room booked property to true
        room.booked = true;
    
        await fetch(`http://localhost:7000/hotels/${hotelId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(hotel),
        });
        await fetch(`http://localhost:7000/hotels/${hotelId}`)
          .then((res) => res.json())
          .then((data) => setHotel(data));
      }
   
      
      
    return (
      <div>

        <h1>Welcome to the: {hotel.name}</h1>
        <h2>Location: {hotel.location}</h2>

        {hotel.rooms ? (
      <ul>
        {hotel.rooms.map((room) => (
          <li key={room.id} >
                Type: {room.type},
                Price: {room.price},
                <button
                style={room.booked ? { background: 'red', color: 'white' } : { background: 'green', color: 'white' }}
                 onClick={() => handleBooking(room.id)}
                >
                {room.booked ? 'Booked' : 'Available'}
                </button>
          </li>
        ))}
      </ul>
    ) : (
      <p>No rooms available.</p>
    )}

    <Link to="/">
      <button>Back to Home Page</button>
    </Link>
  </div>
);

}

export default Hotel;