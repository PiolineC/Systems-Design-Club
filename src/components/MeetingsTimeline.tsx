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
import rawMeetings from '@/data/meetings.json';

type Meeting = {
  title: string;
  datetime: string; // ISO string
};

const meetings: Meeting[] = rawMeetings;

export default function MeetingsTimeline() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);
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
    const timeZone = 'America/New_York';
    const nextSunLocal = setMinutes(setHours(nextSunday(now), 13), 0);
    const utcString = format(nextSunLocal, "yyyy-MM-dd'T'HH:mm:ssXXX");

    upcomingMeetings.push({
      title: "Resume Reviews & Mock Interview Session",
      datetime: new Date(utcString).toISOString(),
    });
  }

  const nextMeeting = upcomingMeetings[0];

  return (
    <section className="max-w-2xl mx-auto p-6">
      {nextMeeting && (
        <div className="mb-6 bg-blue-100 text-blue-900 p-4 rounded-lg shadow-sm">
          <p className="text-lg font-semibold">Next meeting:</p>
          <p className="text-xl font-bold">{nextMeeting.title}</p>
          <p className="text-sm text-gray-700">
            {format(new Date(nextMeeting.datetime), "eeee, MMMM d 'at' h:mm a")}
          </p>
          <p className="text-sm mt-1 italic">
            Starts in {formatDistanceToNow(new Date(nextMeeting.datetime), { addSuffix: true })}
          </p>
        </div>
      )}

      <h2 className="text-2xl font-semibold mt-8 mb-3">Upcoming Meetings</h2>
      <ul className="space-y-2">
        {upcomingMeetings.map((m) => (
          <li key={m.datetime} className="p-3 border rounded-md">
            <p className="font-medium">{m.title}</p>
            <p className="text-sm text-gray-600">
              {format(new Date(nextMeeting.datetime), "eeee, MMMM d 'at' h:mm a")}
            </p>
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-3">Past Meetings</h2>
      <ul className="space-y-2">
        {pastMeetings.map((m) => (
          <li key={m.datetime} className="p-3 border rounded-md bg-gray-50">
            <p className="font-medium">{m.title}</p>
            <p className="text-sm text-gray-600">
              {format(new Date(m.datetime), "PPP")}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
