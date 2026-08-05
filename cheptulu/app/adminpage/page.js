import { ADMISSIONS } from "../../lib/mockData";

export const metadata = {
  title: "Admissions — Cheptulu Secondary School",
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
            ? "border border-[#C9971C]/40 bg-[#C9971C]/10 text-[#8a7b4f]"
            : "border border-[#1B4332]/15 bg-[#1B4332]/5 text-[#1B4332]/60"
        }`}
      >
        {isOpen ? "Admissions Open" : "Admissions Closed"}
      </span>

      <h1
        className="mt-4 text-3xl font-semibold text-[#1B4332] sm:text-4xl"
        style={{ fontFamily: "'Fraunces', 'Georgia', serif" }}
      >
        Admissions — Intake {ADMISSIONS.intakeYear}
      </h1>

      <div className="mt-10 grid gap-5 sm:grid-cols-3">
        <div className="rounded-2xl border border-[#1B4332]/10 bg-white/60 p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#8a7b4f]">
            Applications Open
          </p>
          <p className="mt-2 text-lg font-semibold text-[#1B4332]">
            {formatDate(ADMISSIONS.applicationOpens)}
          </p>
        </div>
        <div className="rounded-2xl border border-[#1B4332]/10 bg-white/60 p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#8a7b4f]">
            Applications Close
          </p>
          <p className="mt-2 text-lg font-semibold text-[#1B4332]">
            {formatDate(ADMISSIONS.applicationCloses)}
          </p>
        </div>
        <div className="rounded-2xl border border-[#1B4332]/10 bg-white/60 p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#8a7b4f]">
            Interviews
          </p>
          <p className="mt-2 text-lg font-semibold text-[#1B4332]">
            {ADMISSIONS.interviewDates}
          </p>
        </div>
      </div>

      <div className="mt-12">
        <h2
          className="text-xl font-semibold text-[#1B4332]"
          style={{ fontFamily: "'Fraunces', 'Georgia', serif" }}
        >
          Requirements
        </h2>
        <ul className="mt-4 space-y-3">
          {ADMISSIONS.requirements.map((req) => (
            <li key={req} className="flex items-start gap-3 text-sm text-[#22201B]/80">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9971C]" />
              {req}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}