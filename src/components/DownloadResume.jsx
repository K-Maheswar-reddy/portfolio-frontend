import React from "react";
import { Download } from "lucide-react"; // icon library

const DownloadResume = () => {
  return (
    <a
      href="/resume.pdf"
      download="Mahe_K_Resume.pdf"
      className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-2xl shadow hover:bg-blue-700 transition-all"
    >
      <Download size={20} />
      Download Resume
    </a>
  );
};

export default DownloadResume;
