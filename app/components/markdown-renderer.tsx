
'use client'

import React, { useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import rehypeRaw from 'rehype-raw'
import { motion } from 'framer-motion'

// Import highlight.js styles
import 'highlight.js/styles/github.css'

interface MarkdownRendererProps {
  content: string
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  useEffect(() => {
    // Add scroll behavior for anchor links
    const handleHashChange = () => {
      const hash = window.location.hash
      if (hash) {
        const element = document.getElementById(hash.slice(1))
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  // Function to extract text content from React children
  const extractTextFromChildren = (children: any): string => {
    if (typeof children === 'string') {
      return children
    }
    
    if (typeof children === 'number') {
      return String(children)
    }
    
    if (Array.isArray(children)) {
      return children.map(extractTextFromChildren).join(' ')
    }
    
    if (React.isValidElement(children)) {
      return extractTextFromChildren((children.props as any)?.children)
    }
    
    return ''
  }

  // Function to generate consistent IDs
  const generateId = (children: any): string => {
    const text = extractTextFromChildren(children).trim()
    
    if (!text) {
      return Math.random().toString(36).substr(2, 9) // fallback random ID
    }
    
    return text.toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/^-+|-+$/g, '') // Remove leading/trailing dashes
      .trim()
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="prose prose-lg max-w-none"
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight, rehypeRaw]}
        components={{
          // Custom heading renderer with anchor links
          h1: ({ children, ...props }) => {
            const id = generateId(children)
            return (
              <h1 
                id={id}
                className="text-3xl font-bold text-gray-900 mb-6 mt-8 pb-2 border-b-2 border-blue-200 scroll-mt-24"
                {...props}
              >
                {children}
              </h1>
            )
          },
          h2: ({ children, ...props }) => {
            const id = generateId(children)
            return (
              <h2 
                id={id}
                className="text-2xl font-bold text-gray-800 mb-4 mt-8 scroll-mt-24"
                {...props}
              >
                {children}
              </h2>
            )
          },
          h3: ({ children, ...props }) => {
            const id = generateId(children)
            return (
              <h3 
                id={id}
                className="text-xl font-semibold text-gray-800 mb-3 mt-6 scroll-mt-24"
                {...props}
              >
                {children}
              </h3>
            )
          },
          h4: ({ children, ...props }) => {
            const id = generateId(children)
            return (
              <h4 
                id={id}
                className="text-lg font-semibold text-gray-700 mb-2 mt-4 scroll-mt-24"
                {...props}
              >
                {children}
              </h4>
            )
          },
          h5: ({ children, ...props }) => {
            const id = generateId(children)
            return (
              <h5 
                id={id}
                className="text-base font-semibold text-gray-700 mb-2 mt-4 scroll-mt-24"
                {...props}
              >
                {children}
              </h5>
            )
          },
          h6: ({ children, ...props }) => {
            const id = generateId(children)
            return (
              <h6 
                id={id}
                className="text-sm font-semibold text-gray-700 mb-2 mt-4 scroll-mt-24"
                {...props}
              >
                {children}
              </h6>
            )
          },
          // Custom paragraph styling
          p: ({ children, ...props }) => (
            <p className="text-gray-700 leading-relaxed mb-4" {...props}>
              {children}
            </p>
          ),
          // Custom list styling
          ul: ({ children, ...props }) => (
            <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700" {...props}>
              {children}
            </ul>
          ),
          ol: ({ children, ...props }) => (
            <ol className="list-decimal list-inside space-y-2 mb-4 text-gray-700" {...props}>
              {children}
            </ol>
          ),
          li: ({ children, ...props }) => (
            <li className="leading-relaxed" {...props}>
              {children}
            </li>
          ),
          // Custom code styling
          code: ({ className, children, ...props }) => {
            const isInline = !className
            if (isInline) {
              return (
                <code 
                  className="bg-gray-100 text-red-600 px-1.5 py-0.5 rounded text-sm font-mono"
                  {...props}
                >
                  {children}
                </code>
              )
            }
            return (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="rounded-lg overflow-hidden shadow-sm border border-gray-200 mb-6"
              >
                <pre className="bg-gray-50 p-4 overflow-x-auto">
                  <code className={className} {...props}>
                    {children}
                  </code>
                </pre>
              </motion.div>
            )
          },
          // Custom table styling
          table: ({ children, ...props }) => (
            <div className="overflow-x-auto mb-6 shadow-sm border border-gray-200 rounded-lg">
              <table className="min-w-full divide-y divide-gray-200" {...props}>
                {children}
              </table>
            </div>
          ),
          thead: ({ children, ...props }) => (
            <thead className="bg-gray-50" {...props}>
              {children}
            </thead>
          ),
          th: ({ children, ...props }) => (
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" {...props}>
              {children}
            </th>
          ),
          td: ({ children, ...props }) => (
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-t border-gray-200" {...props}>
              {children}
            </td>
          ),
          // Custom blockquote styling
          blockquote: ({ children, ...props }) => (
            <blockquote className="border-l-4 border-blue-400 pl-4 py-2 bg-blue-50 rounded-r-lg mb-4 italic text-gray-700" {...props}>
              {children}
            </blockquote>
          ),
          // Custom horizontal rule
          hr: ({ ...props }) => (
            <hr className="my-8 border-t-2 border-gray-200" {...props} />
          ),
          // Custom link styling
          a: ({ children, href, ...props }) => (
            <a 
              href={href}
              className="text-blue-600 hover:text-blue-800 underline decoration-blue-300 hover:decoration-blue-500 transition-colors"
              {...props}
            >
              {children}
            </a>
          ),
          // Custom strong/bold styling
          strong: ({ children, ...props }) => (
            <strong className="font-semibold text-gray-900" {...props}>
              {children}
            </strong>
          ),
          // Custom emphasis/italic styling
          em: ({ children, ...props }) => (
            <em className="italic text-gray-800" {...props}>
              {children}
            </em>
          )
        }}
      >
        {content}
      </ReactMarkdown>
    </motion.div>
  )
}
