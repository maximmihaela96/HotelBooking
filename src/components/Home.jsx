import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import HotelCard from './HotelCard';

import { cardContainer, searchHotel, searchHotelInput } from '../services/styleService';

function Home() {

    const [hotels, setHotels] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredHotels, setFilteredHotels] = useState([]);

    useEffect(() => {
        fetch("http://localhost:7000/hotels")
        .then((res) => res.json())
        .then((data) => {setHotels(data);
        setFilteredHotels(data)});

    }, []);

    const handleSearch = (event) => {
        const query = event.target.value.toLowerCase();
        setSearchQuery(query);
        
        const filteredData = hotels.filter((hotel) => {
          const hotelName = hotel.name.toLowerCase();
          return hotelName.includes(query);
        });
        
        setFilteredHotels(filteredData);
      };
    return ( 
        <div>
            <h1>Home Page</h1>
            <div style={searchHotel} >
                <label htmlFor="searchHotel">Search Hotels: </label>
                <input style={searchHotelInput} type="text" placeholder="Search hotels" value={searchQuery} onChange={handleSearch} />
            </div>
                <div>
                        {filteredHotels.map((h) => (
                        <div style={cardContainer}>
                             <HotelCard key={h.id} hotel={h} />
                        </div>
                    ))}
                </div>
        </div>
     );
}

export default Home;