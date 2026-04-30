import { Link } from 'react-router-dom'
import { useReveal } from '../components/useReveal'
import './Home.css'

export default function Home() {
  const pageRef = useReveal() as React.RefObject<HTMLDivElement>

  return (
    <div ref={pageRef} className="home-page">

      {/* Hero */}
      <section className="home-hero">
        <div className="container">
          <div className="hero-eyebrow reveal">
            <span className="label">Software Engineer</span>
            <span className="hero-dot" />
            <span className="hero-location">Kitchener, Ontario</span>
          </div>
          <h1 className="hero-title reveal reveal-delay-1">
            Building software<br />
            <em>that matters.</em>
          </h1>
          <p className="hero-sub reveal reveal-delay-2">
            I'm Ajay Kumar — a full-stack engineer with 5+ years of experience turning 
            complex problems into clean, performant systems. I moved from Chandigarh to Canada 
            to grow, and I'm not done yet.
          </p>
          <div className="hero-actions reveal reveal-delay-3">
            <Link to="/story" className="btn-dark">Read My Story</Link>
            <Link to="/work" className="btn-outline">See My Work</Link>
          </div>
        </div>
        <div className="hero-line" />
      </section>

      {/* Stats bar */}
      <section className="home-stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat reveal">
              <div className="stat-num">5+</div>
              <div className="stat-label">Years of experience</div>
            </div>
            <div className="stat-div" />
            <div className="stat reveal reveal-delay-1">
              <div className="stat-num">35%</div>
              <div className="stat-label">API performance gains</div>
            </div>
            <div className="stat-div" />
            <div className="stat reveal reveal-delay-2">
              <div className="stat-num">76%</div>
              <div className="stat-label">Revenue recovery on payment fix</div>
            </div>
            <div className="stat-div" />
            <div className="stat reveal reveal-delay-3">
              <div className="stat-num">100%</div>
              <div className="stat-label">On-time delivery (freelance)</div>
            </div>
          </div>
        </div>
      </section>

      {/* Story teaser */}
      <section className="home-story-teaser">
        <div className="container home-story-grid">
          <div className="story-text">
            <div className="label reveal">My Journey</div>
            <h2 className="reveal reveal-delay-1">
              From a small city in Haryana<br />to building systems in Canada.
            </h2>
            <p className="reveal reveal-delay-2">
              This isn't just a career story. It's about packing up your life, betting on yourself, 
              studying through Lambton College in Toronto, navigating a new country, 
              and grinding through a tough job market — all while levelling up technically.
            </p>
            <p className="reveal reveal-delay-3">
              I want you to understand who I am, not just what I've built.
            </p>
            <Link to="/story" className="story-link reveal reveal-delay-4">
              Read the full story <span className="arrow">&#8594;</span>
            </Link>
          </div>
          <div className="story-visual reveal reveal-delay-2">
            <div className="story-card">
              <div className="story-card-tag">Chapter 1</div>
              <div className="story-card-title">Murthal, Haryana</div>
              <div className="story-card-sub">B.Tech CSE &mdash; 2015&ndash;2019</div>
            </div>
            <div className="story-card story-card-2">
              <div className="story-card-tag">Chapter 2</div>
              <div className="story-card-title">Chandigarh, India</div>
              <div className="story-card-sub">First job, first salary hike &mdash; 2019&ndash;2022</div>
            </div>
            <div className="story-card story-card-3">
              <div className="story-card-tag">Chapter 3</div>
              <div className="story-card-title">Toronto, Ontario</div>
              <div className="story-card-sub">Graduate Certificate in DevOps &mdash; 2022&ndash;2024</div>
            </div>
            <div className="story-card story-card-4 story-card-active">
              <div className="story-card-tag">Now</div>
              <div className="story-card-title">Kitchener, Ontario</div>
              <div className="story-card-sub">Freelancing &bull; Seeking full-time role</div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills snapshot */}
      <section className="home-skills">
        <div className="container">
          <div className="skills-header">
            <div>
              <div className="label reveal">What I Build With</div>
              <h2 className="reveal reveal-delay-1">A full-stack toolkit.</h2>
            </div>
            <Link to="/work" className="skills-link reveal reveal-delay-2">
              See all projects &#8594;
            </Link>
          </div>
          <div className="skills-tags reveal reveal-delay-2">
            {['Spring Boot','Node.js','React.js','Angular','Java 8+','TypeScript','AWS','Docker','Kubernetes','MySQL','MongoDB','GitLab CI/CD','REST APIs','Microservices','OAuth2 / JWT','TDD'].map(s => (
              <span key={s} className="skill-tag">{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="home-cta">
        <div className="container home-cta-inner">
          <div>
            <h2 className="reveal">Ready to work together?</h2>
            <p className="reveal reveal-delay-1">
              I'm actively looking for a full-time role where I can contribute from day one, 
              grow with the team, and stay long-term.
            </p>
          </div>
          <div className="cta-actions reveal reveal-delay-2">
            <Link to="/contact" className="btn-dark">Get in Touch</Link>
            <Link to="/mindset" className="btn-outline-dark">My Mindset</Link>
          </div>
        </div>
      </section>

    </div>
  )
}
