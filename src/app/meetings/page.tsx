import MeetingsTimeline from '@/components/MeetingsTimeline';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Meetings',
  description: 'Browse past and upcoming club meetings.',
};

export default function MeetingsPage() {
  return (
    <div className="min-h-screen">
      <section className="max-w-2xl mx-auto px-4 pt-6 text-center text-gray-300">
        <h2 className="text-4xl font-extrabold mx-auto mb-4 text-indigo-400">What to Expect</h2>
        <p className="text-md leading-relaxed">
          Each meeting typically features a <span className="text-indigo-300 font-medium">40-minute presentation</span> followed by
          <span className="text-indigo-300 font-medium"> 20 minutes of Q&amp;A</span>. Afterward, we encourage
          informal networking and discussion. 
          <br></br>Interested in presenting? We welcome talks on systems topics at all levels!
        </p>
      </section>
      
      <MeetingsTimeline />
    </div>
  );
}
