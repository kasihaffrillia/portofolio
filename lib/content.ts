import type { L, LList } from "./i18n";

export type Category = "graphic" | "uiux" | "programming";

export const categoryLabel: Record<Category, L> = {
  graphic: { id: "Desain Grafis", en: "Graphic Design" },
  uiux: { id: "Desain UI/UX", en: "UI/UX Design" },
  programming: { id: "Pemrograman", en: "Programming" },
};

export const navLinks = [
  { href: "/", key: "home" },
  { href: "/about", key: "about" },
  { href: "/services", key: "services" },
  { href: "/portfolio", key: "portfolio" },
  { href: "/experience", key: "experience" },
  { href: "/contact", key: "contact" },
] as const;

export const portfolioLinks = [
  { href: "/portfolio", key: "allProjects" },
  { href: "/portfolio/graphic-design", key: "graphic" },
  { href: "/portfolio/ui-ux", key: "uiux" },
  { href: "/portfolio/programming", key: "programming" },
] as const;

export type Service = {
  slug: Category;
  number: string;
  title: L;
  description: L;
  highlights: LList;
  detailed: LList;
  href: string;
};

export const services: Service[] = [
  {
    slug: "graphic",
    number: "01",
    title: { id: "Desain Grafis", en: "Graphic Design" },
    description: {
      id: "Menciptakan identitas visual yang bermakna melalui desain grafis, branding, dan komunikasi visual yang matang.",
      en: "Creating meaningful visual identities through thoughtful graphic design, branding, and visual communication.",
    },
    highlights: {
      id: ["Desain Kartu Nama", "Branding & Identitas", "Desain Media Sosial", "Materi Promosi", "Desain Layout", "Aset Kreatif Digital"],
      en: ["Business Card Design", "Branding & Identity", "Social Media Design", "Promotional Materials", "Layout Design", "Digital Creative Assets"],
    },
    detailed: {
      id: ["Desain Kartu Nama", "Kartu Nama Digital", "Branding", "Konten Media Sosial", "Desain Promosi", "Materi Pemasaran"],
      en: ["Business Card Design", "Digital Business Card", "Branding", "Social Media Content", "Promotional Design", "Marketing Materials"],
    },
    href: "/portfolio/graphic-design",
  },
  {
    slug: "uiux",
    number: "02",
    title: { id: "Desain UI/UX", en: "UI/UX Design" },
    description: {
      id: "Merancang antarmuka dan pengalaman pengguna yang intuitif dengan memadukan fungsi dan kejelasan visual.",
      en: "Designing intuitive digital interfaces and user experiences that combine functionality with visual clarity.",
    },
    highlights: {
      id: ["Desain UI Website", "Desain Dashboard", "Antarmuka Aplikasi", "Wireframing", "Prototyping", "Eksplorasi Pengalaman Pengguna"],
      en: ["Website UI Design", "Dashboard Design", "Application Interface", "Wireframing", "Prototyping", "User Experience Exploration"],
    },
    detailed: {
      id: ["Desain Website", "Desain Landing Page", "Antarmuka Dashboard", "Antarmuka Aplikasi Mobile", "Wireframe", "Prototipe Interaktif"],
      en: ["Website Design", "Landing Page Design", "Dashboard Interface", "Mobile Application Interface", "Wireframe", "Interactive Prototype"],
    },
    href: "/portfolio/ui-ux",
  },
  {
    slug: "programming",
    number: "03",
    title: { id: "Pemrograman & Pengembangan", en: "Programming & Development" },
    description: {
      id: "Mengubah ide menjadi website dan aplikasi yang fungsional melalui teknologi pengembangan modern.",
      en: "Transforming ideas into functional websites and applications through modern development technologies.",
    },
    highlights: {
      id: ["Pengembangan Website", "Frontend Development", "Pengembangan Aplikasi", "Integrasi Database", "Pengembangan CMS", "Solusi Digital"],
      en: ["Website Development", "Frontend Development", "Application Development", "Database Integration", "CMS Development", "Digital Solutions"],
    },
    detailed: {
      id: ["Pengembangan Website", "Implementasi Frontend", "Aplikasi Desktop", "Aplikasi Berbasis Database", "Integrasi CMS", "Pemeliharaan Website"],
      en: ["Website Development", "Frontend Implementation", "Desktop Application", "Database-driven Applications", "CMS Integration", "Website Maintenance"],
    },
    href: "/portfolio/programming",
  },
];

export type Project = {
  slug: string;
  title: string;
  category: Category;
  type: L;
  description: L;
  tools: string[];
  href: string;
  accent: "blue" | "violet" | "beige";
};

export const projects: Project[] = [
  {
    slug: "idqode-business-card",
    title: "IDQODE Business Card",
    category: "graphic",
    type: { id: "Identitas Brand · Kartu Nama", en: "Brand Identity · Business Card" },
    description: {
      id: "Konsep kartu nama untuk brand IDQODE dengan palet navy, beige, dan cokelat.",
      en: "A business card concept for the IDQODE brand in navy, beige, and brown.",
    },
    tools: ["Graphic Design", "Print"],
    href: "/portfolio/idqode-business-card",
    accent: "beige",
  },
  {
    slug: "cinemax-interface",
    title: "CINEMAX Interface",
    category: "uiux",
    type: { id: "Antarmuka Aplikasi Desktop", en: "Desktop Application Interface" },
    description: {
      id: "Desain antarmuka aplikasi manajemen bioskop: daftar film, pemilihan kursi, dan dashboard.",
      en: "Interface design for a cinema management app: movie listings, seat selection, and dashboard.",
    },
    tools: ["UI Design", "CustomTkinter"],
    href: "/portfolio/ui-ux#cinemax",
    accent: "violet",
  },
  {
    slug: "cinemax",
    title: "CINEMAX",
    category: "programming",
    type: { id: "Aplikasi Desktop Manajemen Bioskop", en: "Cinema Management Desktop Application" },
    description: {
      id: "Sistem manajemen bioskop berbasis desktop dengan pemesanan tiket, pemilihan kursi, kode promo, dan analitik.",
      en: "A desktop cinema management system with ticket booking, seat selection, promo codes, and analytics.",
    },
    tools: ["Python", "CustomTkinter"],
    href: "/portfolio/programming#cinemax",
    accent: "blue",
  },
  {
    slug: "gs-material-store",
    title: "GS Material Store",
    category: "programming",
    type: { id: "Website Toko Bahan Bangunan", en: "Building Materials Store Website" },
    description: {
      id: "Landing page publik dan CMS administratif untuk mengelola informasi toko.",
      en: "A public landing page and an administrative CMS for managing store information.",
    },
    tools: ["React", "Laravel", "Filament", "MySQL"],
    href: "/portfolio/programming#gs-material-store",
    accent: "violet",
  },
  {
    slug: "data-analysis",
    title: "Data Analysis — Banyumas",
    category: "programming",
    type: { id: "Proyek Analisis Statistik", en: "Statistical Analysis Project" },
    description: {
      id: "Analisis statistik kasus kekerasan dalam rumah tangga di Kabupaten Banyumas 2021–2025.",
      en: "Statistical analysis of domestic violence cases in Banyumas Regency, 2021–2025.",
    },
    tools: ["Statistics", "Data Visualization"],
    href: "/portfolio/programming#data-analysis",
    accent: "blue",
  },
];

export type ProgrammingProject = {
  slug: string;
  number: string;
  title: string;
  type: L;
  description: L;
  stack: string[];
  stackLabel?: "focus";
  features: LList;
  process: LList;
  challenges: LList;
  learning: LList;
};

export const programmingProjects: ProgrammingProject[] = [
  {
    slug: "cinemax",
    number: "01",
    title: "CINEMAX",
    type: { id: "Aplikasi Desktop Manajemen Bioskop", en: "Cinema Management Desktop Application" },
    description: {
      id: "Sistem manajemen bioskop berbasis desktop yang menampilkan daftar film, pemesanan tiket, pemilihan kursi, kode promo, riwayat transaksi, dan analitik dashboard.",
      en: "A desktop-based cinema management system featuring movie listings, ticket booking, seat selection, promotional codes, transaction history, and dashboard analytics.",
    },
    stack: ["Python", "CustomTkinter"],
    features: {
      id: ["Daftar film", "Pemesanan tiket", "Pemilihan kursi", "Kode promo", "Riwayat transaksi", "Analitik dashboard"],
      en: ["Movie listings", "Ticket booking", "Seat selection", "Promotional codes", "Transaction history", "Dashboard analytics"],
    },
    process: {
      id: ["Memetakan alur pengguna dari memilih film hingga transaksi.", "Merancang tata letak layar dan komponen antarmuka.", "Mengimplementasikan antarmuka dan logika aplikasi dengan Python dan CustomTkinter."],
      en: ["Mapping the user flow from choosing a movie to completing a transaction.", "Designing screen layouts and interface components.", "Implementing the interface and application logic with Python and CustomTkinter."],
    },
    challenges: {
      id: ["Menyajikan pemilihan kursi yang jelas dalam antarmuka desktop.", "Menjaga konsistensi tampilan di banyak layar."],
      en: ["Presenting clear seat selection within a desktop interface.", "Keeping the visual style consistent across many screens."],
    },
    learning: {
      id: ["Membangun antarmuka desktop dengan CustomTkinter.", "Menghubungkan alur UI dengan logika aplikasi."],
      en: ["Building desktop interfaces with CustomTkinter.", "Connecting UI flows with application logic."],
    },
  },
  {
    slug: "gs-material-store",
    number: "02",
    title: "GS Material Store",
    type: { id: "Website Toko Bahan Bangunan", en: "Building Materials Store Website" },
    description: {
      id: "Proyek website untuk toko bahan bangunan yang terdiri dari landing page publik dan CMS administratif untuk mengelola informasi toko.",
      en: "A website project for a building materials store featuring a public-facing landing page and an administrative CMS for managing store information.",
    },
    stack: ["React", "Laravel", "Filament", "MySQL"],
    features: {
      id: ["Landing page publik", "CMS administratif", "Pengelolaan informasi toko"],
      en: ["Public-facing landing page", "Administrative CMS", "Store information management"],
    },
    process: {
      id: ["Menyusun struktur konten landing page.", "Membangun frontend dengan React.", "Membangun backend dan panel admin dengan Laravel, Filament, dan MySQL."],
      en: ["Structuring the landing page content.", "Building the frontend with React.", "Building the backend and admin panel with Laravel, Filament, and MySQL."],
    },
    challenges: {
      id: ["Menghubungkan frontend React dengan data yang dikelola melalui CMS."],
      en: ["Connecting the React frontend with data managed through the CMS."],
    },
    learning: {
      id: ["Memahami arsitektur website dengan frontend dan CMS terpisah.", "Bekerja dengan Laravel, Filament, dan MySQL."],
      en: ["Understanding website architecture with a separate frontend and CMS.", "Working with Laravel, Filament, and MySQL."],
    },
  },
  {
    slug: "data-analysis",
    number: "03",
    title: "Data Analysis",
    type: { id: "Proyek Analisis Statistik", en: "Statistical Analysis Project" },
    description: {
      id: "Proyek analisis yang mengkaji statistik kasus kekerasan dalam rumah tangga di Kabupaten Banyumas antara tahun 2021 dan 2025, termasuk interpretasi dan visualisasi data.",
      en: "An analytical project examining domestic violence case statistics in Banyumas Regency between 2021 and 2025, including data interpretation and visualization.",
    },
    stack: ["Statistical Analysis", "Data Visualization"],
    stackLabel: "focus",
    features: {
      id: ["Pengolahan data statistik 2021–2025", "Interpretasi data", "Visualisasi data"],
      en: ["Statistical data processing for 2021–2025", "Data interpretation", "Data visualization"],
    },
    process: {
      id: ["Mengumpulkan dan merapikan data kasus.", "Menganalisis tren dari tahun ke tahun.", "Menyajikan temuan dalam bentuk visualisasi."],
      en: ["Collecting and cleaning case data.", "Analyzing year-over-year trends.", "Presenting findings through visualizations."],
    },
    challenges: {
      id: ["Menyajikan data sensitif secara akurat dan bertanggung jawab."],
      en: ["Presenting sensitive data accurately and responsibly."],
    },
    learning: {
      id: ["Menerapkan metode statistik pada data nyata.", "Memilih visualisasi yang tepat untuk menyampaikan temuan."],
      en: ["Applying statistical methods to real data.", "Choosing the right visualizations to communicate findings."],
    },
  },
];

export const socials = [
  { label: "Email", key: "email" },
  { label: "Instagram", key: "instagram" },
  { label: "LinkedIn", key: "linkedin" },
  { label: "GitHub", key: "github" },
] as const;
