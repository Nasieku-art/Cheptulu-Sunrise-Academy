
import { ADMISSIONS } from "@/lib/mockData.js/page";

export const metadata = {
  title: "Admissions — Cheptulu Sunrise Academy",
};

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-KE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function AdmissionsPage() {
  const isOpen = ADMISSIONS.status === "open";

  return (
    <section className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-20">
      <span
        className={`inline-block rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] ${
          isOpen
            ? "border text-[#FAE7BC]"
            : "border border-[#1B4332]/15 bg-[#1B4332]/5 "
        }`}
      >
        {isOpen ? "Admissions Open" : "Admissions Closed"}
      </span>

      <h1
        className="mt-4 text-3xl font-semibold sm:text-4xl"
        style={{ fontFamily: "'Fraunces', 'Georgia', serif" }}
      >
        Admissions  Intake {ADMISSIONS.intakeYear}
      </h1>

      <div className="mt-10 grid gap-5 sm:grid-cols-3">
        <div className="rounded-2xl border bg-white/60 p-5">
          <p className="text-xs font-semibold uppercase tracking-wide">
            Applications Open
          </p>
          <p className="mt-2 text-lg font-semibold text-[#1B4332]">
            {formatDate(ADMISSIONS.applicationOpens)}
          </p>
        </div>
        <div className="rounded-2xl border bg-white/60 p-5">
          <p className="text-xs font-semibold uppercase tracking-wide ">
            Applications Close
          </p>
          <p className="mt-2 text-lg font-semibold text-[#1B4332]">
            {formatDate(ADMISSIONS.applicationCloses)}
          </p>
        </div>
        <div className="rounded-2xl border bg-white/60 p-5">
          <p className="text-xs font-semibold uppercase tracking-wide">
            Interviews
          </p>
          <p className="mt-2 text-lg font-semibold text-[#1B4332]">
            {ADMISSIONS.interviewDates}
          </p>
        </div>
      </div>

      <div className="mt-12">
        <h2
          className="text-xl font-semibold"
          style={{ fontFamily: "'Fraunces', 'Georgia', serif" }}
        >
          Requirements
        </h2>
        <ul className="mt-4 space-y-3">
          {ADMISSIONS.requirements.map((req) => (
            <li key={req} className="flex items-start gap-3 text-sm">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FAE7BC]" />
              {req}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}