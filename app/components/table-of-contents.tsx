
'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { List, ChevronRight, ChevronDown } from 'lucide-react'

interface Heading {
  level: number
  text: string
  id: string
}

interface TableOfContentsProps {
  headings: Heading[]
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('')
  const [isCollapsed, setIsCollapsed] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-80px 0px -80% 0px',
        threshold: 0.1
      }
    )

    headings.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      headings.forEach(({ id }) => {
        const element = document.getElementById(id)
        if (element) {
          observer.unobserve(element)
        }
      })
    }
  }, [headings])

  const handleClick = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      // Update URL hash
      window.history.pushState(null, '', `#${id}`)
    }
  }

  const getIndentClass = (level: number) => {
    switch (level) {
      case 1: return 'pl-0'
      case 2: return 'pl-4'
      case 3: return 'pl-8'
      case 4: return 'pl-12'
      default: return 'pl-16'
    }
  }

  const getFontSizeClass = (level: number) => {
    switch (level) {
      case 1: return 'text-base font-semibold'
      case 2: return 'text-sm font-medium'
      case 3: return 'text-sm'
      case 4: return 'text-xs'
      default: return 'text-xs'
    }
  }

  if (headings.length === 0) return null

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
      {/* Header */}
      <div 
        className="flex items-center justify-between cursor-pointer mb-4"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <div className="flex items-center space-x-2">
          <List className="w-5 h-5 text-blue-600" />
          <h3 className="font-semibold text-gray-900">Table of Contents</h3>
        </div>
        <motion.div
          animate={{ rotate: isCollapsed ? 0 : 90 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronRight className="w-4 h-4 text-gray-500" />
        </motion.div>
      </div>

      {/* Contents */}
      <AnimatePresence>
        {!isCollapsed && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-1 max-h-96 overflow-y-auto"
          >
            {headings.map(({ level, text, id }, index) => (
              <motion.button
                key={id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => handleClick(id)}
                className={`
                  w-full text-left py-1.5 px-2 rounded-md transition-all duration-200 hover:bg-gray-50
                  ${getIndentClass(level)} ${getFontSizeClass(level)}
                  ${activeId === id 
                    ? 'bg-blue-50 text-blue-700 border-l-2 border-blue-500' 
                    : 'text-gray-600 hover:text-gray-900'
                  }
                `}
              >
                <span className="line-clamp-2 leading-snug">
                  {text}
                </span>
              </motion.button>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Mobile TOC Indicator */}
      <div className="lg:hidden">
        <div className="mt-4 pt-4 border-t border-gray-200">
          <p className="text-xs text-gray-500">
            {headings.length} sections
          </p>
        </div>
      </div>
    </div>
  )
}
