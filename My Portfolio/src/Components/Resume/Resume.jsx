
import resume from "../Resume/resume.pdf";

const PDFViewerComponent = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-8 px-4 sm:px-6 lg:px-8" id="Resume">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
        PDF Preview <span className="text-yellow-500">& PDF Download</span>
      </h2>

      {/* PDF Embed with responsive A4 aspect ratio */}
      <div className="w-full max-w-[795px] border border-gray-300 shadow-md bg-white">
        <iframe
          src={resume}
          className="w-full h-[500px] sm:h-[842px]"
          style={{ border: "none" }}
        ></iframe>
      </div>

      {/* Download Link */}
      <a
        href={resume}
        download
        className="mt-4 inline-block bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition"
      >
        Download PDF
      </a>
    </div>
  );
};

export default PDFViewerComponent;