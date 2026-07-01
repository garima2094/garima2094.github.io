import { profile } from '../data/resume'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>
          © {year} {profile.name}. Crafted with React, TypeScript & Framer Motion.
        </p>
        <a href="#home">Back to top</a>
      </div>
    </footer>
  )
}
