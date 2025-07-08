import React from "react";

type PresentationCardProps = {
  title: string;
  author: string;
  onClick: () => void;
  thumbnailUrl?: string; 
};

export default function PresentationCard({
  title,
  author,
  onClick,
  thumbnailUrl,
}: PresentationCardProps) {
  return (
    <button
      onClick={onClick}
      className="cursor-pointer bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:ring-2 hover:ring-indigo-500 transition duration-200 flex flex-col text-left w-full focus:outline-none"
    >
      {thumbnailUrl ? (
        <div className="relative aspect-[16/9] w-full">
          <img
            src={thumbnailUrl}
            alt={`Thumbnail for ${title}`}
            className="object-cover w-full h-full"
          />
        </div>
      ) : (
        <div className="aspect-[16/9] w-full bg-gray-800 flex items-center justify-center text-gray-500">
          No preview available
        </div>
      )}
      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-100">{title}</h3>
        <p className="text-sm text-gray-400">{author}</p>
      </div>
    </button>
  );
}
