

import { readFile } from 'fs/promises'
import { join } from 'path'
import MarkdownRenderer from '../components/markdown-renderer'
import DownloadButton from '../components/download-button'
import TableOfContents from '../components/table-of-contents'
import { FileText, Download, BookOpen, Brain, Zap, Shield, Globe, Cpu, Code, Bot, Mic, Settings, Database, Search } from 'lucide-react'

export const dynamic = 'force-static'

async function getMarkdownContent() {
  try {
    const filePath = join(process.cwd(), 'public', 'complete_ai_models_api_documentation.md')
    const content = await readFile(filePath, 'utf8')
    return content
  } catch (error) {
    console.error('Error reading markdown file:', error)
    return null
  }
}

function extractHeadings(content: string) {
  const headingRegex = /^(#{1,6})\s+(.+)$/gm
  const headings: Array<{ level: number; text: string; id: string }> = []
  let match

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1]?.length ?? 0
    let text = match[2]?.trim() ?? ''
    
    // Skip manual TOC entries (headings that are just markdown links)
    if (text.startsWith('[') && text.includes('](#') && text.endsWith(')')) {
      continue
    }
    
    // Clean up any remaining markdown link syntax
    text = text.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    
    // Use the same ID generation logic as the markdown renderer
    const id = text.toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/^-+|-+$/g, '') // Remove leading/trailing dashes
      .trim()
    
    if (text && id) {
      headings.push({ level, text, id })
    }
  }

  return headings
}

export default async function Home() {
  const markdownContent = await getMarkdownContent()

  if (!markdownContent) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-8">
        <div className="max-w-4xl mx-auto text-center">
          <FileText className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Documentation Not Found</h1>
          <p className="text-gray-600">Sorry, we couldn't load the complete AI models & API documentation.</p>
        </div>
      </div>
    )
  }

  const headings = extractHeadings(markdownContent)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <Database className="w-8 h-8 text-blue-600" />
              <h1 className="text-xl font-bold text-gray-900">Complete AI Models & API Documentation</h1>
            </div>
            <DownloadButton />
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Table of Contents - Desktop */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <TableOfContents headings={headings} />
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
              {/* Content Header */}
              <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-700 px-8 py-6 text-white">
                <h1 className="text-3xl font-bold mb-2">Complete AI Models & API Documentation</h1>
                <p className="text-blue-100 text-lg">Technical Reference - The definitive guide to AI models, APIs, agents, coding tools, and development frameworks from all major providers</p>
              </div>

              {/* Provider & Technology Overview Cards */}
              <div className="bg-gradient-to-r from-gray-50 to-blue-50 px-8 py-6 border-b border-gray-100">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                  <div className="flex items-center space-x-2 text-sm font-medium">
                    <Brain className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">OpenAI APIs</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm font-medium">
                    <Globe className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Google Gemini</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm font-medium">
                    <Zap className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">xAI (Grok)</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm font-medium">
                    <Cpu className="w-5 h-5 text-orange-600" />
                    <span className="text-gray-700">Groq</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                  <div className="flex items-center space-x-2 text-sm font-medium">
                    <Shield className="w-5 h-5 text-red-600" />
                    <span className="text-gray-700">Anthropic Claude</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm font-medium">
                    <Search className="w-5 h-5 text-teal-600" />
                    <span className="text-gray-700">Perplexity AI</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm font-medium">
                    <Bot className="w-5 h-5 text-indigo-600" />
                    <span className="text-gray-700">Moonshot AI</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm font-medium">
                    <Settings className="w-5 h-5 text-gray-600" />
                    <span className="text-gray-700">Qwen (Alibaba)</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="flex items-center space-x-2 text-sm font-medium">
                    <Code className="w-5 h-5 text-indigo-600" />
                    <span className="text-gray-700">API Endpoints</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm font-medium">
                    <Bot className="w-5 h-5 text-cyan-600" />
                    <span className="text-gray-700">Agent SDKs</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm font-medium">
                    <Mic className="w-5 h-5 text-pink-600" />
                    <span className="text-gray-700">Voice & Realtime</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm font-medium">
                    <FileText className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Code Examples</span>
                  </div>
                </div>
              </div>

              {/* Features Highlight */}
              <div className="bg-indigo-50 border-b border-indigo-100 px-8 py-4">
                <div className="flex flex-wrap items-center gap-4 text-sm">
                  <div className="flex items-center space-x-2 text-indigo-800">
                    <Database className="w-4 h-4" />
                    <span className="font-medium">Complete API Specs</span>
                  </div>
                  <div className="flex items-center space-x-2 text-indigo-800">
                    <Code className="w-4 h-4" />
                    <span className="font-medium">Python, cURL, JS Examples</span>
                  </div>
                  <div className="flex items-center space-x-2 text-indigo-800">
                    <Settings className="w-4 h-4" />
                    <span className="font-medium">Rate Limits & Pricing</span>
                  </div>
                  <div className="flex items-center space-x-2 text-indigo-800">
                    <Shield className="w-4 h-4" />
                    <span className="font-medium">Security Best Practices</span>
                  </div>
                </div>
              </div>

              {/* Download Section */}
              <div className="bg-blue-50 border-b border-blue-100 px-8 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Download className="w-5 h-5 text-blue-600" />
                    <span className="text-sm font-medium text-blue-900">Download the complete technical AI documentation with API specifications, code examples, and implementation guides</span>
                  </div>
                  <DownloadButton variant="secondary" />
                </div>
              </div>

              {/* Markdown Content */}
              <div className="p-8">
                <MarkdownRenderer content={markdownContent} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600">
            <p className="text-sm">
              Last updated: July 24, 2025 | Complete AI Models & API Documentation - Technical Reference
            </p>
            <p className="text-xs mt-2 text-gray-500">
              OpenAI • Google Gemini • xAI (Grok) • Groq • Anthropic Claude • Perplexity • Moonshot • Qwen • API Specs • SDKs • Code Examples
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
