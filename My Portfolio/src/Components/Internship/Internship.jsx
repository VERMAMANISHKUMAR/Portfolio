
import Internship1 from "../Internship/Internship1.pdf";
import Internship2 from "../Internship/Internship2.pdf";

const PDFViewerComponent = () => {
  return (
    <div
      className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-8 px-4 sm:px-6 lg:px-8"
      id="Internship"
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
        Internship <span className="text-yellow-500">& Certificate</span>
      </h2>

      {/* PDF Embed 1 with responsive A4 aspect ratio */}
      <div className="w-full max-w-[795px] border border-gray-300 shadow-md bg-white mb-6">
        <iframe
          src={Internship1}
          className="w-full h-[500px] sm:h-[842px]"
          style={{ border: "none" }}
        ></iframe>
      </div>

      {/* Divider */}
      <hr className="w-full max-w-[795px] border-gray-300 my-6" />

      {/* PDF Embed 2 with responsive A4 aspect ratio */}
      <div className="w-full max-w-[795px] border border-gray-300 shadow-md bg-white">
        <iframe
          src={Internship2}
          className="w-full h-[500px] sm:h-[842px]"
          style={{ border: "none" }}
        ></iframe>
      </div>

      {/* Download Links */}
      <div className="flex flex-col sm:flex-row gap-4 mt-6">
        <a
          href={Internship1}
          download
          className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition"
        >
          Download Internship 1
        </a>
        <a
          href={Internship2}
          download
          className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition"
        >
          Download Internship 2
        </a>
      </div>
    </div>
  );
};

export default PDFViewerComponent;