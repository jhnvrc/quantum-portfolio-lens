import { useEffect } from "react";
import { personalInfo, aboutMe, skills, projects, experience, certificates, languages } from "@/data/portfolioData";
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
    <div className="cv-page text-gray-900 min-h-screen bg-gray-200">
      {/* Print button (hidden in print) */}
      <div className="print:hidden fixed top-4 right-4 flex gap-2 z-50">
        <button
          onClick={() => window.print()}
          className="px-5 py-2.5 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors shadow-lg"
        >
          Save as PDF
        </button>
        <button
          onClick={() => window.history.back()}
          className="px-5 py-2.5 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors shadow-lg"
        >
          Back
        </button>
      </div>

      <div className="cv-container mx-auto print:mx-0 bg-white flex flex-col">
        {/* ===== HEADER ===== */}
        <header className="cv-header flex items-center gap-5 px-7 py-3.5 print:px-8 print:py-3 shrink-0" style={{ backgroundColor: '#1e293b' }}>
          <div className="cv-photo flex-shrink-0">
            <img
              src={personalInfo.profileImage}
              alt={personalInfo.name}
              className="w-[72px] h-[72px] rounded-full object-cover"
              style={{ borderColor: '#60a5fa', borderWidth: '2px', borderStyle: 'solid' }}
            />
          </div>
          <div className="flex-1">
            <h1 className="font-bold tracking-tight text-white" style={{ fontSize: '20px', lineHeight: '1.2' }}>
              {personalInfo.name}
            </h1>
            <p className="font-medium mt-0.5" style={{ color: '#93c5fd', fontSize: '9.5px' }}>
              {personalInfo.headline}
            </p>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-0.5 mt-1.5">
              <span className="flex items-center gap-1 text-gray-300" style={{ fontSize: '8px' }}>
                <Mail className="w-2.5 h-2.5" style={{ color: '#93c5fd' }} />
                {personalInfo.email}
              </span>
              <span className="flex items-center gap-1 text-gray-300" style={{ fontSize: '8px' }}>
                <Phone className="w-2.5 h-2.5" style={{ color: '#93c5fd' }} />
                {personalInfo.phone}
              </span>
              <span className="flex items-center gap-1 text-gray-300" style={{ fontSize: '8px' }}>
                <MapPin className="w-2.5 h-2.5" style={{ color: '#93c5fd' }} />
                {personalInfo.location}
              </span>
              <span className="flex items-center gap-1 text-gray-300" style={{ fontSize: '8px' }}>
                <Linkedin className="w-2.5 h-2.5" style={{ color: '#93c5fd' }} />
                {personalInfo.socialLinks.linkedin.replace("https://", "")}
              </span>
              <span className="flex items-center gap-1 text-gray-300" style={{ fontSize: '8px' }}>
                <Github className="w-2.5 h-2.5" style={{ color: '#93c5fd' }} />
                {personalInfo.socialLinks.github.replace("https://", "")}
              </span>
            </div>
          </div>
        </header>

        {/* ===== BODY — TWO COLUMNS ===== */}
        <div className="cv-body flex print:flex">
          {/* LEFT SIDEBAR */}
          <aside className="cv-sidebar w-[30%] px-4 py-2.5 print:px-4 print:py-2" style={{ backgroundColor: '#f1f5f9' }}>
            {/* Profile Summary */}
            <section className="mb-2.5">
              <h2 className="cv-section-title font-bold uppercase tracking-widest pb-0.5 mb-1" style={{ fontSize: '8.5px', color: '#1e293b', borderBottom: '1.5px solid #3b82f6' }}>
                Profile
              </h2>
              <p className="text-gray-700" style={{ fontSize: '8px', lineHeight: '1.45' }}>
                {aboutMe.introduction.split("\n\n")[0]}
              </p>
            </section>

            {/* Education */}
            <section className="mb-2.5">
              <h2 className="cv-section-title font-bold uppercase tracking-widest pb-0.5 mb-1" style={{ fontSize: '8.5px', color: '#1e293b', borderBottom: '1.5px solid #3b82f6' }}>
                Education
              </h2>
              {aboutMe.education.map((edu, i) => (
                <div key={i} className="mb-1.5">
                  <h3 className="font-bold text-gray-900" style={{ fontSize: '8.5px' }}>{edu.degree}</h3>
                  <p className="text-gray-600" style={{ fontSize: '8px' }}>{edu.institution}</p>
                  <p className="font-medium" style={{ fontSize: '8px', color: '#3b82f6' }}>{edu.year}</p>
                  {edu.gpa && (
                    <p className="font-bold mt-0.5" style={{ fontSize: '8.5px', color: '#2563eb' }}>GPA: {edu.gpa}</p>
                  )}
                  {edu.highlights.length > 0 && (
                    <ul className="text-gray-600 list-none" style={{ fontSize: '7.5px' }}>
                      {edu.highlights.map((h, j) => (
                        <li key={j} className="flex items-start gap-1">
                          <span style={{ color: '#3b82f6' }}>-</span> {h}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </section>

            {/* Technical Skills */}
            <section className="mb-2.5">
              <h2 className="cv-section-title font-bold uppercase tracking-widest pb-0.5 mb-1" style={{ fontSize: '8.5px', color: '#1e293b', borderBottom: '1.5px solid #3b82f6' }}>
                Technical Skills
              </h2>
              <div className="space-y-1">
                {skills.categories.map((cat, i) => (
                  <div key={i}>
                    <h3 className="font-semibold text-gray-800" style={{ fontSize: '8px' }}>{cat.name}</h3>
                    <p className="text-gray-600" style={{ fontSize: '7.5px', lineHeight: '1.35' }}>
                      {cat.skills.join(", ")}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Languages */}
            <section className="mb-2.5">
              <h2 className="cv-section-title font-bold uppercase tracking-widest pb-0.5 mb-1" style={{ fontSize: '8.5px', color: '#1e293b', borderBottom: '1.5px solid #3b82f6' }}>
                Languages
              </h2>
              {languages.map((lang, i) => (
                <div key={i} className="flex justify-between" style={{ fontSize: '8px' }}>
                  <span className="font-medium text-gray-800">{lang.language}</span>
                  <span className="text-gray-500">{lang.proficiency}</span>
                </div>
              ))}
            </section>

            {/* Certifications */}
            <section className="mb-2.5">
              <h2 className="cv-section-title font-bold uppercase tracking-widest pb-0.5 mb-1" style={{ fontSize: '8.5px', color: '#1e293b', borderBottom: '1.5px solid #3b82f6' }}>
                Certifications
              </h2>
              {certificates.filter(c => c.featured).slice(0, 5).map((cert) => (
                <div key={cert.id} className="mb-0.5">
                  <h3 className="font-semibold text-gray-800" style={{ fontSize: '8px' }}>{cert.title}</h3>
                  <p className="text-gray-500" style={{ fontSize: '7.5px' }}>{cert.issuer} | {cert.year}</p>
                </div>
              ))}
            </section>
          </aside>

          {/* RIGHT MAIN CONTENT */}
          <main className="cv-main flex-1 px-5 py-2.5 print:px-5 print:py-2">
            {/* Featured Projects */}
            <section className="mb-2.5">
              <h2 className="cv-section-title font-bold uppercase tracking-widest pb-0.5 mb-1.5" style={{ fontSize: '8.5px', color: '#1e293b', borderBottom: '1.5px solid #3b82f6' }}>
                Featured Projects
              </h2>
              {featuredProjects.map((project) => (
                <div key={project.id} className="mb-2">
                  <div className="flex justify-between items-baseline mb-0.5">
                    <h3 className="font-bold text-gray-900" style={{ fontSize: '9px' }}>{project.title}</h3>
                    <span className="text-gray-400 flex-shrink-0 ml-2" style={{ fontSize: '7px' }}>
                      {project.techStack.slice(0, 4).join(" | ")}
                    </span>
                  </div>
                  <ul className="text-gray-700 list-none ml-1" style={{ fontSize: '7.5px', lineHeight: '1.4' }}>
                    {project.features.slice(0, 3).map((f, i) => (
                      <li key={i} className="flex items-start gap-1">
                        <span style={{ color: '#3b82f6' }}>•</span> 
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            {/* Leadership Experience */}
            <section className="mb-2.5">
              <h2 className="cv-section-title font-bold uppercase tracking-widest pb-0.5 mb-1.5" style={{ fontSize: '8.5px', color: '#1e293b', borderBottom: '1.5px solid #3b82f6' }}>
                Leadership Experience
              </h2>
              {leadershipExp.map((exp) => (
                <div key={exp.id} className="mb-1.5">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold text-gray-900" style={{ fontSize: '9px' }}>{exp.role}</h3>
                    <span className="text-gray-400 flex-shrink-0 ml-2" style={{ fontSize: '7.5px' }}>{exp.period}</span>
                  </div>
                  <p className="font-medium" style={{ fontSize: '8px', color: '#3b82f6' }}>{exp.organization}</p>
                  <ul className="text-gray-600 mt-0.5 list-none" style={{ fontSize: '7.5px' }}>
                    {exp.achievements.map((a, i) => (
                      <li key={i} className="flex items-start gap-1">
                        <span style={{ color: '#3b82f6' }}>-</span> {a}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            {/* Other Involvement */}
            {otherExp.length > 0 && (
              <section>
                <h2 className="cv-section-title font-bold uppercase tracking-widest pb-0.5 mb-1.5" style={{ fontSize: '8.5px', color: '#1e293b', borderBottom: '1.5px solid #3b82f6' }}>
                  Other Involvement
                </h2>
                {otherExp.map((exp) => (
                  <div key={exp.id} className="mb-1">
                    <div className="flex justify-between items-baseline">
                      <span className="font-medium text-gray-800" style={{ fontSize: '8px' }}>{exp.role}</span>
                      <span className="text-gray-400 flex-shrink-0 ml-2" style={{ fontSize: '7px' }}>{exp.period}</span>
                    </div>
                    <p className="text-gray-500" style={{ fontSize: '7.5px' }}>{exp.organization}</p>
                    {exp.achievements && exp.achievements.length > 0 && (
                      <ul className="text-gray-600 mt-0.5 list-none" style={{ fontSize: '7px' }}>
                        {exp.achievements.slice(0, 4).map((a, i) => (
                          <li key={i} className="flex items-start gap-1">
                            <span style={{ color: '#94a3b8' }}>-</span> {a}
                          </li>
                        ))}
                        {exp.achievements.length > 4 && (
                          <li className="text-gray-400" style={{ fontSize: '6.5px' }}>
                            + {exp.achievements.length - 4} more activities
                          </li>
                        )}
                      </ul>
                    )}
                  </div>
                ))}
              </section>
            )}
          </main>
        </div>
      </div>

      {/* Print styles — strictly 1 page A4 */}
      <style>{`
        @media print {
          @page {
            size: A4 portrait;
            margin: 0;
          }
          html, body {
            margin: 0;
            padding: 0;
            width: 210mm;
            height: 297mm;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .cv-page {
            font-family: 'Segoe UI', 'Inter', system-ui, sans-serif;
            background-color: white !important;
            height: 297mm;
            width: 210mm;
            overflow: hidden;
          }
          .cv-container {
            width: 210mm;
            height: 297mm;
            overflow: hidden;
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
            height: calc(297mm - 68px);
            overflow: hidden;
          }
          .cv-photo img {
            border: 2px solid #60a5fa !important;
          }
          .print\\:hidden {
            display: none !important;
          }
        }
        
        @media screen {
          .cv-page {
            font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
            background-color: #d1d5db; /* gray-300 */
            padding: 32px 0;
            display: flex;
            justify-content: center;
          }
          .cv-container {
            width: 210mm;
            height: 297mm;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
            overflow: hidden;
            background-color: white;
          }
        }
      `}</style>
    </div>
  );
};

export default CV;
