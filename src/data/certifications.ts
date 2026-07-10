export interface Certification {
  title: string;
  issuer: string;
  description: string;
  date: string;
  /** Set to the PDF path (e.g. "/certificates/git-fundamentals.pdf") once available.
   *  Leave empty string to show "Certificate Coming Soon". */
  pdf: string;
}

const certifications: Certification[] = [
  {
    title: "Git Fundamentals",
    issuer: "10Pearls",
    description:
      "Core Git concepts including version control workflows, branching strategies, and collaborative development practices.",
    date: "2024",
    pdf: "/certificates/git-fundamentals.pdf",
  },
  {
    title: "HTML, CSS and JavaScript for Web Developers",
    issuer: "10Pearls",
    description:
      "Web development foundations covering responsive design, DOM manipulation, modern CSS layouts, and interactive JavaScript.",
    date: "2024",
    pdf: "/certificates/html-css-js.pdf",
  },
];

export default certifications;