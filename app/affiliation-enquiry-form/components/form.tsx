const states = [
  "Select State",
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi",
  "Jammu and Kashmir",
  "Ladakh",
  "Lakshadweep",
  "Puducherry",
];

export default function AffiliationEnquiryForm() {
  return (
    <div className="mb-5 mx-auto max-w-6xl rounded-3xl border border-orange-500 bg-white px-4 py-8 shadow-md sm:px-8 sm:py-10">
      <h1 className="text-2xl font-extrabold text-[#1b1260] sm:text-3xl">
        Affiliation / Enquiry Form
      </h1>
      <p className="mt-3 text-sm text-slate-700 sm:text-base">
        Please provide your institute details and contact information.
      </p>

      <form className="mt-6 space-y-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Name of Institution" required>
            <input
              type="text"
              name="institutionName"
              placeholder="Name of Institution"
              className="input field"
              required
            />
          </Field>
          <Field label="Registered Office" required>
            <input
              type="text"
              name="registeredOffice"
              placeholder="Registered Office"
              className="input field"
              required
            />
          </Field>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Post Office" required>
            <input
              type="text"
              name="postOffice"
              placeholder="Post Office"
              className="input field"
              required
            />
          </Field>
          <Field label="District" required>
            <input
              type="text"
              name="district"
              placeholder="District"
              className="input field"
              required
            />
          </Field>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <Field label="Pin Code" required>
            <input
              type="text"
              name="pincode"
              placeholder="Pin Code"
              inputMode="numeric"
              className="input field"
              required
            />
          </Field>
          <Field label="Mobile No." required>
            <input
              type="tel"
              name="mobile"
              placeholder="Enter Mobile No."
              inputMode="tel"
              className="input field"
              required
            />
          </Field>
          <Field label="State" required>
            <select
              name="state"
              className="input field"
              defaultValue={states[0]}
              required
            >
              {states.map((state) => (
                <option
                  key={state}
                  value={state === "Select State" ? "" : state}
                >
                  {state}
                </option>
              ))}
            </select>
          </Field>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Email Id" required>
            <input
              type="email"
              name="email"
              placeholder="Enter Email Id"
              className="input field"
              required
            />
          </Field>
          <Field label="Your Messages (if any)">
            <textarea
              name="message"
              placeholder="Type your message"
              className="input field min-h-[140px] resize-y"
            />
          </Field>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <span className="text-sm text-slate-700">2 - 2 = ?</span>
          <input
            type="number"
            name="captcha"
            placeholder="Your answer"
            className="input field w-40"
            required
          />
        </div>

        <div className="pt-2">
          <button
            type="submit"
            className="w-full rounded-xl bg-linear-to-r from-[#ff7b21] to-[#ff4b1f] px-4 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-lg transition hover:brightness-110 sm:w-auto"
          >
            Submit
          </button>
        </div>
      </form>
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
