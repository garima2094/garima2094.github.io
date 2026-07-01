import { motion } from 'framer-motion'
import { SectionHeading } from './SectionHeading'
import { experience } from '../data/resume'

export function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've built & led"
          description="Eight years across enterprise, CMS, commerce, and greenfield React products."
        />

        <div className="timeline">
          {experience.map((job, index) => (
            <motion.article
              key={`${job.company}-${job.period}`}
              className="timeline__item glass-card"
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              whileHover={{ scale: 1.01 }}
            >
              <div className="timeline__marker">
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                />
              </div>

              <div className="timeline__content">
                <span className="timeline__period">{job.period}</span>
                <h3>{job.role}</h3>
                <p className="timeline__company">{job.company}</p>
                <p className="timeline__description">{job.description}</p>
                <ul>
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
