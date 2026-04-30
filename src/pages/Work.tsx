import { useReveal } from '../components/useReveal'
import './Work.css'

const projects = [
  {
    num: '01',
    name: 'SeniorCare Online Platform',
    period: 'Feb 2021 — May 2022',
    role: 'Lead Backend Engineer',
    problem: 'Manual trust verification processes, unreliable billing, and no automated QA — slowing down delivery and eroding user trust.',
    solution: 'Led Spring Boot API development, integrated Sterling background checks to automate trust verification, and built automated billing workflows. Ran QA cycles every sprint.',
    result: '75% fewer payment errors, 60% less manual screening time, 95% defect detection before production.',
    stack: ['Spring Boot','REST APIs','Sterling Integration','JUnit','Mockito','Agile/Scrum'],
    highlight: '75% fewer payment errors',
  },
  {
    num: '02',
    name: 'Payment Gateway Rescue',
    period: '2024',
    role: 'Freelance Engineer — Upwork',
    problem: 'A client\'s payment system was failing silently — losing transactions and causing significant revenue leakage. No one could pinpoint why.',
    solution: 'Deep-dived into the gateway integration, traced API call failures, identified timeout misconfigurations and retry-logic gaps. Rebuilt the affected microservices with proper error handling and observability.',
    result: '76% boost in successful transactions and direct revenue recovery. Client retained and expanded scope.',
    stack: ['Spring Boot','Payment APIs','Microservices','CloudWatch','Swagger','Postman'],
    highlight: '76% revenue recovery',
  },
  {
    num: '03',
    name: 'Membership & Billing Automation',
    period: 'Jan 2021 — May 2022 · NXPRO',
    role: 'Software Engineer',
    problem: 'Manual membership renewals were causing churn. No payment flexibility, no analytics on campaign ROI. Revenue was stagnant.',
    solution: 'Integrated Authorize.net and PayPal for multiple payment options. Built automated recurring billing engine. Connected Google Analytics to the admin dashboard for campaign visibility.',
    result: '55% increase in membership sales in 2 months. 30% improvement in campaign effectiveness.',
    stack: ['Node.js','Authorize.net','PayPal SDK','Google Analytics','MySQL','REST APIs'],
    highlight: '55% sales in 2 months',
  },
]

const experience = [
  {
    role: 'Software Engineer',
    company: 'Freelancer — Upwork',
    period: 'May 2024 — Present',
    type: 'Remote',
    bullets: [
      'Built Spring Boot microservices cutting backend response time by 35%',
      'Resolved critical payment gateway issues, boosting revenue by 76%',
      'Maintained 100% on-time delivery across all projects',
      'Authored client-facing technical documentation improving project transparency',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'NXPRO (Next Generation Professionals)',
    period: 'Jan 2021 — May 2022',
    type: 'Chandigarh, India',
    bullets: [
      'Integrated Authorize.net and PayPal for 60+ daily users',
      'Developed automated recurring billing — 55% membership growth in 2 months',
      'Integrated Google Analytics dashboard — 30% better campaign ROI',
      'Maintained 85%+ unit test coverage via code reviews and pair programming',
      'Earned 45% salary hike based on performance',
    ],
  },
  {
    role: 'Junior Software Developer',
    company: 'Lucrortech Inc.',
    period: 'Jun 2019 — Dec 2020',
    type: 'Chandigarh, India',
    bullets: [
      'Java backend development in Agile team — features delivered on-time every sprint',
      'Designed and tested REST APIs reducing QA cycles by 20%',
      'Sprint planning, standups, retrospectives — full Agile cycle ownership',
      'Code reviews improving team performance and maintainability',
    ],
  },
]

export default function Work() {
  const pageRef = useReveal() as React.RefObject<HTMLDivElement>

  return (
    <div ref={pageRef} className="work-page">

      <div className="page-header">
        <div className="container-text">
          <div className="label reveal">Selected Projects & Experience</div>
          <h1 className="reveal reveal-delay-1">
            Work that moved<br /><em>the needle.</em>
          </h1>
          <p className="page-header-sub reveal reveal-delay-2">
            Every project listed here has a measurable result. 
            I don't ship features — I solve problems.
          </p>
        </div>
      </div>

      {/* Projects */}
      <section className="work-section">
        <div className="container">
          <div className="section-head reveal">
            <div className="label">Projects</div>
            <h2>Problem &rarr; Solution &rarr; Result</h2>
          </div>
          <div className="projects-list">
            {projects.map((p) => (
              <div key={p.num} className="project-row reveal">
                <div className="project-top">
                  <div className="project-meta">
                    <span className="project-num">{p.num}</span>
                    <div>
                      <div className="project-name">{p.name}</div>
                      <div className="project-role">{p.role} &bull; {p.period}</div>
                    </div>
                  </div>
                  <div className="project-highlight">{p.highlight}</div>
                </div>
                <div className="project-psr">
                  <div className="psr-col">
                    <div className="psr-label">Problem</div>
                    <p>{p.problem}</p>
                  </div>
                  <div className="psr-col">
                    <div className="psr-label">Solution</div>
                    <p>{p.solution}</p>
                  </div>
                  <div className="psr-col psr-result">
                    <div className="psr-label">Result</div>
                    <p>{p.result}</p>
                  </div>
                </div>
                <div className="project-stack">
                  {p.stack.map(s => <span key={s} className="stack-pill">{s}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="exp-section">
        <div className="container">
          <div className="section-head reveal">
            <div className="label">Experience</div>
            <h2>Where I've been building.</h2>
          </div>
          <div className="exp-list">
            {experience.map((e, i) => (
              <div key={i} className="exp-row reveal">
                <div className="exp-left">
                  <div className="exp-role">{e.role}</div>
                  <div className="exp-company">{e.company}</div>
                  <div className="exp-meta">{e.period} &bull; {e.type}</div>
                </div>
                <div className="exp-right">
                  <ul className="exp-bullets">
                    {e.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="edu-section">
        <div className="container">
          <div className="section-head reveal">
            <div className="label">Education</div>
            <h2>Investing in the right knowledge.</h2>
          </div>
          <div className="edu-grid">
            <div className="edu-card reveal">
              <div className="edu-degree">Graduate Certificate in DevOps for Cloud Computing</div>
              <div className="edu-school">Lambton College &mdash; Toronto, Ontario, Canada</div>
              <div className="edu-date">Sept 2022 &mdash; April 2024</div>
              <p className="edu-note">
                Hands-on with AWS, Docker, Kubernetes, GitLab CI/CD, Jenkins, GitHub Actions. 
                Built and deployed real pipelines. Not just theory.
              </p>
            </div>
            <div className="edu-card reveal reveal-delay-1">
              <div className="edu-degree">Bachelor of Technology in Computer Science</div>
              <div className="edu-school">Deenbandhu Chotu Ram University of Science and Technology &mdash; Haryana, India</div>
              <div className="edu-date">Aug 2015 &mdash; May 2019</div>
              <p className="edu-note">
                Four years of foundations: algorithms, data structures, OOP, database systems, 
                software engineering principles.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
