import { personalInfo, aboutMe, skills, projects, experience, certificates, languages } from "@/data/portfolioData";

const CV = () => {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <div className="cv-root">
      {/* ── Print / Back bar ── */}
      <div className="no-print cv-toolbar">
        <span className="cv-toolbar-title">Johana Veronica Setiawan – CV (ATS Format)</span>
        <div className="cv-toolbar-actions">
          <button onClick={() => window.print()} className="cv-btn-primary">
            🖨 Save as PDF
          </button>
          <button onClick={() => window.history.back()} className="cv-btn-secondary">
            ← Back
          </button>
        </div>
        <span className="cv-toolbar-hint">
          Print dialog → Destination: "Save as PDF" → Paper: A4 → Background graphics: ON
        </span>
      </div>

      {/* ══════════════════════════════════════
          PAGE 1 — Profile · Education · Skills · Experience
          ══════════════════════════════════════ */}
      <div className="cv-page">

        {/* ── HEADER ── */}
        <header className="cv-header">
          <h1 className="cv-name">{personalInfo.name.toUpperCase()}</h1>
          <p className="cv-headline">{personalInfo.headline}</p>
          <div className="cv-contacts">
            <span>{personalInfo.email}</span>
            <span className="cv-sep">|</span>
            <span>{personalInfo.phone}</span>
            <span className="cv-sep">|</span>
            <span>{personalInfo.location}</span>
            <span className="cv-sep">|</span>
            <a href={personalInfo.socialLinks.linkedin} className="cv-link">
              {personalInfo.socialLinks.linkedin.replace("https://", "")}
            </a>
            <span className="cv-sep">|</span>
            <a href={personalInfo.socialLinks.github} className="cv-link">
              {personalInfo.socialLinks.github.replace("https://", "")}
            </a>
          </div>
        </header>

        {/* ── PROFILE ── */}
        <section className="cv-section">
          <div className="cv-section-title">PROFILE</div>
          <p className="cv-body-text">{aboutMe.introduction.split("\n\n")[0]}</p>
        </section>

        {/* ── EDUCATION ── */}
        <section className="cv-section">
          <div className="cv-section-title">EDUCATION</div>
          {aboutMe.education.map((edu, i) => (
            <div key={i} className="cv-entry">
              <div className="cv-entry-header">
                <span className="cv-entry-title">{edu.degree}</span>
                <span className="cv-entry-right">{edu.year}</span>
              </div>
              <div className="cv-entry-sub">
                {edu.institution}
                {edu.gpa && <span className="cv-gpa"> · GPA: {edu.gpa}</span>}
              </div>
              {edu.highlights.length > 0 && (
                <ul className="cv-bullets">
                  {edu.highlights.map((h, j) => <li key={j}>{h}</li>)}
                </ul>
              )}
            </div>
          ))}
        </section>

        {/* ── SKILLS ── */}
        <section className="cv-section">
          <div className="cv-section-title">SKILLS</div>
          <div className="cv-skills-grid">
            {skills.categories.map((cat, i) => (
              <div key={i} className="cv-skill-row">
                <span className="cv-skill-label">{cat.name}:</span>{" "}
                <span className="cv-skill-values">{cat.skills.join(", ")}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── ORGANIZATIONAL EXPERIENCE ── */}
        <section className="cv-section">
          <div className="cv-section-title">ORGANIZATIONAL EXPERIENCE</div>
          {experience.organizational
            .filter((e) => e.category === "leadership" || e.id === "6")
            .map((exp) => (
              <div key={exp.id} className="cv-entry">
                <div className="cv-entry-header">
                  <span className="cv-entry-title">{exp.role}</span>
                  <span className="cv-entry-right">{exp.period}</span>
                </div>
                <div className="cv-entry-sub">{exp.organization}</div>
                <ul className="cv-bullets">
                  {exp.achievements.map((a, i) => <li key={i}>{a}</li>)}
                </ul>
              </div>
            ))}
        </section>

        {/* ── LANGUAGES ── */}
        <section className="cv-section">
          <div className="cv-section-title">LANGUAGES</div>
          <div className="cv-lang-row">
            {languages.map((lang, i) => (
              <span key={i} className="cv-lang-item">
                <strong>{lang.language}</strong> – {lang.proficiency}
                {i < languages.length - 1 && <span className="cv-sep">·</span>}
              </span>
            ))}
          </div>
        </section>

        <div className="cv-page-num">1 / 2</div>
      </div>

      {/* ══════════════════════════════════════
          PAGE 2 — Projects · Certificates · Activities
          ══════════════════════════════════════ */}
      <div className="cv-page">

        {/* ── PROJECTS ── */}
        <section className="cv-section">
          <div className="cv-section-title">PROJECTS</div>

          {featuredProjects.map((project) => (
            <div key={project.id} className="cv-entry">
              <div className="cv-entry-header">
                <span className="cv-entry-title">{project.title}</span>
                <span className="cv-entry-right cv-stack">{project.techStack.slice(0, 5).join(" · ")}</span>
              </div>
              {(project.githubUrl || project.liveUrl) && (
                <div className="cv-project-links">
                  {project.githubUrl && (
                    <span>GitHub: <a href={project.githubUrl} className="cv-link">{project.githubUrl.replace("https://", "")}</a></span>
                  )}
                  {project.githubUrl && project.liveUrl && <span className="cv-sep">·</span>}
                  {project.liveUrl && (
                    <span>Live: <a href={project.liveUrl} className="cv-link">{project.liveUrl.replace("https://", "")}</a></span>
                  )}
                </div>
              )}
              <ul className="cv-bullets">
                {project.features.slice(0, 3).map((f, i) => <li key={i}>{f}</li>)}
              </ul>
            </div>
          ))}

          {otherProjects.slice(0, 3).map((project) => (
            <div key={project.id} className="cv-entry">
              <div className="cv-entry-header">
                <span className="cv-entry-title">{project.title}</span>
                <span className="cv-entry-right cv-stack">{project.techStack.slice(0, 4).join(" · ")}</span>
              </div>
              <ul className="cv-bullets">
                {project.features.slice(0, 2).map((f, i) => <li key={i}>{f}</li>)}
              </ul>
            </div>
          ))}
        </section>

        {/* ── CERTIFICATIONS ── */}
        <section className="cv-section">
          <div className="cv-section-title">CERTIFICATIONS</div>
          {certificates.filter((c) => c.id && !c.id.startsWith("org-")).map((cert) => (
            <div key={cert.id} className="cv-cert-row">
              <span className="cv-cert-left">
                <strong>{cert.title}</strong> — {cert.issuer}
              </span>
              <span className="cv-cert-right">
                {cert.year}
                {cert.credentialUrl && (
                  <span> · <a href={cert.credentialUrl} className="cv-link">Verify</a></span>
                )}
              </span>
            </div>
          ))}
        </section>

        {/* ── ORGANIZATIONAL ACTIVITIES ── */}
        <section className="cv-section">
          <div className="cv-section-title">ORGANIZATIONAL ACTIVITIES</div>
          <table className="cv-org-table">
            <thead>
              <tr>
                <th>Role</th>
                <th>Organization</th>
                <th>Period</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              {experience.organizational.map((exp) => (
                <tr key={exp.id}>
                  <td>{exp.role}</td>
                  <td>{exp.organization}</td>
                  <td>{exp.period}</td>
                  <td style={{ textTransform: "capitalize" }}>{exp.category}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <div className="cv-page-num">2 / 2</div>
      </div>

      {/* ── STYLES ── */}
      <style>{`
        /* ── RESET ── */
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        /* ── ROOT ── */
        .cv-root {
          font-family: 'Inter', 'Calibri', Arial, sans-serif;
          font-size: 10pt;
          color: #111;
          background: #e5e7eb;
          line-height: 1.45;
          min-height: 100vh;
          padding-top: 52px;
        }

        /* ── TOOLBAR ── */
        .cv-toolbar {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 999;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 8px 20px;
          background: #fff;
          border-bottom: 1px solid #d1d5db;
          font-size: 9pt;
          flex-wrap: wrap;
        }
        .cv-toolbar-title { font-weight: 600; color: #111; }
        .cv-toolbar-actions { display: flex; gap: 8px; }
        .cv-toolbar-hint { color: #6b7280; font-size: 8pt; }
        .cv-btn-primary {
          padding: 6px 16px;
          background: #111; color: #fff;
          border: none; border-radius: 4px;
          font-family: inherit; font-size: 9pt; font-weight: 600;
          cursor: pointer;
        }
        .cv-btn-primary:hover { background: #333; }
        .cv-btn-secondary {
          padding: 6px 16px;
          background: #f3f4f6; color: #374151;
          border: 1px solid #d1d5db; border-radius: 4px;
          font-family: inherit; font-size: 9pt;
          cursor: pointer;
        }
        .cv-btn-secondary:hover { background: #e5e7eb; }

        /* ── PAGE ── */
        .cv-page {
          width: 210mm;
          min-height: 297mm;
          background: #fff;
          margin: 0 auto 16px;
          padding: 18mm 18mm 14mm 18mm;
          box-shadow: 0 2px 12px rgba(0,0,0,0.12);
          position: relative;
        }

        /* ── HEADER ── */
        .cv-header {
          text-align: center;
          padding-bottom: 10px;
          margin-bottom: 12px;
          border-bottom: 2px solid #111;
        }
        .cv-name {
          font-size: 19pt;
          font-weight: 800;
          letter-spacing: 0.06em;
          line-height: 1.15;
          margin-bottom: 3px;
        }
        .cv-headline {
          font-size: 9.5pt;
          font-weight: 500;
          color: #333;
          margin-bottom: 6px;
        }
        .cv-contacts {
          font-size: 8.5pt;
          color: #333;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 2px 4px;
        }
        .cv-sep { color: #888; margin: 0 3px; }
        .cv-link { color: #111; text-decoration: none; }

        /* ── SECTION ── */
        .cv-section { margin-bottom: 13px; }
        .cv-section-title {
          font-size: 9pt;
          font-weight: 700;
          letter-spacing: 0.1em;
          border-bottom: 1px solid #111;
          padding-bottom: 2px;
          margin-bottom: 8px;
        }
        .cv-body-text { font-size: 9.5pt; color: #222; line-height: 1.55; }

        /* ── ENTRY ── */
        .cv-entry { margin-bottom: 9px; }
        .cv-entry-header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          gap: 10px;
        }
        .cv-entry-title { font-size: 10pt; font-weight: 700; }
        .cv-entry-right { font-size: 8.5pt; color: #333; flex-shrink: 0; text-align: right; }
        .cv-stack { font-style: italic; }
        .cv-entry-sub { font-size: 9pt; font-style: italic; color: #333; margin: 2px 0; }
        .cv-gpa { font-style: normal; font-weight: 600; }

        /* ── BULLETS ── */
        .cv-bullets { list-style: disc; padding-left: 16px; margin-top: 3px; }
        .cv-bullets li {
          font-size: 9pt;
          color: #222;
          margin-bottom: 2px;
          line-height: 1.4;
        }

        /* ── SKILLS ── */
        .cv-skills-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4px 20px;
        }
        .cv-skill-row { font-size: 9pt; line-height: 1.4; }
        .cv-skill-label { font-weight: 700; }
        .cv-skill-values { color: #222; }

        /* ── LANGUAGES ── */
        .cv-lang-row { font-size: 9.5pt; display: flex; gap: 16px; }
        .cv-lang-item { display: flex; align-items: center; gap: 4px; }

        /* ── PROJECT LINKS ── */
        .cv-project-links { font-size: 8.5pt; color: #333; margin-bottom: 2px; }
        .cv-project-links .cv-link { text-decoration: underline; }

        /* ── CERT ── */
        .cv-cert-row {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          font-size: 9pt;
          margin-bottom: 4px;
          gap: 12px;
        }
        .cv-cert-left { color: #222; }
        .cv-cert-right { color: #333; flex-shrink: 0; font-size: 8.5pt; }

        /* ── ORG TABLE ── */
        .cv-org-table { width: 100%; border-collapse: collapse; font-size: 9pt; }
        .cv-org-table th {
          text-align: left;
          font-weight: 700;
          padding: 4px 8px 4px 0;
          border-bottom: 1px solid #ccc;
          font-size: 8.5pt;
        }
        .cv-org-table td {
          padding: 4px 8px 4px 0;
          border-bottom: 1px solid #eee;
          vertical-align: top;
          line-height: 1.4;
        }
        .cv-org-table tr:last-child td { border-bottom: none; }

        /* ── PAGE NUM ── */
        .cv-page-num {
          position: absolute;
          bottom: 8mm; right: 18mm;
          font-size: 8pt; color: #999;
        }

        /* ══ PRINT ══ */
        @media print {
          @page { size: A4; margin: 0; }
          .no-print { display: none !important; }
          .cv-root {
            background: #fff;
            padding-top: 0;
          }
          .cv-page {
            box-shadow: none;
            page-break-after: always;
            margin: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default CV;
