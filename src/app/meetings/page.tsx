import MeetingsTimeline from '@/components/MeetingsTimeline';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Meetings',
  description: 'Browse past and upcoming club meetings.',
};

export default function MeetingsPage() {
  return (
    <section className="max-w-4xl mx-auto">
      <MeetingsTimeline />
    </section>
  );
}
