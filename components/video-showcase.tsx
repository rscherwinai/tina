import Image from "next/image"

interface Video {
  title: string
  thumbnailUrl: string
  videoUrl: string
}

interface VideoShowcaseProps {
  videos: Video[]
}

export default function VideoShowcase({ videos }: VideoShowcaseProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Featured Keynotes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-lg">
              <a 
                href={video.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative aspect-video hover:opacity-90 transition-opacity"
              >
                <div className="relative aspect-video">
                  <Image
                    src={video.thumbnailUrl}
                    alt={video.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-blue-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
              <div className="p-4">
                <h3 className="text-xl font-semibold">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 