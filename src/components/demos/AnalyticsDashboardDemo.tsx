import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { HiOutlineTrendingDown, HiOutlineTrendingUp } from 'react-icons/hi'

interface Metric {
  label: string
  value: number
  suffix: string
  trend: number
  color: string
}

interface Activity {
  id: string
  text: string
  time: string
}

const baseMetrics: Metric[] = [
  { label: 'Active Users', value: 1284, suffix: '', trend: 12.4, color: '#4ecdc4' },
  { label: 'Conversion', value: 4.8, suffix: '%', trend: 0.6, color: '#ff6b6b' },
  { label: 'Page Load', value: 1.2, suffix: 's', trend: -18, color: '#8b5cf6' },
  { label: 'Uptime', value: 99.9, suffix: '%', trend: 0.1, color: '#fbbf24' },
]

const chartData = [
  { day: 'Mon', value: 62 },
  { day: 'Tue', value: 74 },
  { day: 'Wed', value: 58 },
  { day: 'Thu', value: 88 },
  { day: 'Fri', value: 91 },
  { day: 'Sat', value: 67 },
  { day: 'Sun', value: 79 },
]

const activityPool = [
  'New user signed up from Indore',
  'Dashboard widget re-render optimized',
  'API response cached — 120ms saved',
  'Mobile session spike detected',
  'Error boundary caught edge case',
  'Component bundle size reduced 8%',
]

function randomActivity(): Activity {
  return {
    id: crypto.randomUUID(),
    text: activityPool[Math.floor(Math.random() * activityPool.length)],
    time: 'Just now',
  }
}

export function AnalyticsDashboardDemo() {
  const [metrics, setMetrics] = useState(baseMetrics)
  const [activities, setActivities] = useState<Activity[]>([
    { id: '1', text: activityPool[0], time: '2m ago' },
    { id: '2', text: activityPool[2], time: '5m ago' },
    { id: '3', text: activityPool[4], time: '8m ago' },
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics((prev) =>
        prev.map((metric) => ({
          ...metric,
          value:
            metric.suffix === '%'
              ? Math.min(100, +(metric.value + (Math.random() - 0.4) * 0.3).toFixed(1))
              : metric.suffix === 's'
                ? Math.max(0.8, +(metric.value + (Math.random() - 0.5) * 0.1).toFixed(1))
                : Math.round(metric.value + (Math.random() - 0.45) * 40),
        })),
      )

      setActivities((prev) => [randomActivity(), ...prev.slice(0, 4)])
    }, 3500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="demo demo--analytics">
      <div className="metrics-grid">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            className="metric-card"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
          >
            <span className="metric-card__label">{metric.label}</span>
            <motion.span
              key={metric.value}
              className="metric-card__value"
              style={{ color: metric.color }}
              initial={{ opacity: 0.5, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {metric.value}
              {metric.suffix}
            </motion.span>
            <span className={`metric-card__trend ${metric.trend >= 0 ? 'up' : 'down'}`}>
              {metric.trend >= 0 ? <HiOutlineTrendingUp /> : <HiOutlineTrendingDown />}
              {Math.abs(metric.trend)}%
            </span>
          </motion.div>
        ))}
      </div>

      <div className="analytics-split">
        <div className="chart-panel">
          <h4>Weekly Traffic</h4>
          <div className="chart-bars">
            {chartData.map((bar, index) => (
              <div key={bar.day} className="chart-bar-wrap">
                <motion.div
                  className="chart-bar"
                  initial={{ height: 0 }}
                  animate={{ height: `${bar.value}%` }}
                  transition={{ delay: 0.2 + index * 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                />
                <span>{bar.day}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="activity-panel">
          <h4>Live Activity</h4>
          <ul className="activity-list">
            {activities.map((item) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <span className="activity-dot" />
                <div>
                  <p>{item.text}</p>
                  <time>{item.time}</time>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
