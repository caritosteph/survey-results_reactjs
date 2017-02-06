import React from 'react';
import {Link} from 'react-router';

const Header = () => {
  return (
    <header className = "main-header">
      <Link to="/" className = "logo">
        <div className = "logo-name"><b>Survey</b>Results</div>
      </Link>
      <nav className = "navbar navbar-static-top"/>
    </header>
  );
};

export default Header;
