import Image from "next/image"
import Link from "next/link"
import { Twitter, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-gray-600 italic mb-4 text-lg">
            Some go-to-market engines lack direction. Some run full speed the wrong way.
          </p>
          <p className="text-gray-600 italic mb-6 text-lg">
            Some lack focus. Others lack energy. Some run full speed in the wrong direction.
          </p>
          <p className="text-2xl font-bold text-brand-primary">
            We help you run your revenue engine at full speed, in the right direction.
          </p>
        </div>

        <div className="flex items-center justify-center space-x-12">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="B2B Tracks"
              width={140}
              height={50}
              className="h-12 w-auto"
            />
          </Link>

          <div className="flex items-center space-x-6">
            <a 
              href="https://linkedin.com/company/b2b-tracks" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-secondary hover:bg-brand-primary p-3 rounded-full transition-colors"
            >
              <Linkedin className="h-5 w-5 text-white" />
            </a>
            <a 
              href="https://twitter.com/b2btracks" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-secondary hover:bg-brand-primary p-3 rounded-full transition-colors"
            >
              <Twitter className="h-5 w-5 text-white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

    