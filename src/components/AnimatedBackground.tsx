import { motion } from 'framer-motion'

const orbs = [
  { size: 420, x: '10%', y: '15%', color: 'rgba(78, 205, 196, 0.18)', duration: 22 },
  { size: 360, x: '75%', y: '10%', color: 'rgba(255, 107, 107, 0.14)', duration: 26 },
  { size: 300, x: '60%', y: '65%', color: 'rgba(139, 92, 246, 0.12)', duration: 20 },
  { size: 240, x: '20%', y: '70%', color: 'rgba(78, 205, 196, 0.1)', duration: 24 },
]

export function AnimatedBackground() {
  return (
    <div className="animated-bg" aria-hidden="true">
      <div className="grid-overlay" />
      {orbs.map((orb, index) => (
        <motion.div
          key={index}
          className="orb"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
          }}
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -30, 20, 0],
            scale: [1, 1.08, 0.96, 1],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
