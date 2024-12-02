import Image from "next/image"
import Link from "next/link"
import { Twitter, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="mb-6">
            <p className="text-gray-600 italic mb-2 text-lg">
              Some go-to-market engines lack direction. Some run full speed the wrong way.
            </p>
            <p className="text-gray-600 italic text-lg">
              Some lack focus. Others lack energy. Some run full speed in the wrong direction.
            </p>
          </div>
          <p className="text-2xl font-bold text-brand-primary">
            We help you run your revenue engine at full speed, in the right direction.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between max-w-4xl mx-auto">
          <Link href="/" className="flex items-center mb-6 md:mb-0">
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
              href="mailto:russell@b2btracks.com"
              className="bg-brand-primary/10 hover:bg-brand-primary p-3 rounded-full transition-all duration-300 group"
              title="Email us"
            >
              <Mail className="h-5 w-5 text-brand-primary group-hover:text-white" />
            </a>
            <a 
              href="https://linkedin.com/in/rscherwin"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0077b5]/10 hover:bg-[#0077b5] p-3 rounded-full transition-all duration-300 group"
              title="Follow us on LinkedIn"
            >
              <Linkedin className="h-5 w-5 text-[#0077b5] group-hover:text-white" />
            </a>
            <a 
              href="https://twitter.com/rscherwin"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black/10 hover:bg-black p-3 rounded-full transition-all duration-300 group"
              title="Follow us on X (Twitter)"
            >
              <Twitter className="h-5 w-5 text-black group-hover:text-white" />
            </a>
          </div>
        </div>
        
        <div className="text-center mt-8 text-sm text-gray-500">
          © {new Date().getFullYear()} B2B Tracks. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

    