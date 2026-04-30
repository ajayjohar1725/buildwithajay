import { useReveal } from '../components/useReveal'
import './Mindset.css'

const principles = [
  {
    num: '01',
    title: 'Find the root cause, not the symptom.',
    body: 'When a system breaks or a metric drops, I don\'t patch the surface and move on. I trace the call stack, profile the query, read the logs, reproduce the issue. Understanding the real cause is the only way to actually fix it — and prevent it from happening again.',
    example: 'Identified and resolved API bottlenecks early across multiple projects, cutting QA cycles by 20%.',
  },
  {
    num: '02',
    title: 'Architecture before implementation.',
    body: 'Before writing a single line, I think about how systems talk to each other. Microservices, event-driven patterns, data flow, failure modes — designing for scale and maintainability isn\'t optional. Retrofitting good architecture into bad code is significantly more expensive than getting it right the first time.',
    example: 'Spring Boot microservices architecture I designed cut backend response time by 35%.',
  },
  {
    num: '03',
    title: 'Small, tested, composable pieces.',
    body: 'TDD, 85%+ unit test coverage, code reviews — not because it\'s policy, but because well-tested code means you can ship confidently at 4pm on a Friday. I write tests that tell the story of what the code is supposed to do. Good tests are documentation.',
    example: 'Maintained 85%+ unit test coverage at NXPRO, catching defects before they reached production.',
  },
  {
    num: '04',
    title: 'Performance is a feature.',
    body: 'A 35% reduction in API response time isn\'t just a benchmark improvement — it\'s users who didn\'t leave, transactions that didn\'t time out, revenue that didn\'t evaporate. I profile before optimizing, measure after, and treat performance as something you build in, not bolt on.',
    example: 'Rebuilt payment gateway integration reducing transaction failures by 76% in one freelance engagement.',
  },
  {
    num: '05',
    title: 'Communication is part of shipping.',
    body: 'Code that works but can\'t be understood, maintained, or explained isn\'t done. I write Swagger docs, clear PR descriptions, and client-facing documentation. I believe a developer who can explain their decisions is twice as valuable as one who can\'t.',
    example: 'Authored technical documentation for freelance clients that increased transparency and long-term trust.',
  },
  {
    num: '06',
    title: 'Ownership doesn\'t stop at the ticket.',
    body: 'When I pick up a task, I\'m responsible for it end-to-end — design, implementation, tests, deployment, monitoring. I don\'t throw things over the wall. If something breaks in production, I want to be the person who already anticipated that scenario and built a safeguard.',
    example: '100% on-time delivery record across all freelance projects, with zero escalations.',
  },
]

export default function Mindset() {
  const pageRef = useReveal() as React.RefObject<HTMLDivElement>

  return (
    <div ref={pageRef} className="mindset-page">

      <div className="page-header">
        <div className="container-text">
          <div className="label reveal">How I think</div>
          <h1 className="reveal reveal-delay-1">
            My developer<br /><em>mindset.</em>
          </h1>
          <p className="page-header-sub reveal reveal-delay-2">
            Skills age. Frameworks change. Mindset compounds. 
            Here's how I approach software engineering beyond the syntax.
          </p>
        </div>
      </div>

      <section className="mindset-section">
        <div className="container">
          <div className="principles-list">
            {principles.map((p) => (
              <div key={p.num} className="principle reveal">
                <div className="principle-left">
                  <div className="principle-num">{p.num}</div>
                </div>
                <div className="principle-right">
                  <h3 className="principle-title">{p.title}</h3>
                  <p className="principle-body">{p.body}</p>
                  <div className="principle-example">
                    <span className="example-label">Real example</span>
                    {p.example}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The commitment */}
      <section className="commitment-section">
        <div className="container-text">
          <div className="commitment-card reveal">
            <div className="label" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              What you're actually getting
            </div>
            <h2 className="reveal reveal-delay-1">
              Not just a developer.<br />A long-term partner.
            </h2>
            <p className="reveal reveal-delay-2">
              I'm not building a resume of companies. I'm building a career. 
              When I join a team, I'm in it — I learn the codebase, understand the business, 
              invest in the people, and care about outcomes beyond my own tickets.
            </p>
            <p className="reveal reveal-delay-3">
              I know the Canadian job market is competitive. I know companies receive dozens 
              of applications for every role. So let me be direct: I will outwork most candidates, 
              I'll ramp up faster than expected, and I'll stay longer than most. 
              I want a home, not a stopover.
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}
