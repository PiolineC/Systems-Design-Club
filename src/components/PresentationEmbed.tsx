type PresentationEmbedProps = {
  title: string;
  embedUrl: string;
};

export default function PresentationEmbed({ title, embedUrl }: PresentationEmbedProps) {
  return (
    <div className="bg-gray-900 rounded-xl shadow-lg border border-gray-800 overflow-hidden">
      {/* Title */}
      <h3 className="text-xl font-medium text-gray-100 px-6 py-4 select-text">
        {title}
      </h3>

      {/* Iframe container */}
      <div className="relative aspect-video bg-gray-900 rounded-b-xl border-t border-gray-800 overflow-hidden">
        <iframe
          title={`Presentation: ${title}`}
          src={embedUrl}
          allowFullScreen
          loading="lazy"
          className="w-full h-full"
          sandbox="allow-scripts allow-same-origin allow-presentation"
        />
      </div>
    </div>
  );
}
