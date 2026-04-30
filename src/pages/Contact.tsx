import { useReveal } from '../components/useReveal'
import './Contact.css'

export default function Contact() {
  const pageRef = useReveal() as React.RefObject<HTMLDivElement>

  return (
    <div ref={pageRef} className="contact-page">

      <div className="page-header">
        <div className="container-text">
          <div className="label reveal">Get in touch</div>
          <h1 className="reveal reveal-delay-1">
            Let's start a<br /><em>conversation.</em>
          </h1>
          <p className="page-header-sub reveal reveal-delay-2">
            I'm actively looking for a full-time software engineering role 
            in Canada. If you think there might be a fit &mdash; even a potential one &mdash; 
            I'd love to hear from you.
          </p>
        </div>
      </div>

      <section className="contact-section">
        <div className="container contact-grid">

          <div className="contact-left">
            <div className="label reveal">What I'm looking for</div>
            <div className="contact-seeking reveal reveal-delay-1">
              <p>
                A full-time role on a team that cares about code quality, 
                engineering culture, and long-term thinking. I'm not looking 
                for my next stepping stone &mdash; I'm looking for where 
                I can put down roots and do my best work.
              </p>
            </div>

            <div className="contact-details reveal reveal-delay-2">
              <div className="contact-detail-row">
                <div className="contact-detail-label">Status</div>
                <div className="contact-detail-val">
                  <span className="status-dot" />
                  Open to opportunities
                </div>
              </div>
              <div className="contact-detail-row">
                <div className="contact-detail-label">Location</div>
                <div className="contact-detail-val">Kitchener, Ontario, Canada</div>
              </div>
              <div className="contact-detail-row">
                <div className="contact-detail-label">Work type</div>
                <div className="contact-detail-val">Remote / Hybrid / On-site</div>
              </div>
              <div className="contact-detail-row">
                <div className="contact-detail-label">Current</div>
                <div className="contact-detail-val">Freelancing on Upwork</div>
              </div>
            </div>

            <div className="contact-links reveal reveal-delay-3">
              <a href="mailto:ajaykumar022597@gmail.com" className="contact-link-row">
                <div className="contact-link-label">Email</div>
                <div className="contact-link-val">ajaykumar022597@gmail.com</div>
                <div className="contact-link-arrow">&#8594;</div>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="contact-link-row">
                <div className="contact-link-label">LinkedIn</div>
                <div className="contact-link-val">linkedin.com/in/ajay-kumar</div>
                <div className="contact-link-arrow">&#8594;</div>
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="contact-link-row">
                <div className="contact-link-label">GitHub</div>
                <div className="contact-link-val">github.com/ajay-kumar</div>
                <div className="contact-link-arrow">&#8594;</div>
              </a>
            </div>
          </div>

          <div className="contact-right">
            <div className="contact-card reveal reveal-delay-1">
              <div className="contact-card-head">
                <div className="av-circle">AK</div>
                <div>
                  <div className="av-name">Ajay Kumar</div>
                  <div className="av-role">Software Engineer</div>
                </div>
              </div>
              <div className="contact-card-body">
                <p>
                  I respond to every genuine message. Whether you have a role, 
                  a project, or just want to connect &mdash; send me a note.
                </p>
                <p>
                  I can usually get back within 24 hours.
                </p>
              </div>
              <a href="mailto:ajaykumar022597@gmail.com" className="contact-email-btn">
                Send me an email &#8594;
              </a>
            </div>

            <div className="quick-facts reveal reveal-delay-2">
              <div className="quick-facts-title">Quick facts</div>
              <div className="quick-fact">
                <span className="qf-icon">&#10003;</span>
                <span>5+ years full-stack engineering</span>
              </div>
              <div className="quick-fact">
                <span className="qf-icon">&#10003;</span>
                <span>Spring Boot, Node.js, React, Angular</span>
              </div>
              <div className="quick-fact">
                <span className="qf-icon">&#10003;</span>
                <span>AWS, Docker, Kubernetes, CI/CD</span>
              </div>
              <div className="quick-fact">
                <span className="qf-icon">&#10003;</span>
                <span>Canadian permanent residency / work authorization</span>
              </div>
              <div className="quick-fact">
                <span className="qf-icon">&#10003;</span>
                <span>100% on-time delivery track record</span>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}
