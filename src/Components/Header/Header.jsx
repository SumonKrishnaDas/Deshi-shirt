import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
  <nav>

<Link to="/home"> Home </Link>
<Link  to="/review" > order Review </Link>
<Link to="/about">About</Link>
<Link to="/grandpa">Grandpa</Link>

  </nav>
    );
};

export default Header;
