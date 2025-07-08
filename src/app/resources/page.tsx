"use client";
import { useState } from "react";
import SectionHeader from "@/components/SectionHeader";
import ReferenceCard from '@/components/ReferenceCard';
import PresentationModal from '@/components/PresentationModal';
import PresentationCard from "@/components/PresentationCard"; // import the new card

type Resource = 
  | { type: "text"; title: string; author: string; link: string }
  | { type: "presentation"; title: string; author: string; embedUrl: string; thumbnailUrl?: string };

import raw from '@/data/resources.json';
const resources = raw as Resource[];

export default function ResourcesPage() {
  const texts = resources.filter((r) => r.type === "text");
  const presentations = resources.filter((r) => r.type === "presentation");

  const [openPresentation, setOpenPresentation] = useState<Resource | null>(null);

  return (
    <div className="max-w-5xl mx-auto">
      <SectionHeader
        title="Resources"
        description="Recommended readings and featured talks from our club members."
      />

      {/* Reference Texts */}
      <section className="px-4 text-center space-y-8">
        <h2 className="text-2xl font-bold mb-4 text-indigo-400">Reference Texts</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {texts.map((item, idx) => (
            <ReferenceCard 
              key={idx}
              title={item.title}
              author={item.author}
              link={item.link}
            />
          ))}
        </ul>

        {/* Featured Presentations */}
        <h2 className="text-2xl font-semibold mb-4 text-indigo-400">Featured Presentations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {presentations.map((item, idx) => (
            <PresentationCard
              key={idx}
              title={item.title}
              author={item.author}
              thumbnailUrl={item.thumbnailUrl} 
              onClick={() => setOpenPresentation(item)}
            />
          ))}
        </div>

        {/* Modal */}
        {openPresentation && openPresentation.type === "presentation" && (
          <PresentationModal
            isOpen={true}
            onClose={() => setOpenPresentation(null)}
            title={openPresentation.title}
            embedUrl={openPresentation.embedUrl}
          />
        )}
      </section>
    </div>
  );
}
