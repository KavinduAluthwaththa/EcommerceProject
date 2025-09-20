'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [cartCount, setCartCount] = useState(0);

  return (
    <nav className="nav--bar">
      <div className="logo-container">
        <Image
          src="/assets/images/logo.png"
          alt="UNICSTAL Logo"
          width={250}
          height={250}
          className="logo-icon"
        />
      </div>
      
      <div className="search-container">
        <input
          type="text"
          className="search-bar"
          placeholder="Search for magical crystals..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      
      <div className="nav-buttons">
        <button className="button--navbar login-btn">Shop All</button>
        
        <button className="icon-button favorite-btn" title="Favorites">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>
        
        <button className="icon-button cart-btn" title="Shopping Cart">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="m1 1 4 4 4.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L17 8H7.68"></path>
          </svg>
          <span className="cart-count">{cartCount}</span>
        </button>
        
        <button className="button--navbar login-btn">Login</button>
        
        <Link href="/admin" className="button--navbar login-btn" style={{ textDecoration: 'none', display: 'inline-block' }}>
          Admin
        </Link>
        <button className="button--navbar login-btn">Register</button>
        
        <button className="icon-button menu-btn" title="Menu">
          <div className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;