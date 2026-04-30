import { NavLink } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-left">
          <div className="footer-logo">Ajay Kumar</div>
          <p className="footer-tagline">
            Software Engineer &mdash; Kitchener, Ontario
          </p>
          <p className="footer-copy">
            Open to full-time opportunities. Let's build something meaningful.
          </p>
        </div>

        <div className="footer-nav">
          <div className="footer-col">
            <div className="footer-col-title">Pages</div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/story">My Story</NavLink>
            <NavLink to="/work">Work</NavLink>
            <NavLink to="/mindset">Mindset</NavLink>
            <NavLink to="/life">Life</NavLink>
          </div>
          <div className="footer-col">
            <div className="footer-col-title">Connect</div>
            <a href="mailto:ajaykumar022597@gmail.com">Email</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://upwork.com" target="_blank" rel="noreferrer">Upwork</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom container">
        <span>Built with care &mdash; Ajay Kumar &copy; {new Date().getFullYear()}</span>
        <span>Kitchener, Ontario, Canada</span>
      </div>
    </footer>
  )
}
