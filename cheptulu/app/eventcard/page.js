function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-KE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function EventCard({ event }) {
  const day = new Date(event.date).getDate();
  const month = new Date(event.date).toLocaleDateString("en-KE", {
    month: "short",
  });

  return (
    <article className="flex gap-5 rounded-2xl border border-[#1B4332]/10 bg-[#1b4332] p-5 transition-shadow hover:shadow-[0_8px_28px_rgba(27,67,50,0.08)]">
      <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-xl bg-[#FAE7BC] text-black">
        <span className="text-lg font-bold leading-none">{day}</span>
        <span className="mt-1 text-[0.65rem] font-semibold uppercase tracking-wider">
          {month}
        </span>
      </div>
      <div>
        <h3
          className="text-lg font-semibold "
          style={{ fontFamily: "'Fraunces', 'Georgia', serif" }}
        >
          {event.title}
        </h3>
        <p className="mt-1 text-xs font-medium uppercase tracking-wide">
          {formatDate(event.date)} · {event.location}
        </p>
        <p className="mt-2 text-sm leading-relaxed">
          {event.summary}
        </p>
      </div>
    </article>
  );
}