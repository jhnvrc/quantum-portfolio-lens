import { useEffect } from "react";
import { personalInfo, aboutMe, skills, projects, experience, certificates } from "@/data/portfolioData";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

const CV = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.print();
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const featuredProjects = projects.filter((p) => p.featured).slice(0, 4);
  const leadershipExp = experience.organizational.filter((e) => e.category === "leadership");
  const otherExp = experience.organizational.filter((e) => e.category !== "leadership");

  return (
    <div className="cv-page bg-white text-gray-900 min-h-screen">
      {/* Print button (hidden in print) */}
      <div className="print:hidden fixed top-4 right-4 flex gap-2 z-50">
        <button
          onClick={() => window.print()}
          className="px-5 py-2.5 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors shadow-lg"
        >
          📄 Save as PDF
        </button>
        <button
          onClick={() => window.history.back()}
          className="px-5 py-2.5 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors shadow-lg"
        >
          ← Back
        </button>
      </div>

      <div className="cv-container max-w-[210mm] mx-auto print:mx-0">
        {/* ===== HEADER WITH PHOTO ===== */}
        <header className="cv-header flex items-center gap-6 px-8 py-6 print:px-10 print:py-5" style={{ backgroundColor: '#1e293b' }}>
          {/* Profile Photo */}
          <div className="cv-photo flex-shrink-0">
            <img
              src={personalInfo.profileImage}
              alt={personalInfo.name}
              className="w-24 h-24 rounded-full object-cover border-3"
              style={{ borderColor: '#60a5fa', borderWidth: '3px', borderStyle: 'solid' }}
            />
          </div>

          {/* Name & Contact */}
          <div className="flex-1">
            <h1 className="text-2xl font-bold tracking-tight text-white" style={{ fontSize: '26px', lineHeight: '1.2' }}>
              {personalInfo.name}
            </h1>
            <p className="text-sm font-medium mt-1" style={{ color: '#93c5fd' }}>
              {personalInfo.headline}
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2.5">
              <span className="flex items-center gap-1 text-xs text-gray-300">
                <Mail className="w-3 h-3" style={{ color: '#93c5fd' }} />
                {personalInfo.email}
              </span>
              <span className="flex items-center gap-1 text-xs text-gray-300">
                <Phone className="w-3 h-3" style={{ color: '#93c5fd' }} />
                {personalInfo.phone}
              </span>
              <span className="flex items-center gap-1 text-xs text-gray-300">
                <MapPin className="w-3 h-3" style={{ color: '#93c5fd' }} />
                {personalInfo.location}
              </span>
              <span className="flex items-center gap-1 text-xs text-gray-300">
                <Linkedin className="w-3 h-3" style={{ color: '#93c5fd' }} />
                {personalInfo.socialLinks.linkedin.replace("https://", "")}
              </span>
              <span className="flex items-center gap-1 text-xs text-gray-300">
                <Github className="w-3 h-3" style={{ color: '#93c5fd' }} />
                {personalInfo.socialLinks.github.replace("https://", "")}
              </span>
            </div>
          </div>
        </header>

        {/* ===== BODY ===== */}
        <div className="cv-body flex print:flex">
          {/* LEFT SIDEBAR */}
          <aside className="cv-sidebar w-[32%] px-5 py-5 print:px-5 print:py-4" style={{ backgroundColor: '#f1f5f9' }}>
            {/* Summary */}
            <section className="mb-5">
              <h2 className="cv-section-title text-xs font-bold uppercase tracking-widest pb-1.5 mb-2" style={{ color: '#1e293b', borderBottom: '2px solid #3b82f6' }}>
                Profile
              </h2>
              <p className="text-xs leading-relaxed text-gray-700" style={{ fontSize: '10px', lineHeight: '1.6' }}>
                {aboutMe.introduction.split("\n\n")[0]}
              </p>
            </section>

            {/* Education */}
            <section className="mb-5">
              <h2 className="cv-section-title text-xs font-bold uppercase tracking-widest pb-1.5 mb-2" style={{ color: '#1e293b', borderBottom: '2px solid #3b82f6' }}>
                Education
              </h2>
              {aboutMe.education.map((edu, i) => (
                <div key={i} className="mb-3">
                  <h3 className="font-bold text-gray-900" style={{ fontSize: '10.5px' }}>{edu.degree}</h3>
                  <p className="text-gray-600 mt-0.5" style={{ fontSize: '10px' }}>{edu.institution}</p>
                  <p className="font-medium mt-0.5" style={{ fontSize: '10px', color: '#3b82f6' }}>{edu.year}</p>
                  {edu.gpa && (
                    edu.institution.includes("President") ? (
                      <div className="mt-1.5 inline-block px-1.5 py-0.5 print:px-2" style={{ backgroundColor: '#eff6ff', border: '1px solid #3b82f6', borderRadius: '4px' }}>
                        <p className="font-bold whitespace-nowrap" style={{ fontSize: '10.5px', color: '#2563eb' }}>⭐ GPA: {edu.gpa} ⭐</p>
                      </div>
                    ) : (
                      <p className="text-gray-600 mt-0.5" style={{ fontSize: '10px' }}>GPA: {edu.gpa}</p>
                    )
                  )}
                  {edu.highlights.length > 0 && (
                    <ul className="text-gray-600 mt-0.5 list-none" style={{ fontSize: '9.5px' }}>
                      {edu.highlights.map((h, j) => (
                        <li key={j} className="flex items-start gap-1">
                          <span style={{ color: '#3b82f6' }}>▸</span> {h}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </section>

            {/* Technical Skills */}
            <section className="mb-5">
              <h2 className="cv-section-title text-xs font-bold uppercase tracking-widest pb-1.5 mb-2" style={{ color: '#1e293b', borderBottom: '2px solid #3b82f6' }}>
                Skills
              </h2>
              <div className="space-y-2">
                {skills.categories.map((cat, i) => (
                  <div key={i}>
                    <h3 className="font-semibold text-gray-800" style={{ fontSize: '10px' }}>{cat.name}</h3>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {cat.skills.map((skill, j) => (
                        <span key={j} className="px-1.5 py-0.5 rounded text-gray-700" style={{ fontSize: '8.5px', backgroundColor: '#e2e8f0' }}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Certifications */}
            <section>
              <h2 className="cv-section-title text-xs font-bold uppercase tracking-widest pb-1.5 mb-2" style={{ color: '#1e293b', borderBottom: '2px solid #3b82f6' }}>
                Certifications
              </h2>
              {certificates.map((cert) => (
                <div key={cert.id} className="mb-2">
                  <h3 className="font-semibold text-gray-800" style={{ fontSize: '10px' }}>{cert.title}</h3>
                  <p className="text-gray-500" style={{ fontSize: '9.5px' }}>{cert.issuer} • {cert.year}</p>
                </div>
              ))}
            </section>
          </aside>

          {/* RIGHT MAIN CONTENT */}
          <main className="cv-main flex-1 px-6 py-5 print:px-6 print:py-4">
            {/* Projects */}
            <section className="mb-5">
              <h2 className="cv-section-title text-xs font-bold uppercase tracking-widest pb-1.5 mb-3" style={{ color: '#1e293b', borderBottom: '2px solid #3b82f6' }}>
                Projects
              </h2>
              {featuredProjects.map((project) => (
                <div key={project.id} className="mb-3.5">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold text-gray-900" style={{ fontSize: '11px' }}>{project.title}</h3>
                    <span className="text-gray-400 flex-shrink-0 ml-2" style={{ fontSize: '9px' }}>
                      {project.techStack.slice(0, 4).join(" · ")}
                    </span>
                  </div>
                  <p className="text-gray-600 mt-0.5" style={{ fontSize: '10px', lineHeight: '1.5' }}>
                    {project.description.slice(0, 220)}{project.description.length > 220 ? "..." : ""}
                  </p>
                  <ul className="text-gray-600 mt-1 list-none space-y-0.5" style={{ fontSize: '9.5px' }}>
                    {project.features.slice(0, 3).map((f, i) => (
                      <li key={i} className="flex items-start gap-1">
                        <span style={{ color: '#3b82f6' }}>▸</span> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            {/* Leadership & Experience */}
            <section className="mb-5">
              <h2 className="cv-section-title text-xs font-bold uppercase tracking-widest pb-1.5 mb-3" style={{ color: '#1e293b', borderBottom: '2px solid #3b82f6' }}>
                Leadership & Experience
              </h2>
              {leadershipExp.map((exp) => (
                <div key={exp.id} className="mb-3">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold text-gray-900" style={{ fontSize: '11px' }}>{exp.role}</h3>
                    <span className="text-gray-400 flex-shrink-0 ml-2" style={{ fontSize: '9.5px' }}>{exp.period}</span>
                  </div>
                  <p className="font-medium" style={{ fontSize: '10px', color: '#3b82f6' }}>{exp.organization}</p>
                  <ul className="text-gray-600 mt-0.5 list-none space-y-0.5" style={{ fontSize: '9.5px' }}>
                    {exp.achievements.map((a, i) => (
                      <li key={i} className="flex items-start gap-1">
                        <span style={{ color: '#3b82f6' }}>▸</span> {a}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Other involvement */}
              {otherExp.length > 0 && (
                <div className="mt-3">
                  <h3 className="font-semibold text-gray-700 mb-1.5" style={{ fontSize: '10.5px' }}>Other Involvement</h3>
                  {otherExp.map((exp) => (
                    <div key={exp.id} className="mb-1.5">
                      <div className="flex justify-between items-baseline">
                        <span className="font-medium text-gray-800" style={{ fontSize: '10px' }}>{exp.role}</span>
                        <span className="text-gray-400 flex-shrink-0 ml-2" style={{ fontSize: '9px' }}>{exp.period}</span>
                      </div>
                      <p className="text-gray-500" style={{ fontSize: '9.5px' }}>{exp.organization}</p>
                      {exp.achievements && exp.achievements.length > 0 && (
                        <ul className="text-gray-600 mt-0.5 list-none" style={{ fontSize: '9px' }}>
                          {exp.achievements.slice(0, 3).map((a, i) => (
                            <li key={i} className="flex items-start gap-1">
                              <span style={{ color: '#94a3b8' }}>▸</span> {a}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </section>
          </main>
        </div>
      </div>

      {/* Print styles */}
      <style>{`
        @media print {
          @page {
            size: A4;
            margin: 0;
          }
          html, body {
            margin: 0;
            padding: 0;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .cv-page {
            font-family: 'Segoe UI', 'Inter', system-ui, sans-serif;
          }
          .cv-container {
            max-width: 100%;
          }
          .cv-header {
            background-color: #1e293b !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          .cv-sidebar {
            background-color: #f1f5f9 !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          .cv-body {
            display: flex !important;
          }
          .cv-photo img {
            border: 3px solid #60a5fa !important;
          }
          .print\\:hidden {
            display: none !important;
          }
        }
        
        @media screen {
          .cv-page {
            font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
            background-color: #e5e7eb;
            padding: 24px 0;
          }
          .cv-container {
            box-shadow: 0 4px 30px rgba(0,0,0,0.15);
            border-radius: 4px;
            overflow: hidden;
          }
        }
      `}</style>
    </div>
  );
};

export default CV;
