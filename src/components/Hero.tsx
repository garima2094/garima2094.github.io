import { motion } from 'framer-motion'
import { HiOutlineMail, HiOutlineLocationMarker } from 'react-icons/hi'
import { profile } from '../data/resume'

const roles = ['Frontend Developer', 'React Engineer', 'UI Craftsman', 'Team Lead']

export function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="container hero__grid">
        <div className="hero__content">
          <motion.span
            className="hero__badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Available for opportunities · {profile.experience}
          </motion.span>

          <motion.p
            className="hero__greeting"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Hello, I&apos;m
          </motion.p>

          <motion.h1
            className="hero__name"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            {profile.name.split(' ')[0]}
            <span> {profile.name.split(' ')[1]}</span>
          </motion.h1>

          <motion.div
            className="hero__roles"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.6 }}
          >
            {roles.map((role, index) => (
              <motion.span
                key={role}
                className="role-chip"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.08 }}
                whileHover={{ y: -4, scale: 1.03 }}
              >
                {role}
              </motion.span>
            ))}
          </motion.div>

          <motion.p
            className="hero__subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.6 }}
          >
            {profile.title} crafting motion-rich, accessible React experiences for enterprise
            products — from CMS platforms to commerce ERP systems.
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <a href="#projects" className="btn btn--primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn--ghost">
              Get In Touch
            </a>
          </motion.div>

          <motion.div
            className="hero__meta"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.05, duration: 0.6 }}
          >
            <span>
              <HiOutlineLocationMarker /> {profile.location}
            </span>
            <span>
              <HiOutlineMail /> {profile.email}
            </span>
          </motion.div>
        </div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.85, rotate: -6 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.5, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero-card">
            <div className="hero-card__glow" />
            <div className="hero-card__header">
              <span className="dot dot--red" />
              <span className="dot dot--yellow" />
              <span className="dot dot--green" />
              <span className="hero-card__filename">portfolio.tsx</span>
            </div>
            <pre className="hero-card__code">
              <code>{`const developer = {
  name: "${profile.name}",
  role: "${profile.tagline}",
  stack: ["React", "TypeScript"],
  passion: "animated UI",
  experience: "${profile.experience}",
};

export default developer;`}</code>
            </pre>
          </div>

          <motion.span
            className="hero-float hero-float--one"
            animate={{ y: [0, -10, 0], x: [0, 4, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            React
          </motion.span>
          <motion.span
            className="hero-float hero-float--two"
            animate={{ y: [0, 8, 0], x: [0, -4, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            Motion
          </motion.span>
          <motion.span
            className="hero-float hero-float--three"
            animate={{ y: [0, -6, 0], x: [0, 3, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            UI/UX
          </motion.span>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="scroll-indicator"
        aria-label="Scroll to about section"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
      >
        <span />
      </motion.a>
    </section>
  )
}
