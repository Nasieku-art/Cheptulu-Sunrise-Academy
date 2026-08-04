import Link from "next/link";
import EventCard from "../eventcard/page";
import { EVENTS, ADMISSIONS } from "../mockdata/page";

export default function Homepage() {
  const upcoming = EVENTS.slice(0, 2);

  return (
    <>
     
      <section className="relative overflow-hidden border-b  border-[#1B4332]/10">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <span className="inline-block rounded-full border px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#FAF6EC]">
            {ADMISSIONS.status === "open"
              ? `Admissions open for ${ADMISSIONS.intakeYear}`
              : "Admissions closed"}
          </span>
          <h1
            className="mt-6 max-w-2xl text-4xl font-semibold leading-[1.1] tracking-tight  sm:text-6xl"
            style={{ fontFamily: "'Fraunces', 'Georgia', serif" }}
          >
            Cheptulu Sunrise Academy
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-[#22201B]/75 sm:text-lg">
            A place where character is built alongside academic excellence.
            Explore our upcoming events and admission dates below.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/admissions"
              className="rounded-full bg-[#1B4332] px-6 py-3 text-sm font-semibold text-[#FAF6EC] transition-colors hover:bg-[#163728]"
            >
              View Admissions
            </Link>
            <Link
              href="/events"
              className="rounded-full border border-[#1B4332]/20 px-6 py-3 text-sm font-semibold text-[#FAF6EC] transition-colors hover:bg-[#1B4332]/5"
            >
              See All Events
            </Link>
          </div>
        </div>
      </section>

   
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="flex items-end justify-between gap-4">
          <h2
            className="text-2xl font-semibold text-[#FAF6EC] sm:text-3xl"
            style={{ fontFamily: "'Fraunces', 'Georgia', serif" }}
          >
            Upcoming Events
          </h2>
          <Link
            href="/events"
            className="text-sm font-semibold text-[#FAF6EC]"
          >
            View all →
          </Link>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {upcoming.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>

     
      <section className="border-t bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-5 py-16 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h2
              className="text-2xl font-semibold text-[#1B4332] sm:text-3xl"
              style={{ fontFamily: "'Fraunces', 'Georgia', serif" }}
            >
              Applying for {ADMISSIONS.intakeYear}?
            </h2>
            <p className="mt-2 max-w-lg text-sm leading-relaxed text-black sm:text-base">
              Applications close{" "}
              {new Date(ADMISSIONS.applicationCloses).toLocaleDateString(
                "en-KE",
                { day: "numeric", month: "long", year: "numeric" }
              )}
              . Review requirements and key dates before you apply.
            </p>
          </div>
          <Link
            href="/admissions"
            className="shrink-0 rounded-full bg-[#65081f] px-6 py-3 text-sm font-semibold  transition-colors hover:bg-[#1B4332]"
          >
            Admission Requirements
          </Link>
        </div>
      </section>
    </>
  );
}