export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Custom Itineraries',
      description: 'Personalized travel plans designed specifically for your preferences, budget, and interests.',
      color: '#d4af37',
    },
    {
      id: 2,
      title: 'Luxury Accommodations',
      description: '5-star hotels and resorts partnerships for premium comfort and exclusive amenities.',
      color: '#14b8a6',
    },
    {
      id: 3,
      title: 'Visa Assistance',
      description: 'Complete visa processing support to simplify your travel preparation.',
      color: '#d4af37',
    },
    {
      id: 4,
      title: 'Travel Insurance',
      description: 'Comprehensive coverage options for complete peace of mind during your journey.',
      color: '#14b8a6',
    },
  ];

  return (
    <section id="services" className="services-section">
      <style>{`
        .services-section {
          position: relative;
          padding: 6rem 2rem;
          background: linear-gradient(180deg, #1e293b 0%, #0f172a 100%);
          overflow: hidden;
        }

        .services-section::before {
          content: '';
          position: absolute;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 70%);
          border-radius: 50%;
          top: -150px;
          right: -150px;
          pointer-events: none;
        }

        .section-container {
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 10;
        }

        .services-header {
          text-align: center;
          margin-bottom: 4rem;
          animation: fadeInUp 0.8s ease-out;
        }

        .services-subtitle {
          font-size: 1rem;
          color: #14b8a6;
          text-transform: uppercase;
          letter-spacing: 3px;
          margin-bottom: 1rem;
        }

        .services-title {
          font-size: clamp(2.5rem, 6vw, 4rem);
          font-weight: 900;
          color: #ffffff;
          margin-bottom: 1rem;
          letter-spacing: -1px;
        }

        .services-title span {
          background: linear-gradient(135deg, #d4af37 0%, #14b8a6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .services-description {
          font-size: 1.1rem;
          color: #cbd5e1;
          max-width: 600px;
          margin: 0 auto;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2.5rem;
        }

        .service-card {
          position: relative;
          padding: 2.5rem;
          background: rgba(30, 41, 59, 0.4);
          border: 1px solid rgba(212, 175, 55, 0.15);
          border-radius: 12px;
          animation: fadeInUp 0.8s ease-out backwards;
          transition: all 0.4s ease;
          overflow: hidden;
        }

        .service-card:nth-child(1) {
          animation-delay: 0.1s;
        }

        .service-card:nth-child(2) {
          animation-delay: 0.2s;
        }

        .service-card:nth-child(3) {
          animation-delay: 0.3s;
        }

        .service-card:nth-child(4) {
          animation-delay: 0.4s;
        }

        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, transparent, var(--service-color), transparent);
          transform: scaleX(0);
          transform-origin: center;
          transition: transform 0.4s ease;
        }

        .service-card:hover::before {
          transform: scaleX(1);
        }

        .service-card:hover {
          transform: translateY(-8px);
          border-color: var(--service-color);
          background: rgba(30, 41, 59, 0.6);
          box-shadow: 0 15px 40px rgba(212, 175, 55, 0.15);
        }

        .service-number {
          font-size: 3rem;
          font-weight: 900;
          background: linear-gradient(135deg, var(--service-color), rgba(212, 175, 55, 0.6));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          opacity: 0.3;
          margin-bottom: 1rem;
          letter-spacing: -2px;
        }

        .service-title {
          font-size: 1.4rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 1rem;
          letter-spacing: -0.5px;
        }

        .service-description {
          font-size: 0.95rem;
          color: #cbd5e1;
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }

        .service-link {
          display: inline-flex;
          align-items: center;
          color: var(--service-color);
          text-decoration: none;
          font-weight: 600;
          font-size: 0.95rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: all 0.3s ease;
          gap: 0.5rem;
        }

        .service-link::after {
          content: '→';
          transition: transform 0.3s ease;
        }

        .service-card:hover .service-link {
          gap: 1rem;
        }

        .cta-section {
          margin-top: 6rem;
          padding: 4rem;
          background: linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(20, 184, 166, 0.1) 100%);
          border: 1px solid rgba(212, 175, 55, 0.2);
          border-radius: 12px;
          text-align: center;
          animation: scaleIn 0.8s ease-out;
        }

        .cta-title {
          font-size: 2rem;
          font-weight: 900;
          color: #ffffff;
          margin-bottom: 1rem;
        }

        .cta-description {
          font-size: 1.1rem;
          color: #cbd5e1;
          margin-bottom: 2rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-button {
          background: linear-gradient(135deg, #d4af37 0%, #ffd700 100%);
          color: #0f172a;
          padding: 1rem 3rem;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 10px 30px rgba(212, 175, 55, 0.3);
        }

        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 20px 50px rgba(212, 175, 55, 0.5);
        }

        @media (max-width: 768px) {
          .services-section {
            padding: 4rem 1.5rem;
          }

          .services-title {
            font-size: 2rem;
          }

          .services-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .cta-section {
            padding: 2.5rem;
            margin-top: 4rem;
          }

          .cta-title {
            font-size: 1.5rem;
          }
        }
      `}</style>

      <div className="section-container">
        <div className="services-header">
          <div className="services-subtitle">Our Offerings</div>
          <h2 className="services-title">Premium Travel <span>Services</span></h2>
          <p className="services-description">
            Comprehensive solutions to make your journey seamless and unforgettable
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className="service-card"
              style={{'--service-color': service.color} as React.CSSProperties}
            >
              <div className="service-number">0{index + 1}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <a href="#" className="service-link">Learn More</a>
            </div>
          ))}
        </div>

        <div className="cta-section">
          <h3 className="cta-title">Ready to Plan Your Dream Vacation?</h3>
          <p className="cta-description">
            Get in touch with our expert consultants today and let us create an unforgettable travel experience
          </p>
          <button className="cta-button">Start Your Journey</button>
        </div>
      </div>
    </section>
  );
}
