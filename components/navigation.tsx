'use client';

import { useState } from 'react';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          width: 100%;
          background: rgba(15, 23, 42, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(212, 175, 55, 0.2);
          z-index: 1000;
          padding: 1rem 2rem;
          animation: slideDown 0.6s ease-out;
        }

        @keyframes slideDown {
          from {
            transform: translateY(-100%);
          }
          to {
            transform: translateY(0);
          }
        }

        .navbar-container {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .navbar-logo {
          font-size: 1.8rem;
          font-weight: 900;
          background: linear-gradient(135deg, #d4af37 0%, #ffd700 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-decoration: none;
          letter-spacing: 2px;
          transition: all 0.3s ease;
        }

        .navbar-logo:hover {
          text-shadow: 0 0 20px rgba(212, 175, 55, 0.4);
        }

        .nav-links {
          display: flex;
          gap: 3rem;
          align-items: center;
          list-style: none;
        }

        .nav-links a {
          color: #cbd5e1;
          text-decoration: none;
          font-size: 0.95rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          position: relative;
          transition: color 0.3s ease;
          font-weight: 500;
        }

        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #d4af37 0%, #14b8a6 100%);
          transition: width 0.3s ease;
        }

        .nav-links a:hover {
          color: #d4af37;
        }

        .nav-links a:hover::after {
          width: 100%;
        }

        .nav-cta {
          background: linear-gradient(135deg, #d4af37 0%, #ffd700 100%);
          color: #0f172a;
          padding: 0.75rem 1.5rem;
          border-radius: 6px;
          text-decoration: none;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-size: 0.9rem;
          transition: all 0.3s ease;
          box-shadow: 0 5px 20px rgba(212, 175, 55, 0.3);
        }

        .nav-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(212, 175, 55, 0.5);
        }

        .hamburger {
          display: none;
          flex-direction: column;
          gap: 6px;
          cursor: pointer;
          background: none;
          border: none;
        }

        .hamburger span {
          width: 25px;
          height: 2px;
          background: #d4af37;
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        .hamburger.active span:nth-child(1) {
          transform: rotate(45deg) translateY(12px);
        }

        .hamburger.active span:nth-child(2) {
          opacity: 0;
        }

        .hamburger.active span:nth-child(3) {
          transform: rotate(-45deg) translateY(-12px);
        }

        @media (max-width: 768px) {
          .navbar {
            padding: 1rem;
          }

          .hamburger {
            display: flex;
          }

          .nav-links {
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            flex-direction: column;
            gap: 1rem;
            background: rgba(15, 23, 42, 0.98);
            backdrop-filter: blur(10px);
            padding: 2rem;
            border-bottom: 1px solid rgba(212, 175, 55, 0.2);
            max-height: ${isMobileMenuOpen ? '300px' : '0'};
            overflow: hidden;
            transition: max-height 0.3s ease;
          }

          .nav-links.active {
            max-height: 300px;
          }

          .nav-links a {
            font-size: 1rem;
            padding: 0.5rem 0;
          }

          .nav-cta {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>

      <div className="navbar-container">
        <a href="#" className="navbar-logo">LUXE</a>

        <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <li><a href="#destinations">Destinations</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#" className="nav-cta">Book Now</a></li>
        </ul>

        <button 
          className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
