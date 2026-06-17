export default function Footer() {
  return (
    <footer className="footer">
      <style>{`
        .footer {
          position: relative;
          background: linear-gradient(180deg, #0f172a 0%, #0a0f1f 100%);
          border-top: 1px solid rgba(212, 175, 55, 0.2);
          padding: 4rem 2rem 2rem;
          color: #cbd5e1;
          overflow: hidden;
        }

        .footer::before {
          content: '';
          position: absolute;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(20, 184, 166, 0.05) 0%, transparent 70%);
          border-radius: 50%;
          bottom: -100px;
          left: 10%;
          pointer-events: none;
        }

        .footer-container {
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 10;
        }

        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 3rem;
          margin-bottom: 3rem;
          animation: fadeInUp 0.8s ease-out;
        }

        .footer-section {
          animation: fadeInUp 0.8s ease-out backwards;
        }

        .footer-section:nth-child(1) {
          animation-delay: 0.1s;
        }

        .footer-section:nth-child(2) {
          animation-delay: 0.2s;
        }

        .footer-section:nth-child(3) {
          animation-delay: 0.3s;
        }

        .footer-section:nth-child(4) {
          animation-delay: 0.4s;
        }

        .footer-logo {
          font-size: 1.8rem;
          font-weight: 900;
          background: linear-gradient(135deg, #d4af37 0%, #ffd700 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 1rem;
          letter-spacing: 2px;
        }

        .footer-description {
          font-size: 0.95rem;
          line-height: 1.7;
          color: #94a3b8;
          margin-bottom: 1.5rem;
        }

        .footer-social {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .social-icon {
          width: 40px;
          height: 40px;
          border: 1px solid rgba(212, 175, 55, 0.3);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          text-decoration: none;
          color: #d4af37;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .social-icon:hover {
          background: #d4af37;
          color: #0f172a;
          transform: translateY(-3px);
        }

        .footer-title {
          font-size: 1.1rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 1.5rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          list-style: none;
        }

        .footer-links a {
          color: #cbd5e1;
          text-decoration: none;
          font-size: 0.95rem;
          transition: all 0.3s ease;
          position: relative;
        }

        .footer-links a::before {
          content: '';
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 0;
          height: 2px;
          background: #d4af37;
          transition: width 0.3s ease;
        }

        .footer-links a:hover {
          color: #d4af37;
          padding-left: 10px;
        }

        .footer-links a:hover::before {
          width: 100%;
        }

        .newsletter-form {
          display: flex;
          gap: 0.5rem;
          margin-top: 1rem;
        }

        .newsletter-input {
          flex: 1;
          padding: 0.75rem 1rem;
          background: rgba(212, 175, 55, 0.1);
          border: 1px solid rgba(212, 175, 55, 0.2);
          border-radius: 6px;
          color: #ffffff;
          font-size: 0.95rem;
          transition: all 0.3s ease;
        }

        .newsletter-input:focus {
          outline: none;
          border-color: #d4af37;
          background: rgba(212, 175, 55, 0.15);
          box-shadow: 0 0 15px rgba(212, 175, 55, 0.2);
        }

        .newsletter-input::placeholder {
          color: #64748b;
        }

        .newsletter-btn {
          padding: 0.75rem 1.5rem;
          background: linear-gradient(135deg, #d4af37 0%, #ffd700 100%);
          border: none;
          border-radius: 6px;
          color: #0f172a;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-size: 0.85rem;
          cursor: pointer;
          transition: all 0.3s ease;
          white-space: nowrap;
        }

        .newsletter-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(212, 175, 55, 0.3);
        }

        .footer-divider {
          border-top: 1px solid rgba(212, 175, 55, 0.1);
          margin: 3rem 0;
          animation: slideInRight 0.8s ease-out;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 2rem;
          font-size: 0.9rem;
          color: #64748b;
          animation: fadeInUp 0.8s ease-out;
        }

        .footer-bottom-links {
          display: flex;
          gap: 2rem;
          list-style: none;
          flex-wrap: wrap;
        }

        .footer-bottom-links a {
          color: #cbd5e1;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-bottom-links a:hover {
          color: #d4af37;
        }

        .footer-copyright {
          text-align: center;
          padding-top: 2rem;
          border-top: 1px solid rgba(212, 175, 55, 0.1);
          animation: fadeIn 1s ease-out 0.5s backwards;
        }

        @media (max-width: 768px) {
          .footer {
            padding: 3rem 1.5rem 2rem;
          }

          .footer-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }

          .footer-bottom-links {
            justify-content: center;
          }

          .newsletter-form {
            flex-direction: column;
          }

          .newsletter-btn {
            width: 100%;
          }
        }
      `}</style>

      <div className="footer-container">
        <div className="footer-content">
          {/* About Section */}
          <div className="footer-section">
            <div className="footer-logo">LUXE</div>
            <p className="footer-description">
              Crafting unforgettable travel experiences for luxury seekers worldwide since 1999.
            </p>
            <div className="footer-social">
              <a href="#" className="social-icon">f</a>
              <a href="#" className="social-icon">𝕏</a>
              <a href="#" className="social-icon">📷</a>
              <a href="#" className="social-icon">in</a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#destinations">Destinations</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h4 className="footer-title">Services</h4>
            <ul className="footer-links">
              <li><a href="#">Custom Itineraries</a></li>
              <li><a href="#">Luxury Stays</a></li>
              <li><a href="#">Visa Assistance</a></li>
              <li><a href="#">Travel Insurance</a></li>
              <li><a href="#">Group Tours</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-section">
            <h4 className="footer-title">Newsletter</h4>
            <p className="footer-description">
              Subscribe to get exclusive deals and travel inspiration.
            </p>
            <div className="newsletter-form">
              <input
                type="email"
                className="newsletter-input"
                placeholder="Enter your email"
              />
              <button className="newsletter-btn">Subscribe</button>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p>© 2024 LUXE Travel Agency. All rights reserved.</p>
          <ul className="footer-bottom-links">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Accessibility</a></li>
          </ul>
        </div>

        <div className="footer-copyright">
          <p>Crafted with passion for travel enthusiasts | Award-winning since 1999</p>
        </div>
      </div>
    </footer>
  );
}
