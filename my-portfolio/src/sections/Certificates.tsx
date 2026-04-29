import { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
import "./Certificates.css";
import CertificateCard from "../components/CertificateCard";
import ihkPdf from "../assets/certificates/IHK_Abschlusszeugnis.pdf";
import apiPdf from "../assets/certificates/Coursera API Bases 4.pdf";
import b2Pdf from "../assets/certificates/B2.pdf";
import lePdf from "../assets/certificates/LE.pdf";


const courserasvg = `<?xml version="1.0" encoding="utf-8"?><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 122.88 62.77" style="enable-background:new 0 0 122.88 62.77" xml:space="preserve"><style type="text/css"><![CDATA[
      .st0{fill:#2A73CC;}
    ]]></style><g><path class="st0" d="M122.84,30.39c-0.02-0.48-0.05-0.95-0.09-1.43c0,0,0,0,0-0.01c0,0,0,0,0-0.01 c-0.46-5.18-2.17-10.03-5.08-14.41c-1.3-1.95-2.78-3.73-4.44-5.32c-2.42-2.33-5.23-4.26-8.39-5.78C100.09,1.15,94.83,0,89.22,0 c-0.55,0-1.12,0.01-1.7,0.03c-3.94,0.18-7.75,0.92-11.33,2.24c-3.61,1.31-6.76,3.03-9.33,5.1c-0.52,0.42-1.09,0.93-1.7,1.49 l-0.44,0.43l-0.6,0.64h0h0l-0.28,0.28l-0.14,0.15l-0.72,0.76c-0.53,0.6-1.04,1.2-1.51,1.78l0-0.01l-0.02-0.02 c-0.98,1.2-1.9,2.43-2.56,3.55c-0.45,0.71-0.9,1.45-1.32,2.19L51.7,30.49l0.01,0.01l-0.31,0.6l-0.65,1.31 c-1.29,2.61-2.67,5.2-4.21,7.35c-3.44,3.77-7.32,5.61-12.32,5.61c-0.35,0-0.71-0.02-1.07-0.04c-3.01-0.12-5.59-0.83-7.88-2.19 c-0.24-0.15-0.48-0.29-0.71-0.45c-1.87-1.24-3.3-2.84-4.38-4.83c-1.21-2.26-1.75-4.56-1.67-7.01c0.01-0.07,0.01-0.12,0.01-0.18 c0.16-3.89,1.65-6.92,4.63-9.53c0.73-0.63,1.49-1.16,2.28-1.63c0.11-0.07,0.22-0.13,0.34-0.19c2.22-1.21,4.75-1.81,7.64-1.81 l0.9,0.03c4.6,0.18,8.15,1.61,10.98,4.42l8.88-15.94c-2.12-1.42-4.52-2.64-7.16-3.64c-0.1-0.04-0.2-0.08-0.31-0.11 c-0.32-0.11-0.63-0.23-0.95-0.33c-2.81-0.94-5.76-1.52-8.79-1.78l0,0c-0.08-0.01-0.16-0.02-0.23-0.03 c-0.46-0.03-0.94-0.09-1.4-0.11C34.82,0.01,34.3,0,33.81,0h-0.29c-5.58,0.02-10.77,1.16-15.51,3.43C12.7,5.99,8.4,9.72,5.2,14.52 c-3.18,4.8-4.92,10.14-5.17,15.86C0.01,30.87,0,31.35,0,31.83c0,8,2.91,15.04,8.71,20.95c6.05,6.2,13.93,9.54,23.38,9.94 c0.61,0.03,1.2,0.04,1.8,0.04c5.35,0,10.3-0.95,14.74-2.86c1.11-0.47,2.19-1.03,3.29-1.65c0.6-0.34,1.16-0.71,1.72-1.1l0.42-0.28 l0.7-0.48c0.84-0.6,1.63-1.25,2.39-1.95l0.27-0.25c0.45-0.43,0.9-0.86,1.32-1.31l1.59-1.8l0.61-0.76l0.28-0.42l0.28-0.41 c2.36-3.97,10.06-18.43,10.06-18.43l0-0.03l0.46-0.88l0.38-0.69c1.13-2.07,1.95-3.53,3.04-5.07l0.03-0.05 c2.53-3.67,6.88-6.28,12.01-6.72c8.6-0.74,16.14,4.91,16.83,12.62c0.69,7.71-5.73,14.57-14.33,15.31 c-1.79,0.15-3.53,0.03-5.17-0.33l-0.04,0.02c-6.31-1.31-10.33-5.92-12.31-7.97l-8.28,15.22c0,0,2.57,2.59,4.33,3.89 c1.77,1.29,4.05,2.56,5.87,3.35c4.42,1.89,9.22,3.02,14.53,3.02c0.62,0,0.49,0,1.13-0.03c9.45-0.39,17.86-4.01,23.94-10.21 c5.75-5.89,8.87-12.61,8.9-20.57l0-0.24C122.87,31.28,122.86,30.83,122.84,30.39L122.84,30.39z"/></g></svg>`;

const LEsvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48.62006572591497 47.894672354981594" width="145.8601971777449" height="143.68401706494478"><!-- svg-source:excalidraw --><metadata></metadata><defs><style class="style-fonts">
      </style></defs><g stroke-linecap="round" transform="translate(10 10) rotate(0 14.310032862957485 13.947336177490826)"><path d="M28.62 13.95 C28.62 14.75, 28.55 15.57, 28.4 16.37 C28.26 17.16, 28.04 17.96, 27.76 18.72 C27.47 19.48, 27.12 20.22, 26.7 20.92 C26.29 21.62, 25.8 22.29, 25.27 22.91 C24.74 23.53, 24.14 24.11, 23.51 24.63 C22.87 25.15, 22.18 25.62, 21.47 26.03 C20.75 26.43, 19.98 26.78, 19.2 27.05 C18.43 27.33, 17.61 27.54, 16.79 27.68 C15.98 27.82, 15.14 27.89, 14.31 27.89 C13.48 27.89, 12.64 27.82, 11.83 27.68 C11.01 27.54, 10.19 27.33, 9.42 27.05 C8.64 26.78, 7.87 26.43, 7.16 26.03 C6.44 25.62, 5.75 25.15, 5.11 24.63 C4.48 24.11, 3.88 23.53, 3.35 22.91 C2.82 22.29, 2.33 21.62, 1.92 20.92 C1.5 20.22, 1.15 19.48, 0.86 18.72 C0.58 17.96, 0.36 17.16, 0.22 16.37 C0.07 15.57, 0 14.75, 0 13.95 C0 13.14, 0.07 12.32, 0.22 11.53 C0.36 10.73, 0.58 9.94, 0.86 9.18 C1.15 8.42, 1.5 7.67, 1.92 6.97 C2.33 6.27, 2.82 5.6, 3.35 4.98 C3.88 4.36, 4.48 3.78, 5.11 3.26 C5.75 2.74, 6.44 2.27, 7.16 1.87 C7.87 1.46, 8.64 1.12, 9.42 0.84 C10.19 0.57, 11.01 0.35, 11.83 0.21 C12.64 0.07, 13.48 0, 14.31 0 C15.14 0, 15.98 0.07, 16.79 0.21 C17.61 0.35, 18.43 0.57, 19.2 0.84 C19.98 1.12, 20.75 1.46, 21.47 1.87 C22.18 2.27, 22.87 2.74, 23.51 3.26 C24.14 3.78, 24.74 4.36, 25.27 4.98 C25.8 5.6, 26.29 6.27, 26.7 6.97 C27.12 7.67, 27.47 8.42, 27.76 9.18 C28.04 9.94, 28.26 10.73, 28.4 11.53 C28.55 12.32, 28.58 13.54, 28.62 13.95 C28.66 14.35, 28.66 13.54, 28.62 13.95" stroke="#f08c00" stroke-width="4" fill="none"></path></g><g stroke-linecap="round"><g transform="translate(23.71652919583022 16.330705782690814) rotate(0 -3.1983253172969626 6.561512764351477)"><path d="M0 0 C-1.07 2.19, -5.33 10.94, -6.4 13.12 M0 0 C-1.07 2.19, -5.33 10.94, -6.4 13.12" stroke="#f08c00" stroke-width="2" fill="none"></path></g></g><mask></mask><g stroke-linecap="round"><g transform="translate(17.319878561236294 29.453731311393767) rotate(0 5.275588152242406 -0.03297242595149896)"><path d="M0 0 C1.76 -0.01, 8.79 -0.05, 10.55 -0.07 M0 0 C1.76 -0.01, 8.79 -0.05, 10.55 -0.07" stroke="#f08c00" stroke-width="2" fill="none"></path></g></g><mask></mask><g transform="translate(28.794282792363504 19.957672637357405) rotate(0 0.00005000000000165983 0.00004999999998744897)" stroke="none"><path fill="#f08c00" d="M 1.57,-1.57 Q 1.57,-1.57 1.77,-1.27 1.98,-0.98 2.09,-0.64 2.20,-0.29 2.19,0.05 2.18,0.41 2.05,0.75 1.93,1.09 1.70,1.37 1.48,1.65 1.18,1.84 0.87,2.04 0.52,2.12 0.18,2.21 -0.17,2.18 -0.53,2.15 -0.86,2.01 -1.19,1.87 -1.46,1.63 -1.73,1.39 -1.90,1.07 -2.08,0.76 -2.15,0.41 -2.21,0.05 -2.17,-0.29 -2.12,-0.65 -1.96,-0.97 -1.80,-1.29 -1.54,-1.54 -1.29,-1.80 -0.97,-1.96 -0.65,-2.12 -0.29,-2.17 0.06,-2.21 0.41,-2.15 0.76,-2.08 1.07,-1.90 1.39,-1.73 1.63,-1.46 1.87,-1.19 2.01,-0.86 2.15,-0.53 2.18,-0.17 2.21,0.18 2.12,0.52 2.03,0.87 1.84,1.18 1.65,1.48 1.37,1.70 1.09,1.93 0.75,2.05 0.41,2.18 0.05,2.19 -0.30,2.20 -0.64,2.09 -0.98,1.98 -1.27,1.77 -1.57,1.56 -1.57,1.57 -1.57,1.57 -1.73,1.35 -1.90,1.14 -2.01,0.90 -2.12,0.66 -2.16,0.39 -2.21,0.13 -2.20,-0.13 -2.18,-0.40 -2.10,-0.65 -2.02,-0.91 -1.88,-1.14 -1.74,-1.36 -1.55,-1.55 -1.36,-1.74 -1.14,-1.88 -0.91,-2.02 -0.65,-2.10 -0.40,-2.18 -0.13,-2.20 0.13,-2.21 0.39,-2.16 0.66,-2.12 0.90,-2.01 1.14,-1.90 1.35,-1.73 1.57,-1.57 1.57,-1.57 L 1.57,-1.57 Z"></path></g></svg>`;


type Certificate = {
  title: string;
  date: string;
  image: string;
  certificateUrl: string;
  type: "svg" | "text";
  color?: string;
};

const certificates: Certificate[] = [
   {
    title: "API Basics 4 - Personal Dashboard",
    date: "2026",
    image:  courserasvg ,
    certificateUrl: apiPdf,
    type: "svg",
    color: "#06b6d4",
  },
  {
    title: "IHK Abschluss - Anwendungsentwicklung",
    date: "2025",
    image:  "ihk" ,
    certificateUrl: ihkPdf,
    type: "text",
    color: "#0062ff",
  },
  {
    title: "LPIC-1 Linux",
    date: "2024",
    image:  LEsvg ,
    certificateUrl: lePdf,
    type: "svg",
    color: "#fff700",
  },
 
  {
    title: "Telc B2 Deutsch",
    date: "2022",
    image:  "TELC" ,
    certificateUrl: b2Pdf,
    type: "text",
    color: "#b0b0b0",
  },
];

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<(typeof certificates)[number] | null>(null);

  useEffect(() => {
    if (!selectedCertificate) {
      document.body.style.overflow = "";
      return undefined;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedCertificate(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedCertificate]);

  return (
    <>
      <div className="w-full max-w-5xl">
        <p className="mt-2 text-gray-400 text-base md:text-lg leading-relaxed">
          Qualifications and completed certifications.
        </p>

        <div className="certificates-grid mt-10">
          {certificates.map((certificate) => (
            <CertificateCard
              key={`${certificate.title}-${certificate.date}`}
              title={certificate.title}
              date={certificate.date}
              image={certificate.image}
              type={certificate.type}
              color={certificate.color}
              onOpen={() => setSelectedCertificate(certificate)}
            />
          ))}
        </div>
      </div>

      {selectedCertificate ? (
        <div
          className="certificate-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="certificate-modal-title"
          onClick={() => setSelectedCertificate(null)}
        >
          <div className="certificate-modal__panel" onClick={(event) => event.stopPropagation()}>
            <div className="certificate-modal__header">
              <div>
                <p className="certificate-modal__eyebrow">Certificate Preview</p>
                <h3 id="certificate-modal-title" className="certificate-modal__title">
                  {selectedCertificate.title}
                </h3>
              </div>

              <button
                type="button"
                className="certificate-modal__close"
                onClick={() => setSelectedCertificate(null)}
                aria-label="Close certificate preview"
              >
                <FiX aria-hidden="true" />
              </button>
            </div>

            <div className="certificate-modal__viewer">
              <iframe
                src={selectedCertificate.certificateUrl}
                title={`${selectedCertificate.title} certificate`}
                className="certificate-modal__iframe"
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Certificates;
