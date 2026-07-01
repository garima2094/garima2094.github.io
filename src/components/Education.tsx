import { motion } from 'framer-motion'
import { SectionHeading } from './SectionHeading'
import { education } from '../data/resume'

export function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Education"
          title="Academic foundation"
          description="Strong computer science background with top academic performance."
        />

        <div className="education__grid">
          {education.map((item, index) => (
            <motion.div
              key={item.degree}
              className="glass-card education-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              whileHover={{ y: -6 }}
            >
              <h3>{item.degree}</h3>
              <p>{item.school}</p>
              <span className="education-card__detail">{item.detail}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
