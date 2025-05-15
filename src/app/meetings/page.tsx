import MeetingsTimeline from '@/components/MeetingsTimeline';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Meetings – SD Book Club',
  description: 'Browse past and upcoming Systems Design Book Club meetings.',
};

export default function MeetingsPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center text-indigo-700">
        Club Meetings
      </h1>
      <MeetingsTimeline />
    </section>
  );
}
