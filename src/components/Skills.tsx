import { motion } from 'framer-motion'
import { SectionHeading } from './SectionHeading'
import { skillTags, skills } from '../data/resume'

export function Skills() {
  return (
    <section id="skills" className="section section--alt">
      <div className="container">
        <SectionHeading
          eyebrow="Skills"
          title="Tools I use to ship polished UI"
          description="From component libraries to motion — focused on scalable frontend systems."
        />

        <div className="skills__grid">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="glass-card skill-bar"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              whileHover={{ y: -6 }}
            >
              <div className="skill-bar__header">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="skill-bar__track">
                <motion.div
                  className="skill-bar__fill"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 + index * 0.04, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="skills__tags"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {skillTags.map((tag, index) => (
            <motion.span
              key={tag}
              className="tag tag--large"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
              whileHover={{ scale: 1.06, y: -3 }}
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
