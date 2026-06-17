'use client';

export default function Hero() {
  return (
    <section className="hero-section">
      <style>{`
        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
        }

        .hero-section::before {
          content: '';
          position: absolute;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, transparent 70%);
          border-radius: 50%;
          top: -50px;
          left: 10%;
          animation: float 8s ease-in-out infinite;
        }

        .hero-section::after {
          content: '';
          position: absolute;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(20, 184, 166, 0.1) 0%, transparent 70%);
          border-radius: 50%;
          bottom: 10%;
          right: 5%;
          animation: float 10s ease-in-out infinite reverse;
        }

        .hero-background-shapes {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .shape {
          position: absolute;
          opacity: 0.15;
        }

        .shape-1 {
          width: 200px;
          height: 200px;
          border: 2px solid #d4af37;
          top: 10%;
          right: 10%;
          animation: rotate-shape 20s linear infinite;
        }

        .shape-2 {
          width: 150px;
          height: 150px;
          border: 2px solid #14b8a6;
          bottom: 15%;
          left: 5%;
          animation: rotate-shape 15s linear infinite reverse;
        }

        .shape-3 {
          width: 100px;
          height: 100px;
          border: 1px solid #ffd700;
          top: 50%;
          left: 5%;
          animation: float 6s ease-in-out infinite;
        }

        @keyframes rotate-shape {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .hero-content {
          position: relative;
          z-index: 10;
          text-align: center;
          max-width: 900px;
          padding: 2rem;
          margin: 0 auto;
        }

        .hero-subtitle {
          font-size: 1rem;
          color: #14b8a6;
          text-transform: uppercase;
          letter-spacing: 3px;
          margin-bottom: 1rem;
          animation: fadeInDown 0.8s ease-out;
        }

        .hero-title {
          font-size: clamp(2.5rem, 8vw, 5rem);
          font-weight: 900;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          color: #ffffff;
          animation: slideInUp 0.9s ease-out 0.2s backwards;
          letter-spacing: -1px;
        }

        .hero-title span {
          background: linear-gradient(135deg, #d4af37 0%, #ffd700 50%, #14b8a6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmerText 3s ease-in-out infinite;
        }

        @keyframes shimmerText {
          0%, 100% {
            filter: brightness(1);
          }
          50% {
            filter: brightness(1.2);
          }
        }

        .hero-description {
          font-size: 1.2rem;
          color: #cbd5e1;
          line-height: 1.8;
          margin-bottom: 2.5rem;
          animation: fadeInUp 0.9s ease-out 0.4s backwards;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-cta-buttons {
          display: flex;
          gap: 2rem;
          justify-content: center;
          flex-wrap: wrap;
          animation: fadeInUp 0.9s ease-out 0.6s backwards;
          margin-bottom: 3rem;
        }

        .btn {
          padding: 1rem 2.5rem;
          font-size: 1rem;
          font-weight: 600;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 1px;
          position: relative;
          overflow: hidden;
        }

        .btn-primary {
          background: linear-gradient(135deg, #d4af37 0%, #ffd700 100%);
          color: #0f172a;
          box-shadow: 0 10px 40px rgba(212, 175, 55, 0.3);
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 20px 60px rgba(212, 175, 55, 0.5);
        }

        .btn-secondary {
          background: transparent;
          color: #ffffff;
          border: 2px solid #d4af37;
          transition: all 0.3s ease;
        }

        .btn-secondary:hover {
          background: #d4af37;
          color: #0f172a;
          transform: translateY(-3px);
          box-shadow: 0 20px 60px rgba(212, 175, 55, 0.4);
        }

        .btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.1);
          transition: left 0.3s ease;
          z-index: -1;
        }

        .btn:hover::before {
          left: 100%;
        }

        .hero-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 2rem;
          margin-top: 4rem;
          padding-top: 3rem;
          border-top: 1px solid rgba(212, 175, 55, 0.2);
        }

        .stat-item {
          animation: scaleIn 0.6s ease-out backwards;
        }

        .stat-item:nth-child(1) {
          animation-delay: 0.7s;
        }

        .stat-item:nth-child(2) {
          animation-delay: 0.8s;
        }

        .stat-item:nth-child(3) {
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
          font-size: 0.9rem;
          color: #cbd5e1;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .scroll-indicator {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          animation: fadeInUp 1s ease-out 1s backwards;
        }

        .scroll-text {
          font-size: 0.85rem;
          color: #cbd5e1;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .scroll-arrow {
          width: 24px;
          height: 24px;
          border: 2px solid #d4af37;
          border-top: none;
          border-left: none;
          transform: rotate(-45deg);
          animation: scrollBounce 2s ease-in-out infinite;
        }

        @keyframes scrollBounce {
          0%, 100% {
            transform: rotate(-45deg) translateY(0);
            opacity: 0.5;
          }
          50% {
            transform: rotate(-45deg) translateY(8px);
            opacity: 1;
          }
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2rem;
          }

          .hero-description {
            font-size: 1rem;
          }

          .hero-cta-buttons {
            flex-direction: column;
            gap: 1rem;
          }

          .btn {
            width: 100%;
          }

          .hero-stats {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .shape-1, .shape-2, .shape-3 {
            opacity: 0.08;
          }
        }
      `}</style>

      <div className="hero-background-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      <div className="hero-content">
        <div className="hero-subtitle">Welcome to Luxury Travel</div>
        <h1 className="hero-title">
          Discover <span>Extraordinary</span> Destinations
        </h1>
        <p className="hero-description">
          Experience the world&apos;s most exclusive destinations with personalized itineraries
          curated by our expert travel consultants. Your dream vacation awaits.
        </p>

        <div className="hero-cta-buttons">
          <button className="btn btn-primary">Explore Now</button>
          <button className="btn btn-secondary">Learn More</button>
        </div>

        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-number">150+</div>
            <div className="stat-label">Destinations</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">10K+</div>
            <div className="stat-label">Happy Travelers</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">25</div>
            <div className="stat-label">Years Experience</div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <span className="scroll-text">Scroll to Explore</span>
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
}
