type PresentationEmbedProps = {
  title: string;
  embedUrl: string;
};

export default function PresentationEmbed({ title, embedUrl }: PresentationEmbedProps) {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-2 text-gray-300">{title}</h3>
      <div className="aspect-video rounded-lg overflow-hidden border">
        <iframe
            title={`Presentation: ${title}`}
            src={embedUrl}
            allowFullScreen
            loading="lazy"
            className="w-full h-full"
        />
      </div>
    </div>
  );
}
