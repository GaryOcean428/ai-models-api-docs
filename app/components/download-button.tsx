
'use client'

import { Download } from 'lucide-react'
import { Button } from './ui/button'

interface DownloadButtonProps {
  variant?: 'default' | 'secondary' | 'outline'
}

export default function DownloadButton({ variant = 'default' }: DownloadButtonProps) {
  const handleDownload = () => {
    // Create a link element and trigger the download
    const link = document.createElement('a')
    link.href = '/complete_ai_models_api_documentation.md'
    link.download = 'complete_ai_models_api_documentation.md'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handlePDFDownload = () => {
    // Create a link element and trigger the PDF download
    const link = document.createElement('a')
    link.href = '/complete_ai_models_api_documentation.pdf'
    link.download = 'complete_ai_models_api_documentation.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  if (variant === 'secondary') {
    return (
      <div className="flex items-center space-x-2">
        <Button 
          onClick={handleDownload} 
          variant="outline" 
          size="sm"
          className="text-blue-700 border-blue-300 hover:bg-blue-50"
        >
          <Download className="w-4 h-4 mr-2" />
          Markdown
        </Button>
        <Button 
          onClick={handlePDFDownload} 
          variant="outline" 
          size="sm"
          className="text-blue-700 border-blue-300 hover:bg-blue-50"
        >
          <Download className="w-4 h-4 mr-2" />
          PDF
        </Button>
      </div>
    )
  }

  return (
    <div className="flex items-center space-x-2">
      <Button 
        onClick={handleDownload} 
        variant={variant}
        className="bg-blue-600 hover:bg-blue-700 text-white"
      >
        <Download className="w-4 h-4 mr-2" />
        Download (.md)
      </Button>
      <Button 
        onClick={handlePDFDownload} 
        variant="outline"
        className="border-blue-300 text-blue-700 hover:bg-blue-50"
      >
        <Download className="w-4 h-4 mr-2" />
        PDF
      </Button>
    </div>
  )
}
