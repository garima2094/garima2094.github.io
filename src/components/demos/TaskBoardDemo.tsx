import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { HiOutlinePlus, HiOutlineTrash } from 'react-icons/hi'

type Priority = 'low' | 'medium' | 'high'
type Column = 'todo' | 'progress' | 'done'

interface Task {
  id: string
  title: string
  priority: Priority
  column: Column
}

const initialTasks: Task[] = [
  { id: '1', title: 'Design reusable button variants', priority: 'high', column: 'todo' },
  { id: '2', title: 'Wire up API error boundaries', priority: 'medium', column: 'progress' },
  { id: '3', title: 'Polish mobile navigation', priority: 'low', column: 'progress' },
  { id: '4', title: 'Ship sprint demo to stakeholders', priority: 'high', column: 'done' },
]

const columns: { id: Column; label: string; color: string }[] = [
  { id: 'todo', label: 'To Do', color: '#94a3b8' },
  { id: 'progress', label: 'In Progress', color: '#4ecdc4' },
  { id: 'done', label: 'Done', color: '#ff6b6b' },
]

const priorityColors: Record<Priority, string> = {
  low: '#8b5cf6',
  medium: '#4ecdc4',
  high: '#ff6b6b',
}

export function TaskBoardDemo() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks)
  const [draft, setDraft] = useState('')
  const [priority, setPriority] = useState<Priority>('medium')

  const grouped = useMemo(
    () =>
      columns.map((col) => ({
        ...col,
        tasks: tasks.filter((task) => task.column === col.id),
      })),
    [tasks],
  )

  const addTask = () => {
    const title = draft.trim()
    if (!title) return
    setTasks((prev) => [
      ...prev,
      { id: crypto.randomUUID(), title, priority, column: 'todo' },
    ])
    setDraft('')
  }

  const moveTask = (id: string, column: Column) => {
    setTasks((prev) => prev.map((task) => (task.id === id ? { ...task, column } : task)))
  }

  const removeTask = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id))
  }

  return (
    <div className="demo demo--task-board">
      <div className="demo__toolbar">
        <input
          type="text"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addTask()}
          placeholder="Add a new task..."
          aria-label="New task title"
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value as Priority)}
          aria-label="Task priority"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button type="button" className="demo-btn demo-btn--primary" onClick={addTask}>
          <HiOutlinePlus /> Add
        </button>
      </div>

      <div className="task-board">
        {grouped.map((column) => (
          <div key={column.id} className="task-column">
            <div className="task-column__header">
              <span className="task-column__dot" style={{ background: column.color }} />
              <h4>{column.label}</h4>
              <span className="task-column__count">{column.tasks.length}</span>
            </div>

            <div className="task-column__list">
              <AnimatePresence mode="popLayout">
                {column.tasks.map((task) => (
                  <motion.div
                    key={task.id}
                    layout
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.25 }}
                    className="task-card"
                  >
                    <span
                      className="task-card__priority"
                      style={{ background: priorityColors[task.priority] }}
                    >
                      {task.priority}
                    </span>
                    <p>{task.title}</p>
                    <div className="task-card__actions">
                      {column.id !== 'todo' && (
                        <button type="button" onClick={() => moveTask(task.id, 'todo')}>
                          ← Back
                        </button>
                      )}
                      {column.id === 'todo' && (
                        <button type="button" onClick={() => moveTask(task.id, 'progress')}>
                          Start →
                        </button>
                      )}
                      {column.id === 'progress' && (
                        <button type="button" onClick={() => moveTask(task.id, 'done')}>
                          Done ✓
                        </button>
                      )}
                      <button
                        type="button"
                        className="task-card__delete"
                        onClick={() => removeTask(task.id)}
                        aria-label="Delete task"
                      >
                        <HiOutlineTrash />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
