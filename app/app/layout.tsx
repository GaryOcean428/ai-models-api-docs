

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Complete AI Models & API Documentation - Technical Reference',
  description: 'The definitive technical guide to AI models, APIs, agents, coding tools, and development frameworks from all major providers. Includes OpenAI, Google Gemini, xAI Grok, Groq, Anthropic Claude, Perplexity, Moonshot, and Qwen with complete API specifications, authentication methods, request/response formats, rate limits, error codes, SDKs, pricing, and working code examples.',
  keywords: 'AI API documentation, OpenAI API, Google Gemini API, xAI Grok API, Groq API, Anthropic Claude API, Perplexity API, Moonshot API, Qwen API, AI models, technical reference, API endpoints, authentication, rate limits, SDKs, code examples, AI development, machine learning APIs',
  authors: [{ name: 'AI Documentation Team' }],
  openGraph: {
    title: 'Complete AI Models & API Documentation - Technical Reference',
    description: 'The definitive technical guide to AI models, APIs, agents, and development frameworks from all major providers with complete implementation guides',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Complete AI Models & API Documentation - Technical Reference',
    description: 'Complete technical guide to AI APIs from OpenAI, Google, xAI, Groq, Anthropic, Perplexity, Moonshot & Qwen',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
