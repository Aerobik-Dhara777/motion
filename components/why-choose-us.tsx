export default function WhyChooseUs() {
  const features = [
    {
      id: 1,
      icon: '✈️',
      title: 'Expert Planning',
      description: 'Our experienced consultants design bespoke itineraries tailored to your preferences',
    },
    {
      id: 2,
      icon: '💎',
      title: 'Luxury Experiences',
      description: 'Access to exclusive resorts, private tours, and VIP treatments worldwide',
    },
    {
      id: 3,
      icon: '🛡️',
      title: '24/7 Support',
      description: 'Round-the-clock assistance for peace of mind during your travels',
    },
    {
      id: 4,
      icon: '💰',
      title: 'Best Prices',
      description: 'Competitive rates with exclusive partnerships and insider deals',
    },
    {
      id: 5,
      icon: '🌍',
      title: 'Global Network',
      description: 'Connections in 150+ destinations with trusted local partners',
    },
    {
      id: 6,
      icon: '⭐',
      title: 'Award Winning',
      description: '25 years of excellence recognized by international travel awards',
    },
  ];

  return (
    <section id="about" className="why-choose-section">
      <style>{`
        .why-choose-section {
          position: relative;
          padding: 6rem 2rem;
          background: linear-gradient(180deg, #0f172a 0%, #1e293b 100%);
          overflow: hidden;
        }

        .why-choose-section::after {
          content: '';
          position: absolute;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(20, 184, 166, 0.08) 0%, transparent 70%);
          border-radius: 50%;
          bottom: -150px;
          left: -150px;
          pointer-events: none;
        }

        .section-container {
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 10;
        }

        .why-header {
          text-align: center;
          margin-bottom: 4rem;
          animation: fadeInUp 0.8s ease-out;
        }

        .why-subtitle {
          font-size: 1rem;
          color: #14b8a6;
          text-transform: uppercase;
          letter-spacing: 3px;
          margin-bottom: 1rem;
        }

        .why-title {
          font-size: clamp(2.5rem, 6vw, 4rem);
          font-weight: 900;
          color: #ffffff;
          margin-bottom: 1rem;
          letter-spacing: -1px;
        }

        .why-title span {
          background: linear-gradient(135deg, #d4af37 0%, #14b8a6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .why-description {
          font-size: 1.1rem;
          color: #cbd5e1;
          max-width: 600px;
          margin: 0 auto;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2.5rem;
        }

        .feature-item {
          background: linear-gradient(135deg, rgba(212, 175, 55, 0.05) 0%, rgba(20, 184, 166, 0.05) 100%);
          border: 1px solid rgba(212, 175, 55, 0.15);
          border-radius: 12px;
          padding: 2.5rem;
          text-align: center;
          animation: fadeInUp 0.8s ease-out backwards;
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
        }

        .feature-item:nth-child(1) {
          animation-delay: 0.1s;
        }

        .feature-item:nth-child(2) {
          animation-delay: 0.2s;
        }

        .feature-item:nth-child(3) {
          animation-delay: 0.3s;
        }

        .feature-item:nth-child(4) {
          animation-delay: 0.4s;
        }

        .feature-item:nth-child(5) {
          animation-delay: 0.5s;
        }

        .feature-item:nth-child(6) {
          animation-delay: 0.6s;
        }

        .feature-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.15), transparent);
          transition: left 0.6s ease;
        }

        .feature-item:hover::before {
          left: 100%;
        }

        .feature-item:hover {
          transform: translateY(-8px) scale(1.02);
          border-color: #d4af37;
          box-shadow: 0 20px 40px rgba(212, 175, 55, 0.2);
          background: linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(20, 184, 166, 0.1) 100%);
        }

        .feature-icon {
          font-size: 3.5rem;
          margin-bottom: 1.5rem;
          display: inline-block;
          animation: float 3s ease-in-out infinite;
        }

        .feature-item:hover .feature-icon {
          animation: float 1.5s ease-in-out infinite;
        }

        .feature-title {
          font-size: 1.4rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 1rem;
          letter-spacing: -0.5px;
        }

        .feature-description {
          font-size: 0.95rem;
          color: #cbd5e1;
          line-height: 1.7;
        }

        .stats-section {
          margin-top: 6rem;
          padding-top: 4rem;
          border-top: 1px solid rgba(212, 175, 55, 0.2);
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 3rem;
          text-align: center;
        }

        .stat {
          animation: scaleIn 0.6s ease-out backwards;
        }

        .stat:nth-child(1) {
          animation-delay: 0.7s;
        }

        .stat:nth-child(2) {
          animation-delay: 0.8s;
        }

        .stat:nth-child(3) {
          animation-delay: 0.9s;
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 900;
          background: linear-gradient(135deg, #d4af37 0%, #14b8a6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 0.95rem;
          color: #cbd5e1;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        @media (max-width: 768px) {
          .why-choose-section {
            padding: 4rem 1.5rem;
          }

          .why-title {
            font-size: 2rem;
          }

          .features-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .stats-section {
            grid-template-columns: 1fr;
            margin-top: 4rem;
          }
        }
      `}</style>

      <div className="section-container">
        <div className="why-header">
          <div className="why-subtitle">The LUXE Difference</div>
          <h2 className="why-title">Why Choose <span>LUXE?</span></h2>
          <p className="why-description">
            Experience unparalleled service and expertise that sets us apart in the travel industry
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature) => (
            <div key={feature.id} className="feature-item">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="stats-section">
          <div className="stat">
            <div className="stat-number">25+</div>
            <div className="stat-label">Years in Business</div>
          </div>
          <div className="stat">
            <div className="stat-number">10K+</div>
            <div className="stat-label">Happy Clients</div>
          </div>
          <div className="stat">
            <div className="stat-number">150+</div>
            <div className="stat-label">Destinations</div>
          </div>
        </div>
      </div>
    </section>
  );
}
