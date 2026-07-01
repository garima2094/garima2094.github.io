import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiOutlineViewGrid, HiOutlineViewList } from 'react-icons/hi'

type ViewMode = 'grid' | 'list'
type Category = 'all' | 'plans' | 'tasks' | 'bills'

interface Product {
  id: string
  name: string
  category: Exclude<Category, 'all'>
  price: number
  status: 'active' | 'draft' | 'archived'
  description: string
}

const products: Product[] = [
  {
    id: '1',
    name: 'Pro Plan — Annual',
    category: 'plans',
    price: 4999,
    status: 'active',
    description: 'Full access with priority support and analytics.',
  },
  {
    id: '2',
    name: 'Task Automation Pack',
    category: 'tasks',
    price: 1299,
    status: 'active',
    description: 'Automate recurring workflows across teams.',
  },
  {
    id: '3',
    name: 'Billing Summary Q2',
    category: 'bills',
    price: 8420,
    status: 'active',
    description: 'Consolidated billing view with export options.',
  },
  {
    id: '4',
    name: 'Starter Plan',
    category: 'plans',
    price: 999,
    status: 'draft',
    description: 'Essential features for small teams getting started.',
  },
  {
    id: '5',
    name: 'Sprint Task Board',
    category: 'tasks',
    price: 0,
    status: 'active',
    description: 'Kanban-style task management for agile sprints.',
  },
  {
    id: '6',
    name: 'Invoice — March 2026',
    category: 'bills',
    price: 3150,
    status: 'archived',
    description: 'Archived invoice with payment history.',
  },
]

const categories: { id: Category; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'plans', label: 'Plans' },
  { id: 'tasks', label: 'Tasks' },
  { id: 'bills', label: 'Bills' },
]

const statusColors = {
  active: '#4ecdc4',
  draft: '#fbbf24',
  archived: '#94a3b8',
}

export function ProductCatalogDemo() {
  const [view, setView] = useState<ViewMode>('grid')
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState<Category>('all')
  const [sort, setSort] = useState<'name' | 'price'>('name')

  const filtered = useMemo(() => {
    let result = products.filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase())
      const matchesCategory = category === 'all' || item.category === category
      return matchesSearch && matchesCategory
    })

    result = [...result].sort((a, b) =>
      sort === 'name' ? a.name.localeCompare(b.name) : a.price - b.price,
    )

    return result
  }, [search, category, sort])

  return (
    <div className="demo demo--catalog">
      <div className="demo__toolbar catalog-toolbar">
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search plans, tasks, bills..."
          aria-label="Search products"
        />

        <div className="catalog-filters">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`filter-chip ${category === cat.id ? 'filter-chip--active' : ''}`}
              onClick={() => setCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <select value={sort} onChange={(e) => setSort(e.target.value as 'name' | 'price')} aria-label="Sort by">
          <option value="name">Sort by name</option>
          <option value="price">Sort by price</option>
        </select>

        <div className="view-toggle">
          <button
            type="button"
            className={view === 'grid' ? 'active' : ''}
            onClick={() => setView('grid')}
            aria-label="Grid view"
          >
            <HiOutlineViewGrid />
          </button>
          <button
            type="button"
            className={view === 'list' ? 'active' : ''}
            onClick={() => setView('list')}
            aria-label="List view"
          >
            <HiOutlineViewList />
          </button>
        </div>
      </div>

      <p className="catalog-results">{filtered.length} items found</p>

      <AnimatePresence mode="wait">
        <motion.div
          key={view}
          className={view === 'grid' ? 'catalog-grid' : 'catalog-list'}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
        >
          {filtered.map((item, index) => (
            <motion.article
              key={item.id}
              className={`catalog-item ${view === 'list' ? 'catalog-item--list' : ''}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: view === 'grid' ? -4 : 0 }}
            >
              <div className="catalog-item__top">
                <span className="catalog-item__category">{item.category}</span>
                <span className="catalog-item__status" style={{ color: statusColors[item.status] }}>
                  {item.status}
                </span>
              </div>
              <h4>{item.name}</h4>
              <p>{item.description}</p>
              <div className="catalog-item__footer">
                <strong>{item.price === 0 ? 'Free' : `₹${item.price.toLocaleString('en-IN')}`}</strong>
                <button type="button" className="demo-btn demo-btn--ghost">
                  View details
                </button>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </AnimatePresence>

      {filtered.length === 0 && (
        <p className="catalog-empty">No items match your search. Try a different filter.</p>
      )}
    </div>
  )
}
