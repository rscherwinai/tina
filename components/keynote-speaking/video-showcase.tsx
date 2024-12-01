interface Video {
  title: string
  youtubeUrl: string
}

interface VideoShowcaseProps {
  videos: Video[]
}

function getYouTubeID(url: string) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
}

export default function VideoShowcase({ videos }: VideoShowcaseProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Featured Keynotes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video, index) => {
            const videoId = getYouTubeID(video.youtubeUrl);
            const thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
            
            return (
              <div key={index} className="rounded-lg overflow-hidden shadow-lg">
                <div className="aspect-video">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{video.title}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 