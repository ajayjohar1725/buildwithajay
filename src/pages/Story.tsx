import { useReveal } from '../components/useReveal'
import './Story.css'

export default function Story() {
  const pageRef = useReveal() as React.RefObject<HTMLDivElement>

  return (
    <div ref={pageRef} className="story-page">

      {/* Page header */}
      <div className="page-header">
        <div className="container-text">
          <div className="label reveal">My Journey</div>
          <h1 className="reveal reveal-delay-1">
            A story about<br /><em>not giving up.</em>
          </h1>
          <p className="page-header-sub reveal reveal-delay-2">
            This isn't a resume. It's the full picture &mdash; the ambition, 
            the grind, the setbacks, and what they taught me.
          </p>
        </div>
      </div>

      <div className="story-body container-text">

        {/* Chapter 1 */}
        <div className="chapter reveal">
          <div className="chapter-marker">
            <span className="chapter-num">01</span>
            <span className="chapter-title">Where it began</span>
            <span className="chapter-date">2015 &mdash; 2019</span>
          </div>
          <h2>Murthal, Haryana.<br />A kid with a laptop and big questions.</h2>
          <p>
            I grew up in a small town in Haryana, India. Not a tech hub. Not a startup city. 
            Just a regular place where most people followed a predictable path. 
            I chose a different one &mdash; a Bachelor's in Computer Science at Deenbandhu 
            Chotu Ram University of Science and Technology.
          </p>
          <p>
            I remember the first time I made something on a screen actually <em>do something</em>. 
            It wasn't a complex program. It was a loop that printed numbers. But it felt like magic. 
            That feeling never went away.
          </p>
          <p>
            I spent four years learning algorithms, data structures, OOP &mdash; and more 
            importantly, learning how to think like a problem-solver. I didn't just want to 
            pass exams. I wanted to understand how things <em>actually</em> worked.
          </p>
        </div>

        <div className="chapter-divider reveal" />

        {/* Chapter 2 */}
        <div className="chapter reveal">
          <div className="chapter-marker">
            <span className="chapter-num">02</span>
            <span className="chapter-title">First steps</span>
            <span className="chapter-date">2019 &mdash; 2022</span>
          </div>
          <h2>Chandigarh. Learning to ship real software.</h2>
          <p>
            My first job as a Junior Developer at Lucrortech Inc. was humbling. 
            The gap between university code and production code is enormous. 
            I learned that quickly. I also learned to close that gap quickly.
          </p>
          <p>
            I was part of an Agile team shipping Java features across sprints. 
            I didn't just write code &mdash; I joined standups, reviewed PRs, participated in retros. 
            I designed REST APIs that reduced QA cycles by 20% through early issue detection. 
            I wasn't just executing tickets. I was thinking.
          </p>
          <p>
            Then came NXPRO. A bigger scope, real payment systems, real users. 
            I integrated Authorize.net and PayPal for 60+ daily transactions. 
            I built automated recurring billing that increased membership sales by 55% in two months. 
            For that, I earned a <strong>45% salary hike</strong> &mdash; not through negotiation, 
            but because my performance made it obvious.
          </p>
          <blockquote className="story-quote">
            "That salary hike didn't just mean more money. It meant I was on the right track."
          </blockquote>
        </div>

        <div className="chapter-divider reveal" />

        {/* Chapter 3 */}
        <div className="chapter reveal">
          <div className="chapter-marker">
            <span className="chapter-num">03</span>
            <span className="chapter-title">The leap</span>
            <span className="chapter-date">2022 &mdash; 2024</span>
          </div>
          <h2>Canada. The biggest bet I ever made on myself.</h2>
          <p>
            In September 2022, I packed up my life and moved to Toronto to pursue a 
            Graduate Certificate in DevOps for Cloud Computing at Lambton College. 
            This wasn't an easy decision. It was expensive, uncertain, and terrifying.
          </p>
          <p>
            But I had a clear reason: I wanted to operate at a higher level. 
            I wanted to understand cloud infrastructure, CI/CD pipelines, containerization &mdash; 
            the engineering practices that scale companies. I didn't just want to write code. 
            I wanted to understand the full delivery lifecycle.
          </p>
          <p>
            Settling in Canada is genuinely hard. The cost of living, finding housing, building 
            a network from zero, navigating a new culture, managing finances while studying &mdash; 
            none of it is talked about enough. It tests you in ways that no interview question can.
          </p>
          <p>
            I graduated in April 2024 having gained hands-on experience with AWS, Docker, 
            Kubernetes, GitLab CI/CD, and Jenkins. I didn't just study these &mdash; 
            I built pipelines with them, deployed them, broke them, fixed them.
          </p>
          <blockquote className="story-quote">
            "The hardest part wasn't the coursework. It was proving to myself 
            that I belonged here."
          </blockquote>
        </div>

        <div className="chapter-divider reveal" />

        {/* Chapter 4 */}
        <div className="chapter reveal">
          <div className="chapter-marker">
            <span className="chapter-num">04</span>
            <span className="chapter-title">Right now</span>
            <span className="chapter-date">2024 &mdash; Present</span>
          </div>
          <h2>Kitchener. Freelancing, grinding, and looking forward.</h2>
          <p>
            After graduating, the Canadian job market was &mdash; honestly &mdash; brutal. 
            Hundreds of applications. Many silences. A few interviews. The gap between 
            "qualified on paper" and "getting the callback" is real, especially as a newcomer.
          </p>
          <p>
            I didn't sit still. I started freelancing on Upwork. I took on Spring Boot 
            microservices projects, rescued a broken payment gateway (76% revenue recovery), 
            and maintained a 100% on-time delivery record. I was building my proof of work, 
            one project at a time.
          </p>
          <p>
            I'm not bitter about the job search struggle. I understand it. 
            Companies take a risk on every hire. What I want to communicate to every 
            hiring manager who reads this: I am that risk worth taking.
          </p>
          <p>
            I'm not looking for my next stepping stone. I'm looking for the company 
            I can grow with, contribute to genuinely, and stay at long-term. 
            I want to put down roots &mdash; professionally and personally &mdash; in Canada.
          </p>
          <blockquote className="story-quote story-quote-accent">
            "Give me one real chance to show up. That's all I'm asking for."
          </blockquote>
        </div>

        <div className="chapter-divider reveal" />

        {/* What drives me */}
        <div className="chapter reveal">
          <div className="chapter-marker">
            <span className="chapter-num">05</span>
            <span className="chapter-title">What drives me</span>
          </div>
          <h2>Why I care so much.</h2>
          <p>
            I come from a background where nothing was handed to you. Every step forward 
            required intention. That built a work ethic I can't turn off.
          </p>
          <p>
            I genuinely love software engineering &mdash; the craft of it. 
            There's something deeply satisfying about taking a vague problem, 
            breaking it into parts, designing a clean solution, seeing it deployed, 
            and knowing it's running reliably for real users.
          </p>
          <p>
            I'm also deeply aware that I'm in a privileged position. 
            Many people from my hometown never had this opportunity. 
            That's not lost on me. It makes me take it more seriously, 
            not less.
          </p>
          <div className="story-values">
            <div className="value-item reveal">
              <div className="value-num">01</div>
              <div className="value-text">
                <strong>Consistency over bursts.</strong> I show up every day. 
                Not just when it's exciting.
              </div>
            </div>
            <div className="value-item reveal reveal-delay-1">
              <div className="value-num">02</div>
              <div className="value-text">
                <strong>Long-term thinking.</strong> I'm not building a portfolio of companies. 
                I'm building a career.
              </div>
            </div>
            <div className="value-item reveal reveal-delay-2">
              <div className="value-num">03</div>
              <div className="value-text">
                <strong>Ownership.</strong> When something breaks at 3am, I want to be the 
                person who already thought about that scenario.
              </div>
            </div>
            <div className="value-item reveal reveal-delay-3">
              <div className="value-num">04</div>
              <div className="value-text">
                <strong>Gratitude.</strong> I don't take opportunities for granted. 
                Every one I get, I make count.
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
