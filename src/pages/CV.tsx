import { useEffect } from "react";
import { personalInfo, aboutMe, skills, projects, experience, achievements, certificates } from "@/data/portfolioData";
import { Mail, Phone, MapPin, Linkedin, Github, Globe } from "lucide-react";

const CV = () => {
  useEffect(() => {
    // Auto-trigger print dialog after page loads
    const timer = setTimeout(() => {
      window.print();
    }, 600);
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

      <div className="max-w-[210mm] mx-auto px-8 py-10 print:px-10 print:py-8">
        {/* Header */}
        <header className="mb-6 border-b-2 border-gray-800 pb-4">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            {personalInfo.name}
          </h1>
          <p className="text-base font-medium text-gray-600 mt-1">
            {personalInfo.headline}
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-3 text-xs text-gray-600">
            <span className="flex items-center gap-1">
              <Mail className="w-3 h-3" />
              {personalInfo.email}
            </span>
            <span className="flex items-center gap-1">
              <Phone className="w-3 h-3" />
              {personalInfo.phone}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              {personalInfo.location}
            </span>
            <span className="flex items-center gap-1">
              <Linkedin className="w-3 h-3" />
              {personalInfo.socialLinks.linkedin.replace("https://", "")}
            </span>
            <span className="flex items-center gap-1">
              <Github className="w-3 h-3" />
              {personalInfo.socialLinks.github.replace("https://", "")}
            </span>
          </div>
        </header>

        {/* Summary */}
        <section className="mb-5">
          <h2 className="text-sm font-bold uppercase tracking-wider text-gray-800 border-b border-gray-300 pb-1 mb-2">
            Summary
          </h2>
          <p className="text-xs leading-relaxed text-gray-700">
            {aboutMe.introduction.split("\n\n")[0]}
          </p>
        </section>

        {/* Education */}
        <section className="mb-5">
          <h2 className="text-sm font-bold uppercase tracking-wider text-gray-800 border-b border-gray-300 pb-1 mb-2">
            Education
          </h2>
          {aboutMe.education.map((edu, i) => (
            <div key={i} className="mb-2">
              <div className="flex justify-between items-baseline">
                <h3 className="text-xs font-bold text-gray-900">{edu.degree}</h3>
                <span className="text-xs text-gray-500">{edu.year}</span>
              </div>
              <p className="text-xs text-gray-600">
                {edu.institution} — GPA: {edu.gpa}
              </p>
              {edu.highlights.length > 0 && (
                <ul className="list-disc list-inside text-xs text-gray-600 mt-0.5">
                  {edu.highlights.map((h, j) => (
                    <li key={j}>{h}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </section>

        {/* Skills */}
        <section className="mb-5">
          <h2 className="text-sm font-bold uppercase tracking-wider text-gray-800 border-b border-gray-300 pb-1 mb-2">
            Technical Skills
          </h2>
          <div className="space-y-1">
            {skills.categories.map((cat, i) => (
              <div key={i} className="text-xs">
                <span className="font-semibold text-gray-800">{cat.name}: </span>
                <span className="text-gray-600">{cat.skills.join(", ")}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="mb-5">
          <h2 className="text-sm font-bold uppercase tracking-wider text-gray-800 border-b border-gray-300 pb-1 mb-2">
            Projects
          </h2>
          {featuredProjects.map((project) => (
            <div key={project.id} className="mb-3">
              <div className="flex justify-between items-baseline">
                <h3 className="text-xs font-bold text-gray-900">{project.title}</h3>
                <span className="text-xs text-gray-500">
                  {project.techStack.slice(0, 4).join(" · ")}
                </span>
              </div>
              <p className="text-xs text-gray-600 mt-0.5">{project.description.slice(0, 200)}{project.description.length > 200 ? "..." : ""}</p>
              <ul className="list-disc list-inside text-xs text-gray-600 mt-0.5">
                {project.features.slice(0, 3).map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Leadership & Experience */}
        <section className="mb-5">
          <h2 className="text-sm font-bold uppercase tracking-wider text-gray-800 border-b border-gray-300 pb-1 mb-2">
            Leadership & Organizational Experience
          </h2>
          {leadershipExp.map((exp) => (
            <div key={exp.id} className="mb-2">
              <div className="flex justify-between items-baseline">
                <h3 className="text-xs font-bold text-gray-900">{exp.role}</h3>
                <span className="text-xs text-gray-500">{exp.period}</span>
              </div>
              <p className="text-xs text-gray-600">{exp.organization}</p>
              <ul className="list-disc list-inside text-xs text-gray-600 mt-0.5">
                {exp.achievements.map((a, i) => (
                  <li key={i}>{a}</li>
                ))}
              </ul>
            </div>
          ))}

          {/* Other involvement - compact */}
          {otherExp.length > 0 && (
            <div className="mt-2">
              <h3 className="text-xs font-semibold text-gray-700 mb-1">Other Involvement</h3>
              {otherExp.map((exp) => (
                <div key={exp.id} className="mb-1.5">
                  <div className="flex justify-between items-baseline">
                    <span className="text-xs font-medium text-gray-800">{exp.role}</span>
                    <span className="text-xs text-gray-500">{exp.period}</span>
                  </div>
                  <p className="text-xs text-gray-500">{exp.organization}</p>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Achievements */}
        <section className="mb-5">
          <h2 className="text-sm font-bold uppercase tracking-wider text-gray-800 border-b border-gray-300 pb-1 mb-2">
            Achievements & Awards
          </h2>
          {achievements.map((a) => (
            <div key={a.id} className="flex justify-between items-baseline mb-1">
              <div>
                <span className="text-xs font-semibold text-gray-800">{a.title}</span>
                <span className="text-xs text-gray-500"> — {a.description}</span>
              </div>
              <span className="text-xs text-gray-500 flex-shrink-0 ml-2">{a.year}</span>
            </div>
          ))}
        </section>

        {/* Certificates */}
        <section>
          <h2 className="text-sm font-bold uppercase tracking-wider text-gray-800 border-b border-gray-300 pb-1 mb-2">
            Certifications
          </h2>
          {certificates.map((cert) => (
            <div key={cert.id} className="flex justify-between items-baseline mb-1">
              <div>
                <span className="text-xs font-semibold text-gray-800">{cert.title}</span>
                <span className="text-xs text-gray-500"> — {cert.issuer}</span>
              </div>
              <span className="text-xs text-gray-500">{cert.year}</span>
            </div>
          ))}
        </section>
      </div>

      {/* Print styles */}
      <style>{`
        @media print {
          @page {
            size: A4;
            margin: 12mm 10mm;
          }
          body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          .cv-page {
            font-family: 'Times New Roman', Georgia, serif;
          }
          .print\\:hidden {
            display: none !important;
          }
        }
        
        @media screen {
          .cv-page {
            font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
          }
        }
      `}</style>
    </div>
  );
};

export default CV;
