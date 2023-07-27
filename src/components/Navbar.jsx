import React from 'react';
import { Link } from 'react-router-dom';
import { linkStyle } from '../services/styleService';

import { navbarContainer } from '../services/styleService';


function Home() {
    return(
    <div style={navbarContainer} >
         <Link  to="/">Home</Link>
         <Link  to="/about"> About</Link>
        <Link  to="/contact">Contact</Link>

    </div>
    )
}

export default Home;