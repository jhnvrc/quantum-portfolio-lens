

# Membuat Portfolio Lebih Profesional untuk Internship

## Apa yang Akan Berubah

### 1. Perbaikan Layout dan Section Order
Urutan section akan disesuaikan agar lebih mengikuti alur CV profesional:
- Home -> About -> Skills -> Experience -> Projects -> Achievements -> Certificates -> Contact
- Achievements naik ke atas Certificates karena lebih impactful

### 2. Navbar Update
- Tambahkan link "Achievements" dan "Contact" yang saat ini belum ada di navbar
- Navbar sekarang hanya punya 6 link, akan lengkap jadi 8 sesuai `navLinks` di data

### 3. Experience Section -- Redesign Timeline
- Ganti subtitle dari "My professional journey and contributions" menjadi yang lebih cocok untuk mahasiswa: "Leadership & Organizational Involvement"
- Tambahkan visual timeline (vertical line + dots) agar terlihat lebih profesional seperti LinkedIn
- Pisahkan leadership roles (Vice Division, PM, Vice PM, Supervisor) lebih menonjol dari committee roles
- Beri icon/badge untuk membedakan tipe role (Leadership vs Committee vs Social Project)

### 4. Experience Cards -- Lebih Clean dan Structured
- Role title lebih besar dan prominent
- Period ditampilkan dengan badge/pill yang clean
- Achievements jadi bullet points yang rapi, bukan tags
- Tambahkan subtle left-border color untuk membedakan tipe experience

### 5. Hero Section -- Lebih Professional
- Ganti emoji "wave" menjadi text yang lebih clean
- Tagline lebih professional-oriented: fokus ke value yang bisa diberikan
- CTA button "View My Work" tetap, tambah "Contact Me" sebagai alternatif

### 6. Projects Section -- Highlight Impact
- Tambahkan context label pada featured projects (Hackathon, Research Publication, Course Project)
- Project cards menampilkan tech stack yang lebih clean

### 7. Contact Section -- Lebih Professional
- Subtitle lebih profesional: "Interested in collaborating or have an internship opportunity? Let's connect."

---

## Detail Teknis

### File yang Diubah:

**`src/data/portfolioData.ts`**
- Update `personalInfo.tagline` menjadi lebih profesional
- Update `aboutMe.introduction` lebih concise dan internship-focused
- Hapus `experience.professional` field entirely (bukan array kosong, tapi hapus property-nya)
- Tambahkan `category` field pada setiap experience entry: `"leadership"`, `"committee"`, atau `"social"`

**`src/components/portfolio/ExperienceSection.tsx`**
- Redesign menjadi vertical timeline layout dengan garis dan dots
- Leadership roles mendapat styling lebih prominent (larger card, glow border)
- Committee/participant section lebih compact
- Icon badges berdasarkan category (Crown untuk leadership, Users untuk committee, Heart untuk social project)
- Subtitle section diubah

**`src/components/portfolio/HeroSection.tsx`**
- Ganti "wave emoji + Hello, I'm" menjadi "Hi, I'm" yang lebih clean
- Update tagline reference

**`src/components/portfolio/Navbar.tsx`**
- Sinkronkan navLinks dengan yang ada di data (tambah Achievements + Contact)

**`src/components/portfolio/ContactSection.tsx`**
- Update subtitle menjadi lebih profesional

**`src/pages/Index.tsx`**
- Pindahkan urutan: Experience sebelum Projects (sudah benar saat ini, verify only)
