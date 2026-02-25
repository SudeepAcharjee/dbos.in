"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

type Item = {
  text: string;
  href?: string;
};

const recognitions: Item[] = [
  {
    text: "Ministry of Human Resource Development - Certificate of Approval",
    href: "/recog/Ministry-of-Human-Researc-Development-Certificate-of-Approval.jpg",
  },
  {
    text: "Dihing Board of Open Schooling is a Member of Association of Indian Universities",
    href: "#",
  },
  {
    text: "Equivalence to / Recognition Of DBOS– (COBSE ) Council of Boards of School Education in India",
    href: "/recog/Council-of-Boards-of-School-Education-in-India.jpg",
  },
  {
    text: "Equivalence to / Recognition of Dihing Board of Open Schooling for purposes of academic pursuit in State and University",
    href: "/recog/Equivalence-receved-from-Madhyamik-Shiksha-Parishad-Uttar-Pradesh.jpg",
  },
  {
    text: "Equivalenced / Recognition from Madhyamik Shiksha Parishad, Uttar Pradesh Certified by Principal Secretary to Governor (U.P.)",
    href: "/recog/Equivalence-receved-from-Madhyamik-Shiksha-Parishad-Uttar-Pradesh-certified-by-Secretory-of-Governer.jpg",
  },
  {
    text: "Ministry of Electronics & Information Technology (MeitY) - Certification Of Affiliation",
    href: "/recog/Ministry-of-Electronics-Information-Technology-Certification-Of-Affiliation.jpg",
  },
  {
    text: "The Gazette of India Ministry of Human Resource Development Notification",
    href: "/recog/Ministry-of-Human-Researc-Development.jpg",
  },
  {
    text: "The Gazette of India Gazette (Extra), Government of India",
    href: "/recog/The-Gazette-of-India.jpg",
  },
  {
    text: "Recognition by National Institute of Open Schooling (NIOS)",
    href: "/recog/DBOS-NIOS-LETTER.jpg",
  },
  {
    text: "Recognition by Association of Indian Universities (AIU) & Trust Approval",
    href: "/recog/dbos-AIU-Letter-for-Trust.jpg",
  },
  {
    text: "Government of India Lok Sabha Recognition Letter – Dihing Board of Open Schooling (DBOS)",
    href: "/recog/government-of-india-lok-sabha-recognition-letter–dihing-board-of-open-schooling-dbos.jpg",
  },
  {
    text: "Ministry of Education (HRD) Approval – Official Notification for Dihing Board of Open Schooling (DBOS)",
    href: "/recog/ministry-of-education-HRD-approval–official-notification-for-dihing-board-of-open-schooling-dbos.jpg",
  },
  {
    text: "Department of Posts – Approval for Acceptance of Academic Certificates",
    href: "/recog/Department of Posts – Approval for Acceptance of Academic Certificates.JPG.jpeg",
  },
  {
    text: "Government of Uttar Pradesh – NOC & Operational Permission Letter",
    href: "/recog/Government of Uttar Pradesh – NOC & Operational Permission Letter.jpeg",
  },
  {
    text: "Ministry of Human Resource Department – DigiLocker & Academic Approval Letter",
    href: "/recog/Ministry of Human Resource Department – DigiLocker & Academic Approval Letter.JPG.jpeg",
  },
];

export default function RecognitionApprovals() {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    title: string;
  } | null>(null);

  // Handle Escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };

    if (selectedImage) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

  const handleImageClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: Item
  ) => {
    // Only open modal for valid image links (not #)
    if (item.href && item.href !== "#") {
      e.preventDefault();
      setSelectedImage({
        src: item.href,
        title: item.text,
      });
    }
  };

  return (
    <>
      <section className="mx-auto mb-8 max-w-6xl rounded-3xl border border-orange-500 bg-white px-4 py-8 shadow-sm sm:px-8 sm:py-10">
        <h1 className="text-2xl font-extrabold text-[#1b1260] sm:text-3xl">
          Our Recognition &amp; Approvals
        </h1>
        <ul className="mt-6 space-y-3 text-slate-800">
          {recognitions.map((item, idx) => (
            <li
              key={`${item.text}-${idx}`}
              className="flex items-start gap-3 rounded-xl border border-orange-100 bg-orange-50/40 px-3 py-3 transition hover:bg-orange-50"
            >
              <span className="mt-1 text-orange-500">↪</span>
              {item.href ? (
                <a
                  href={item.href}
                  onClick={(e) => handleImageClick(e, item)}
                  className={`text-sm font-semibold sm:text-base ${item.href !== "#"
                      ? "cursor-pointer text-blue-700 underline-offset-2 hover:underline"
                      : "cursor-not-allowed text-gray-500"
                    }`}
                >
                  {item.text} – Click Here
                </a>
              ) : (
                <span className="text-sm font-semibold sm:text-base">
                  {item.text}
                </span>
              )}
            </li>
          ))}
        </ul>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative flex max-h-[90vh] w-full max-w-4xl flex-col items-center animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -right-4 -top-4 z-10 rounded-full bg-white p-2 shadow-lg transition hover:bg-gray-100"
              aria-label="Close modal"
            >
              <X className="h-6 w-6 text-gray-700" />
            </button>

            {/* Image */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-h-[80vh] w-auto max-w-full rounded-lg object-contain shadow-2xl"
            />

            {/* Title */}
            <div className="mt-4 w-full max-w-2xl rounded-lg bg-white px-4 py-3 shadow-lg">
              <p className="text-center text-sm font-semibold text-gray-800">
                {selectedImage.title}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
