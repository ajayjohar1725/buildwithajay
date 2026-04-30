import { useReveal } from '../components/useReveal'
import './Life.css'

const photoSlots = [
  { caption: 'Golden hour somewhere in Ontario', aspect: 'tall' },
  { caption: 'Chandigarh, where it all started', aspect: 'wide' },
  { caption: 'The view from Lambton College days', aspect: 'square' },
  { caption: 'Weekend hiking — Ontario trails', aspect: 'square' },
  { caption: 'Toronto skyline moments', aspect: 'wide' },
  { caption: 'Home-cooked dal makhani — took 3 attempts to get right', aspect: 'square' },
]

export default function Life() {
  const pageRef = useReveal() as React.RefObject<HTMLDivElement>

  return (
    <div ref={pageRef} className="life-page">

      <div className="page-header">
        <div className="container-text">
          <div className="label reveal">Beyond the code</div>
          <h1 className="reveal reveal-delay-1">
            The human<br /><em>behind the engineer.</em>
          </h1>
          <p className="page-header-sub reveal reveal-delay-2">
            I believe the best engineers bring their whole self to work. 
            Curiosity, creativity, and life experience all show up in the code.
          </p>
        </div>
      </div>

      {/* Photography */}
      <section className="life-section">
        <div className="container">
          <div className="life-section-head reveal">
            <div className="label">Photography</div>
            <h2>Frames are like functions &mdash; capture exactly what matters.</h2>
            <p>
              Photography taught me to see what others miss. The same attention to detail 
              I bring to a code review, I bring to finding the right light or angle. 
              Add your photos here &mdash; each one tells part of your story.
            </p>
          </div>

          <div className="photo-grid">
            {photoSlots.map((slot, i) => (
              <div key={i} className={`photo-slot photo-slot-${slot.aspect} reveal`} style={{ transitionDelay: `${i * 0.06}s` }}>
                <div className="photo-placeholder">
                  <div className="photo-placeholder-icon">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <circle cx="12" cy="12" r="3" />
                      <path d="M8 5l1-2h6l1 2" />
                    </svg>
                  </div>
                  <div className="photo-placeholder-text">Add your photo</div>
                </div>
                <div className="photo-caption">{slot.caption}</div>
              </div>
            ))}
          </div>

          <div className="photo-note reveal">
            <strong>How to add photos:</strong> Place your images in the <code>public/photos/</code> folder 
            and replace the placeholder divs in <code>src/pages/Life.tsx</code> with{' '}
            <code>&lt;img src="/photos/your-image.jpg" alt="..." /&gt;</code>
          </div>
        </div>
      </section>

      {/* Cooking */}
      <section className="life-section life-section-alt">
        <div className="container">
          <div className="life-section-head reveal">
            <div className="label">Cooking</div>
            <h2>Debugging in real time.</h2>
            <p>
              Cooking is the closest thing to programming outside of programming. 
              You smell the issue, adjust the variable (spice, heat, timing), and iterate 
              until it's right. No stack trace, but the feedback loop is immediate.
            </p>
          </div>

          <div className="cooking-grid">
            <div className="cooking-card reveal">
              <div className="cooking-emoji">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <path d="M3 11l19-9-9 19-2-8-8-2z" />
                </svg>
              </div>
              <div>
                <div className="cooking-name">Punjabi Dal Makhani</div>
                <p className="cooking-story">
                  Slow-cooked overnight. The kind of patience that builds both great lentils 
                  and great software. My grandmother's recipe, now adapted for a Canadian kitchen 
                  with different spice brands.
                </p>
              </div>
            </div>
            <div className="cooking-card reveal reveal-delay-1">
              <div className="cooking-emoji">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v10M7 12h10" />
                </svg>
              </div>
              <div>
                <div className="cooking-name">Indo-Canadian Fusion</div>
                <p className="cooking-story">
                  Living in Canada changed how I cook — maple syrup found its way into a marinade, 
                  local produce replaced imported spices. Just like working globally changed 
                  how I approach software.
                </p>
              </div>
            </div>
            <div className="cooking-card reveal reveal-delay-2">
              <div className="cooking-emoji">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <path d="M18 8h1a4 4 0 010 8h-1" />
                  <path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" />
                  <line x1="6" y1="1" x2="6" y2="4" />
                  <line x1="10" y1="1" x2="10" y2="4" />
                  <line x1="14" y1="1" x2="14" y2="4" />
                </svg>
              </div>
              <div>
                <div className="cooking-name">Morning Pour-Over Ritual</div>
                <p className="cooking-story">
                  Before every deep work session. Precise water temperature, consistent bloom time, 
                  no shortcuts. The kind of ritual that puts your mind into a focused, methodical 
                  state — exactly what good engineering requires.
                </p>
              </div>
            </div>
            <div className="cooking-card reveal reveal-delay-3">
              <div className="cooking-emoji">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <path d="M12 2a10 10 0 110 20 10 10 0 010-20z" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <div>
                <div className="cooking-name">Saturday Experiments</div>
                <p className="cooking-story">
                  Every Saturday is a new branch. Some PRs get merged to dinner. 
                  Others get reverted and replaced with takeout. Both outcomes 
                  teach you something.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outside the screen */}
      <section className="life-section">
        <div className="container">
          <div className="life-section-head reveal">
            <div className="label">Outside the screen</div>
            <h2>What keeps me grounded.</h2>
          </div>
          <div className="life-list">
            <div className="life-item reveal">
              <div className="life-item-title">Walking new cities</div>
              <p>
                Moving to Canada meant exploring everything fresh &mdash; neighbourhoods, trails, 
                farmer's markets. Walking without a destination is how I decompress and 
                come back to the keyboard with new clarity.
              </p>
            </div>
            <div className="life-item reveal reveal-delay-1">
              <div className="life-item-title">Reading on systems &amp; people</div>
              <p>
                I read about distributed systems, but also about leadership, psychology, and 
                how teams function. The best engineers understand people as well as they 
                understand computers.
              </p>
            </div>
            <div className="life-item reveal reveal-delay-2">
              <div className="life-item-title">Staying connected to home</div>
              <p>
                Video calls with family in Haryana, cooking the same dishes my mother makes, 
                celebrating festivals in a foreign country. Being away taught me the value 
                of everything I grew up with.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
