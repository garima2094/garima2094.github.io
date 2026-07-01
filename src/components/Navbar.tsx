import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { navLinks } from '../data/resume'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <motion.header
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container navbar__inner">
        <button className="logo" onClick={() => scrollTo('home')} aria-label="Go to home">
          <span className="logo__mark">GJ</span>
          <span className="logo__text">Garima Jain</span>
        </button>

        <nav className={`nav-links ${menuOpen ? 'nav-links--open' : ''}`}>
          {navLinks.map((link, index) => (
            <motion.button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              {link.label}
            </motion.button>
          ))}
        </nav>

        <button
          className={`menu-toggle ${menuOpen ? 'menu-toggle--open' : ''}`}
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </motion.header>
  )
}
