import SectionHeader from "@/components/SectionHeader";
import MeetingsTimeline from '@/components/MeetingsTimeline';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Meetings',
  description: 'Browse past and upcoming club meetings.',
};

export default function MeetingsPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <SectionHeader
        title="What to Expect"
        description={
          <>
            Each meeting typically features a <strong className="text-indigo-300">40 minute presentation</strong> followed by{' '}
            <strong className="text-indigo-300">20 minutes of Q&amp;A</strong>. Interested in presenting? We welcome talks at all levels!
          </>
        }
      />

      <MeetingsTimeline />
    </div>
  );
}
