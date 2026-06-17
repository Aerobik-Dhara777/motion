export default function Destinations() {
  const destinations = [
    {
      id: 1,
      name: 'Bali, Indonesia',
      image: '🏝️',
      description: 'Tropical paradise with pristine beaches and ancient temples',
      price: 'From $2,499',
    },
    {
      id: 2,
      name: 'Paris, France',
      image: '🗼',
      description: 'City of light with iconic landmarks and romantic ambiance',
      price: 'From $1,999',
    },
    {
      id: 3,
      name: 'Maldives',
      image: '🏄',
      description: 'Crystal waters and luxury overwater bungalows',
      price: 'From $3,499',
    },
    {
      id: 4,
      name: 'Tokyo, Japan',
      image: '🗾',
      description: 'Modern metropolis blending tradition and cutting-edge technology',
      price: 'From $2,199',
    },
    {
      id: 5,
      name: 'Dubai, UAE',
      image: '🏙️',
      description: 'Luxury shopping and stunning desert landscapes',
      price: 'From $1,799',
    },
    {
      id: 6,
      name: 'Swiss Alps',
      image: '⛰️',
      description: 'Breathtaking alpine scenery and charming villages',
      price: 'From $2,299',
    },
  ];

  return (
    <section id="destinations" className="destinations-section">
      <style>{`
        .destinations-section {
          position: relative;
          padding: 6rem 2rem;
          background: linear-gradient(180deg, #1e293b 0%, #0f172a 100%);
          overflow: hidden;
        }

        .destinations-section::before {
          content: '';
          position: absolute;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 70%);
          border-radius: 50%;
          top: -100px;
          right: -100px;
          pointer-events: none;
        }

        .section-container {
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 10;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
          animation: fadeInUp 0.8s ease-out;
        }

        .section-subtitle {
          font-size: 1rem;
          color: #14b8a6;
          text-transform: uppercase;
          letter-spacing: 3px;
          margin-bottom: 1rem;
        }

        .section-title {
          font-size: clamp(2.5rem, 6vw, 4rem);
          font-weight: 900;
          color: #ffffff;
          margin-bottom: 1rem;
          letter-spacing: -1px;
        }

        .section-title span {
          background: linear-gradient(135deg, #d4af37 0%, #14b8a6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-description {
          font-size: 1.1rem;
          color: #cbd5e1;
          max-width: 600px;
          margin: 0 auto;
        }

        .destinations-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2.5rem;
        }

        .destination-card {
          background: rgba(30, 41, 59, 0.6);
          border: 1px solid rgba(212, 175, 55, 0.2);
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.4s ease;
          animation: fadeInUp 0.8s ease-out backwards;
          position: relative;
        }

        .destination-card:nth-child(1) {
          animation-delay: 0.1s;
        }

        .destination-card:nth-child(2) {
          animation-delay: 0.2s;
        }

        .destination-card:nth-child(3) {
          animation-delay: 0.3s;
        }

        .destination-card:nth-child(4) {
          animation-delay: 0.4s;
        }

        .destination-card:nth-child(5) {
          animation-delay: 0.5s;
        }

        .destination-card:nth-child(6) {
          animation-delay: 0.6s;
        }

        .destination-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.1), transparent);
          transition: left 0.6s ease;
          z-index: 1;
        }

        .destination-card:hover::before {
          left: 100%;
        }

        .destination-card:hover {
          transform: translateY(-10px);
          border-color: #d4af37;
          box-shadow: 0 20px 40px rgba(212, 175, 55, 0.2);
          background: rgba(30, 41, 59, 0.8);
        }

        .destination-image {
          font-size: 4rem;
          text-align: center;
          padding: 3rem 2rem;
          background: linear-gradient(135deg, rgba(212, 175, 55, 0.05) 0%, rgba(20, 184, 166, 0.05) 100%);
          position: relative;
          overflow: hidden;
        }

        .destination-image::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at center, transparent 0%, rgba(15, 23, 42, 0.4) 100%);
          pointer-events: none;
        }

        .destination-icon {
          display: inline-block;
          position: relative;
          z-index: 2;
          animation: float 3s ease-in-out infinite;
        }

        .destination-card:hover .destination-icon {
          animation: float 1.5s ease-in-out infinite;
        }

        .destination-content {
          padding: 2rem;
          position: relative;
          z-index: 2;
        }

        .destination-name {
          font-size: 1.5rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 0.75rem;
          letter-spacing: -0.5px;
        }

        .destination-description {
          font-size: 0.95rem;
          color: #cbd5e1;
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .destination-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(212, 175, 55, 0.1);
        }

        .destination-price {
          font-size: 1.1rem;
          font-weight: 700;
          background: linear-gradient(135deg, #d4af37 0%, #14b8a6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .destination-btn {
          background: transparent;
          border: 1px solid #d4af37;
          color: #d4af37;
          padding: 0.5rem 1rem;
          border-radius: 4px;
          cursor: pointer;
          font-weight: 600;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: all 0.3s ease;
        }

        .destination-btn:hover {
          background: #d4af37;
          color: #0f172a;
        }

        @media (max-width: 768px) {
          .destinations-section {
            padding: 4rem 1.5rem;
          }

          .section-title {
            font-size: 2rem;
          }

          .destinations-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>

      <div className="section-container">
        <div className="section-header">
          <div className="section-subtitle">Explore Our Collection</div>
          <h2 className="section-title">Handpicked <span>Destinations</span></h2>
          <p className="section-description">
            Choose from our carefully curated collection of world-class destinations
          </p>
        </div>

        <div className="destinations-grid">
          {destinations.map((dest) => (
            <div key={dest.id} className="destination-card">
              <div className="destination-image">
                <div className="destination-icon">{dest.image}</div>
              </div>
              <div className="destination-content">
                <h3 className="destination-name">{dest.name}</h3>
                <p className="destination-description">{dest.description}</p>
                <div className="destination-footer">
                  <span className="destination-price">{dest.price}</span>
                  <button className="destination-btn">View</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
