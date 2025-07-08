"use client";

import { useEffect, useMemo, useState } from "react";
import {
  format,
  formatDistanceToNow,
  isAfter,
  nextSunday,
  setHours,
  setMinutes
} from "date-fns";
import MeetingEntry from './MeetingEntry';
import rawMeetings from '@/data/meetings.json';

type Meeting = {
  title: string;
  datetime: string; // ISO string
  filename?: string;
  alt?: string;
  description?: string;
};

const meetings: Meeting[] = rawMeetings;

export default function MeetingsTimeline() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 60000);
    return () => clearInterval(interval);
  }, []);

  const { pastMeetings, upcomingMeetings } = useMemo(() => {
    const upcoming = meetings.filter(m => isAfter(new Date(m.datetime), now));
    const past = meetings.filter(m => !isAfter(new Date(m.datetime), now));
    return {
      upcomingMeetings: upcoming.sort((a, b) => new Date(a.datetime).getTime() - new Date(b.datetime).getTime()),
      pastMeetings: past.sort((a, b) => new Date(b.datetime).getTime() - new Date(a.datetime).getTime()),
    };
  }, [now]);

  if (upcomingMeetings.length === 0) {
    const nextSunLocal = setMinutes(setHours(nextSunday(now), 13), 0);
    const utcString = format(nextSunLocal, "yyyy-MM-dd'T'HH:mm:ssXXX");

    upcomingMeetings.push({
      title: "Resume Reviews & Mock Interview Session",
      datetime: new Date(utcString).toISOString(),
    });
  }

  const nextMeeting = upcomingMeetings[0];

  return (
    <section className="max-w-5xl mx-auto">
      {nextMeeting && (
        <div className="max-w-2xl mx-auto mb-6">
          <div className="bg-blue-100 text-blue-900 border border-blue-300 rounded-lg shadow-sm p-4 ring-2 ring-blue-900">
            <p className="text-sm font-medium uppercase tracking-wide mb-1 text-blue-700">
              Next Meeting
            </p>
            <p className="text-xl font-bold">{nextMeeting.title}</p>
            <p className="text-sm text-blue-800">
              {format(new Date(nextMeeting.datetime), "eeee, MMMM d 'at' h:mm a")}
            </p>
            <p className="text-sm mt-1 italic text-blue-700">
              Starts {formatDistanceToNow(new Date(nextMeeting.datetime), { addSuffix: true })}
            </p>
          </div>
        </div>
      )}

      <section>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {pastMeetings.map((m) => (
            <MeetingEntry
              key={m.datetime}
              title={m.title}
              datetime={m.datetime}
              filename={m.filename}
              alt={m.alt}
              description={m.description}
            />
          ))}
        </ul>
      </section>
    </section>
  );
}
