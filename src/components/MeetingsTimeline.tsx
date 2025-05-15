"use client";

import { useEffect, useMemo, useState } from "react";
import { format, formatDistanceToNow, isAfter } from "date-fns";

const meetings = [
  { title: "Intro to System Design", datetime: "2025-04-06T17:00:00Z" },
  { title: "Distributed Systems", datetime: "2025-04-13T17:00:00Z" },
  { title: "Scalability Patterns", datetime: "2025-04-20T17:00:00Z" },
  { title: "Data Consistency Models", datetime: "2025-04-27T17:00:00Z" },
  { title: "Caching & CDNs", datetime: "2025-05-18T17:00:00Z" }, // upcoming
  { title: "Security & Authentication", datetime: "2025-05-25T17:00:00Z" }
];

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

  const nextMeeting = upcomingMeetings[0];

  return (
    <section className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Meetings</h1>

      {nextMeeting && (
        <div className="mb-6 bg-blue-100 text-blue-900 p-4 rounded-lg shadow-sm">
          <p className="text-lg font-semibold">Next meeting:</p>
          <p className="text-xl font-bold">{nextMeeting.title}</p>
          <p className="text-sm text-gray-700">
            {format(new Date(nextMeeting.datetime), "eeee, MMMM d, yyyy 'at' h:mm a zzz")}
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
              {format(new Date(m.datetime), "PPPp")}
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
              {format(new Date(m.datetime), "PPPp")}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
