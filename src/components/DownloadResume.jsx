import { FaDownload } from "react-icons/fa";

function DownloadResume() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Maheswar.R.pdf"; // file path in public folder
    link.download = "Maheswar.R.pdf"; // filename when downloaded
    link.click();
  };

  return (
    <button
      onClick={handleDownload}
      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg"
    >
      <FaDownload />
      Download Resume
    </button>
  );
}

export default DownloadResume;
