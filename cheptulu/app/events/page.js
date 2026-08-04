import Link from "next/link";

import EventCard from "../eventcard/page";
import { EVENTS } from "../mockdata/page";

export const metadata = {
  title: "Events — Cheptulu Sunrise Academy",
};

export default function EventsPage() {
  return (
    <section className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-20">
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FAF6EC]">
        School Calendar
      </span>
      <h1
        className="mt-2 text-3xl font-semibold text-[#FAF6EC] sm:text-4xl"
        style={{ fontFamily: "'Fraunces', 'Georgia', serif" }}
      >
        Events
      </h1>
      <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#FAF6EC] sm:text-base">
        Keep up with school functions, meetings, and celebrations throughout
        the term.
      </p>

      <div className="mt-10 space-y-5">
        {EVENTS.length === 0 ? (
          <p className="text-sm ">
            No events posted yet — check back soon.
          </p>
        ) : (
          EVENTS.map((event) => <EventCard key={event.id} event={event} />)
        )}
      </div>
    </section>
  );
}