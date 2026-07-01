import { motion } from 'framer-motion'
import { SectionHeading } from './SectionHeading'
import { certifications, languages, profile } from '../data/resume'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="About Me"
          title="Building interfaces with intent"
          description="I blend engineering discipline with creative frontend craft."
        />

        <div className="about__grid">
          <motion.div
            className="glass-card about__story"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
          >
            <motion.p variants={item}>{profile.summary}</motion.p>

            <motion.ul className="highlight-list" variants={item}>
              {profile.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            className="about__side"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card stat-card">
              <span className="stat-card__value">8+</span>
              <span className="stat-card__label">Years Experience</span>
            </div>
            <div className="glass-card stat-card">
              <span className="stat-card__value">50%</span>
              <span className="stat-card__label">Performance Gains</span>
            </div>
            <div className="glass-card stat-card">
              <span className="stat-card__value">100%</span>
              <span className="stat-card__label">Design Fidelity</span>
            </div>

            <div className="glass-card about__extras">
              <h3>Certifications</h3>
              <div className="tag-row">
                {certifications.map((cert) => (
                  <span key={cert} className="tag">
                    {cert}
                  </span>
                ))}
              </div>

              <h3>Languages</h3>
              <div className="tag-row">
                {languages.map((lang) => (
                  <span key={lang} className="tag tag--muted">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
