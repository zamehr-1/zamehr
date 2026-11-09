"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { brand } from "@/lib/content";

const WEEKDAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"] as const;

const TIME_SLOTS = [
  "10:00 am",
  "10:30 am",
  "11:00 am",
  "11:30 am",
  "12:00 pm",
  "12:15 pm",
  "12:30 pm",
  "12:45 pm",
  "1:00 pm",
  "1:30 pm",
  "2:00 pm",
  "2:30 pm",
  "3:00 pm",
  "3:15 pm",
  "3:30 pm",
  "3:45 pm",
  "4:00 pm",
  "4:30 pm",
  "5:00 pm",
] as const;

type Step = "schedule" | "details" | "done";

function startOfDay(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function isSameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function formatLongDate(date: Date) {
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function monthLabel(date: Date) {
  return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

function buildCalendarDays(viewMonth: Date) {
  const year = viewMonth.getFullYear();
  const month = viewMonth.getMonth();
  const first = new Date(year, month, 1);
  const startOffset = first.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells: Array<Date | null> = [];

  for (let i = 0; i < startOffset; i += 1) cells.push(null);
  for (let day = 1; day <= daysInMonth; day += 1) {
    cells.push(new Date(year, month, day));
  }
  while (cells.length % 7 !== 0) cells.push(null);
  return cells;
}

export function AppointmentStepper() {
  const [today, setToday] = useState<Date | null>(null);
  const [step, setStep] = useState<Step>("schedule");
  const [viewMonth, setViewMonth] = useState<Date | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [guests, setGuests] = useState<string[]>([]);
  const [guestInput, setGuestInput] = useState("");

  useEffect(() => {
    const now = startOfDay(new Date());
    setToday(now);
    setViewMonth(new Date(now.getFullYear(), now.getMonth(), 1));
  }, []);

  const calendarDays = useMemo(
    () => (viewMonth ? buildCalendarDays(viewMonth) : []),
    [viewMonth],
  );

  function selectDate(date: Date) {
    if (!today || date < today) return;
    setSelectedDate(date);
    setSelectedTime(null);
  }

  function selectTime(time: string) {
    if (!selectedDate) return;
    setSelectedTime(time);
    setStep("details");
  }

  function addGuest() {
    const email = guestInput.trim().toLowerCase();
    if (!email || !email.includes("@") || guests.length >= 10) return;
    if (guests.includes(email)) {
      setGuestInput("");
      return;
    }
    setGuests((prev) => [...prev, email]);
    setGuestInput("");
  }

  function removeGuest(email: string) {
    setGuests((prev) => prev.filter((item) => item !== email));
  }

  function onConfirm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStep("done");
  }

  if (step === "done") {
    return (
      <div className="mx-auto max-w-[720px] border border-mist bg-pearl px-6 py-14 text-center shadow-sm md:px-10">
        <p className="font-display text-3xl text-ink md:text-4xl">
          Appointment requested
        </p>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-ink-soft md:text-base">
          Thank you. We will confirm your{" "}
          {selectedDate && selectedTime
            ? `${formatLongDate(selectedDate)} at ${selectedTime}`
            : "consultation"}{" "}
          shortly.
        </p>
      </div>
    );
  }

  if (step === "details" && selectedDate && selectedTime) {
    return (
      <div className="mx-auto max-w-[720px] overflow-hidden border border-mist bg-pearl shadow-[0_8px_30px_rgba(18,16,14,0.08)]">
        <form onSubmit={onConfirm}>
          <div className="max-h-[70vh] space-y-5 overflow-y-auto px-6 py-7 md:px-8 md:py-8">
            <div>
              <h3 className="text-xl font-semibold text-ink md:text-2xl">
                Your information
              </h3>
              <p className="mt-2 text-sm text-ink-soft">
                {formatLongDate(selectedDate)} {selectedTime}{" "}
                <button
                  type="button"
                  onClick={() => setStep("schedule")}
                  className="ml-1 font-medium text-emerald underline underline-offset-2"
                >
                  Edit
                </button>
              </p>
              <p className="mt-2 flex items-center gap-2 text-sm text-ink-soft">
                <PinIcon />
                Google Meet
              </p>
              <input type="hidden" name="meetingType" value="virtual" />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="First name" name="firstName" required />
              <Field label="Last name" name="lastName" required />
            </div>

            <Field
              label="Your email address"
              name="email"
              type="email"
              required
            />

            <label className="block text-sm">
              <span className="mb-2 block font-medium text-ink">
                Tell me a little about the piece you&apos;re hoping to create.
                What are you envisioning, and is there a special occasion or
                story behind it? It&apos;s okay if you&apos;re still figuring
                out the details!
                <span className="text-ruby"> *</span>
              </span>
              <textarea
                name="vision"
                required
                rows={5}
                className="w-full resize-y rounded border border-mist bg-stone/40 px-3 py-3 text-ink outline-none transition focus:border-emerald"
              />
            </label>

            <label className="block text-sm">
              <span className="mb-2 block font-medium text-ink">
                What is your approximate budget for this project? Our custom
                jewellery starts at $3,000 and is made exclusively in solid gold
                or platinum
                <span className="text-ruby"> *</span>
              </span>
              <input
                name="budget"
                required
                className="w-full rounded border border-mist bg-stone/40 px-3 py-3 text-ink outline-none transition focus:border-emerald"
              />
            </label>

            <label className="block text-sm">
              <span className="mb-2 block font-medium text-ink">
                Do you have a specific date you&apos;d like your piece completed
                by? If not, feel free to say you&apos;re flexible!
                <span className="text-ruby"> *</span>
              </span>
              <input
                name="completion"
                required
                className="w-full rounded border border-mist bg-stone/40 px-3 py-3 text-ink outline-none transition focus:border-emerald"
              />
            </label>

            <div className="border-t border-mist pt-5">
              <p className="font-medium text-ink">Add guests</p>
              <p className="mt-1 text-sm text-ink-soft">
                Invite up to 10 guests to attend the meeting.
              </p>
              <div className="mt-3 flex gap-2">
                <input
                  type="email"
                  value={guestInput}
                  onChange={(event) => setGuestInput(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      event.preventDefault();
                      addGuest();
                    }
                  }}
                  placeholder="Add an email..."
                  className="min-w-0 flex-1 rounded border border-mist bg-stone/40 px-3 py-3 text-ink outline-none transition focus:border-emerald"
                />
                <button
                  type="button"
                  onClick={addGuest}
                  disabled={guests.length >= 10}
                  className="rounded bg-emerald px-4 py-3 text-sm font-medium text-pearl transition hover:bg-emerald-deep disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Add
                </button>
              </div>
              <p className="mt-2 text-xs text-ink-soft">
                {guests.length}/10 guests
              </p>
              <div className="mt-3 min-h-12 rounded border border-dashed border-mist bg-stone/30 px-3 py-3">
                {guests.length === 0 ? (
                  <p className="text-sm text-ink-soft">
                    Added guests will appear here.
                  </p>
                ) : (
                  <ul className="flex flex-wrap gap-2">
                    {guests.map((email) => (
                      <li
                        key={email}
                        className="inline-flex items-center gap-2 rounded-full bg-pearl px-3 py-1 text-sm text-ink shadow-sm"
                      >
                        {email}
                        <button
                          type="button"
                          aria-label={`Remove ${email}`}
                          onClick={() => removeGuest(email)}
                          className="text-ink-soft hover:text-ink"
                        >
                          ×
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between gap-3 border-t border-mist bg-stone/50 px-5 py-4">
            <button
              type="button"
              onClick={() => setStep("schedule")}
              className="rounded border border-emerald/40 bg-pearl px-4 py-2.5 text-sm font-medium text-emerald transition hover:bg-pearl/80"
            >
              ← Back
            </button>
            <button
              type="submit"
              className="rounded bg-emerald px-5 py-2.5 text-sm font-medium text-pearl transition hover:bg-emerald-deep"
            >
              Confirm
            </button>
          </div>
        </form>
      </div>
    );
  }

  if (!today || !viewMonth) {
    return (
      <div className="mx-auto flex max-w-[920px] min-h-[420px] items-center justify-center border border-mist bg-pearl shadow-[0_8px_30px_rgba(18,16,14,0.08)]">
        <p className="text-sm text-ink-soft">Loading calendar…</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-[920px] overflow-hidden border border-mist bg-pearl shadow-[0_8px_30px_rgba(18,16,14,0.08)]">
      <div className="grid md:grid-cols-[1.05fr_0.95fr]">
        <div className="bg-emerald-deep px-6 py-7 text-pearl md:px-7 md:py-8">
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-pearl/15 font-display text-lg tracking-[0.12em]">
            ZM
          </div>
          <h3 className="max-w-xs font-display text-2xl leading-snug md:text-[1.7rem]">
            Schedule a custom jewellery design consultation with {brand.name}
          </h3>

          <div className="mt-8 flex items-center justify-between">
            <button
              type="button"
              aria-label="Previous month"
              onClick={() =>
                setViewMonth(
                  new Date(viewMonth.getFullYear(), viewMonth.getMonth() - 1, 1),
                )
              }
              className="flex h-8 w-8 items-center justify-center rounded-full text-pearl/80 transition hover:bg-pearl/10 hover:text-pearl"
            >
              ‹
            </button>
            <p className="text-sm font-medium tracking-wide">
              {monthLabel(viewMonth)}
            </p>
            <button
              type="button"
              aria-label="Next month"
              onClick={() =>
                setViewMonth(
                  new Date(viewMonth.getFullYear(), viewMonth.getMonth() + 1, 1),
                )
              }
              className="flex h-8 w-8 items-center justify-center rounded-full text-pearl/80 transition hover:bg-pearl/10 hover:text-pearl"
            >
              ›
            </button>
          </div>

          <div className="mt-4 grid grid-cols-7 gap-1 text-center text-[0.65rem] tracking-wide text-pearl/65">
            {WEEKDAYS.map((day) => (
              <span key={day} className="py-1">
                {day}
              </span>
            ))}
          </div>

          <div className="mt-1 grid grid-cols-7 gap-1 text-center text-sm">
            {calendarDays.map((date, index) => {
              if (!date) {
                return <span key={`empty-${index}`} className="h-10" />;
              }
              const disabled = date < today;
              const selected = selectedDate
                ? isSameDay(date, selectedDate)
                : false;
              return (
                <button
                  key={`${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`}
                  type="button"
                  disabled={disabled}
                  onClick={() => selectDate(date)}
                  className={`mx-auto flex h-10 w-10 items-center justify-center rounded-full transition ${
                    selected
                      ? "bg-pearl font-semibold text-emerald-deep"
                      : disabled
                        ? "cursor-not-allowed text-pearl/30"
                        : "text-pearl hover:bg-pearl/15"
                  }`}
                >
                  {date.getDate()}
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex max-h-[560px] flex-col bg-pearl px-5 py-6 md:px-6 md:py-7">
          <div className="space-y-3 border-b border-mist pb-4">
            <p className="flex items-center gap-2 text-sm text-ink-soft">
              <PinIcon />
              Google Meet
            </p>
            <p className="inline-flex rounded bg-stone px-3 py-1.5 text-sm text-ink-soft">
              30 mins
            </p>
          </div>

          {!selectedDate ? (
            <div className="flex flex-1 items-center justify-center py-10 text-center">
              <p className="max-w-[14rem] text-sm leading-relaxed text-ink-soft">
                Select a date on the calendar to view available times.
              </p>
            </div>
          ) : (
            <>
              <div className="py-4">
                <p className="text-sm font-medium text-ink">
                  What time works best?
                </p>
                <p className="mt-1 text-sm text-ink-soft">
                  Showing times for {formatLongDate(selectedDate)}
                </p>
                <p className="mt-3 text-xs text-emerald">
                  Local time · 30 minute consultation
                </p>
              </div>

              <div className="min-h-0 flex-1 space-y-2 overflow-y-auto pr-1">
                {TIME_SLOTS.map((time) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => selectTime(time)}
                    className={`flex w-full items-center justify-center rounded-full border px-4 py-2.5 text-sm transition ${
                      selectedTime === time
                        ? "border-emerald bg-emerald text-pearl"
                        : "border-mist bg-pearl text-ink hover:border-emerald/50"
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block text-sm">
      <span className="mb-2 block font-medium text-ink">
        {label}
        {required ? <span className="text-ruby"> *</span> : null}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded border border-mist bg-stone/40 px-3 py-3 text-ink outline-none transition focus:border-emerald"
      />
    </label>
  );
}

function PinIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className="shrink-0"
    >
      <path
        d="M12 22s7-7.2 7-12.2A7 7 0 1 0 5 9.8C5 14.8 12 22 12 22Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="12" cy="9.5" r="2.2" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}
