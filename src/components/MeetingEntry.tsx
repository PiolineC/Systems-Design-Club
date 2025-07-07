import Image from "next/image";
import { format } from "date-fns";

type MeetingEntryProps = {
  title: string;
  datetime: string;
  filename?: string;
  alt?: string;
  description?: string;
};

export default function MeetingEntry({
  title,
  datetime,
  filename,
  alt,
  description,
}: MeetingEntryProps) {
  const formattedDate = format(new Date(datetime), "MMMM d, yyyy");

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:ring-2 hover:ring-indigo-500 transition duration-200 flex flex-col">
      {filename && (
        <div className="relative aspect-[16/9] w-full">
          <Image
            src={`/topics/${filename}`}
            alt={alt || title}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          />
        </div>
      )}
      <div className="p-6 text-left">
        <h3 className="text-lg font-bold text-gray-100">{title}</h3>
        <p className="text-sm text-gray-400 mb-2">{formattedDate}</p>
        {description && (
          <p className="text-sm text-gray-300 line-clamp-4">{description}</p>
        )}
      </div>
    </div>
  );
}
