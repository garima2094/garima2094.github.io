import { motion } from 'framer-motion'
import { HiOutlineMail, HiOutlineLocationMarker } from 'react-icons/hi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SectionHeading } from './SectionHeading'
import { profile } from '../data/resume'

export function Contact() {
  return (
    <section id="contact" className="section section--alt">
      <div className="container">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something remarkable"
          description="Open to frontend roles, freelance UI work, and collaborations."
        />

        <motion.div
          className="contact__panel glass-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="contact__info">
            <a href={`mailto:${profile.email}`} className="contact__item">
              <HiOutlineMail />
              <span>{profile.email}</span>
            </a>
            <span className="contact__item">
              <HiOutlineLocationMarker />
              <span>{profile.location}</span>
            </span>
            <a href={profile.github} target="_blank" rel="noreferrer" className="contact__item">
              <FaGithub />
              <span>github.com/garima2094</span>
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="contact__item">
              <FaLinkedin />
              <span>linkedin.com/in/jain-garima</span>
            </a>
          </div>

          <div className="contact__cta">
            <p>
              Ready to bring motion, precision, and scalable React architecture to your next product.
            </p>
            <a href={`mailto:${profile.email}?subject=Portfolio Inquiry`} className="btn btn--primary">
              Send an Email
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
