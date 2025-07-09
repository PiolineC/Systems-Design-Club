"use client";

import SectionHeader from "@/components/SectionHeader";
import TopicCarousel from '@/components/TopicCarousel';
import ValueCard from '@/components/ValueCard';
import LogoScroller from '@/components/LogoScroller';
import { motion } from "framer-motion";

import InquiryIcon from '@/components/icons/InquiryIcon';
import ProfessionalIcon from '@/components/icons/ProfessionalIcon';
import CommunityIcon from '@/components/icons/CommunityIcon';

const values = [
    {
      icon: <InquiryIcon/>,
      title: "Inquiry-Based Learning",
      description: "We believe learning is most powerful when driven by curiosity. Our members explore deeply, think critically, and take ownership of their growth.",
    },
    {
      icon: <ProfessionalIcon/>,
      title: "Professional Development",
      description: "We cultivate leadership and career readiness, guiding members through mock interviews, resume reviews, and networking opportunities.",
    },
    {
      icon: <CommunityIcon/>,
      title: "Community & Collaboration",
      description: "We uplift one another through mentorship, knowledge-sharing, and by fostering spaces for discovery and meaningful engagement.",
    },
];

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto">
      <SectionHeader
        title="Welcome to The Quorum!"
        description="Join us to master systems design through curated readings, lectures, and lively meetings."
      />

      <TopicCarousel />

      <div className="mb-12">
        <LogoScroller />
      </div>
      

      {/* Value cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-6">
        {values.map((card, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <ValueCard
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          </motion.div>
        ))}
      </div>

    

    </main>
  );
}
