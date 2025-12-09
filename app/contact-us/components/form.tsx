const programs = ["Secondary", "Sr. Secondary", "Skill & Vocational"];

export default function ContactUsForm() {
  return (
    <section className="mx-auto mb-8 max-w-6xl rounded-3xl border border-orange-500 bg-white px-4 py-8 shadow-md sm:px-8 sm:py-10">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Contact info */}
        <div className="space-y-4 text-slate-800">
          <h2 className="text-xl font-extrabold text-[#1b1260] sm:text-2xl">
            Contact Info
          </h2>
          <InfoRow label="Call Us" value="+91 69002 15858 (10 am to 5 pm)" />
          <InfoRow label="Email Us" value="support@dbos.in" />
          <InfoRow label="Visit Website" value="www.dbos.in" />
          <InfoRow
            label="Address"
            value="Barpeta Road, Dist- Barpeta, State- Assam – 781315"
          />
        </div>

        {/* Form */}
        <div className="space-y-4 rounded-2xl border border-orange-400 px-4 py-5 sm:px-6">
          <h2 className="text-xl font-extrabold text-[#1b1260] sm:text-2xl">
            Enquiry Form
          </h2>
          <form className="space-y-3">
            <Field label="Your Name" required>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                className="input field"
                required
              />
            </Field>

            <Field label="Contact Us" required>
              <input
                type="tel"
                name="phone"
                placeholder="Enter Your phone no"
                className="input field"
                required
              />
            </Field>

            <Field label="Enter Email Id" required>
              <input
                type="email"
                name="email"
                placeholder="Enter a Valid Email"
                className="input field"
                required
              />
            </Field>

            <Field label="Select Program" required>
              <select name="program" className="input field" defaultValue="">
                <option value="" disabled>
                  Select Program
                </option>
                {programs.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </Field>

            <Field label="State Name">
              <input
                type="text"
                name="state"
                placeholder="Your State Name"
                className="input field"
              />
            </Field>

            <Field label="City Name" required>
              <input
                type="text"
                name="city"
                placeholder="Your City Name"
                className="input field"
                required
              />
            </Field>

            <Field label="Your Question" required>
              <input
                type="text"
                name="question"
                placeholder="Your Question Here"
                className="input field"
                required
              />
            </Field>

            <div className="pt-3">
              <button
                type="submit"
                className="w-full rounded-xl bg-linear-to-r from-[#ff7b21] to-[#ff4b1f] px-4 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-lg transition hover:brightness-110 sm:w-auto"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="space-y-1">
      <p className="text-sm font-semibold text-[#1b1260] sm:text-base">
        {label}-
      </p>
      <p className="text-sm sm:text-base">{value}</p>
    </div>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block space-y-1 text-sm font-semibold text-[#1b1260] sm:text-base">
      <span>
        {label}
        {required && <span className="text-red-500"> *</span>}
      </span>
      {children}
    </label>
  );
}
