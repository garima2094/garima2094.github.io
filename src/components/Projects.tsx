import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiOutlinePlay, HiOutlineSparkles } from 'react-icons/hi'
import { SectionHeading } from './SectionHeading'
import { LiveDemo } from './LiveDemo'
import { projects } from '../data/projects'

export function Projects() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeProject = projects[activeIndex]

  return (
    <section id="projects" className="section section--alt">
      <div className="container">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work & experiments"
          description="Interactive demos built to showcase real frontend patterns — task boards, dashboards, and catalog UIs."
        />

        <div className="projects__grid">
          {projects.map((project, index) => (
            <motion.button
              key={project.title}
              type="button"
              className={`glass-card project-card project-card--selectable ${
                activeIndex === index ? 'project-card--active' : ''
              }`}
              onClick={() => setActiveIndex(index)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
            >
              <div className="project-card__glow" />
              <div className="project-card__index">{String(index + 1).padStart(2, '0')}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul className="project-card__highlights">
                {project.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="tag-row">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              <span className="project-card__cta">
                {!project.demo ? (
                  <>View details</>
                ) : activeIndex === index ? (
                  <>
                    <HiOutlineSparkles /> Live demo active
                  </>
                ) : (
                  <>
                    <HiOutlinePlay /> Try live demo
                  </>
                )}
              </span>
            </motion.button>
          ))}
        </div>

        <motion.div
          className="live-demo-panel glass-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="live-demo-panel__header">
            <div>
              <span className="live-demo-panel__badge">Interactive Demo</span>
              <h3>{activeProject.title}</h3>
              <p>Click cards above to switch demos. Everything runs live in your browser.</p>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.demo ?? activeProject.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
            >
              {activeProject.demo ? (
                <LiveDemo demoId={activeProject.demo} />
              ) : (
                <div className="demo demo--static">
                  <div className="static-demo">
                    <span className="static-demo__icon">📊</span>
                    <h4>Academic Research Project</h4>
                    <p>
                      Built during MCA at RGPV — processed large-scale Twitter datasets with Hadoop
                      to classify sentiment and visualize public opinion trends.
                    </p>
                    <div className="static-demo__stats">
                      <div>
                        <strong>Hadoop</strong>
                        <span>Distributed processing</span>
                      </div>
                      <div>
                        <strong>MapReduce</strong>
                        <span>Batch analysis</span>
                      </div>
                      <div>
                        <strong>NLP</strong>
                        <span>Sentiment scoring</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
