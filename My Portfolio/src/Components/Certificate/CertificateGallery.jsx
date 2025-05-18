import DSA from "../Certificate/image/Data Structures & Algorithms wiith Java.jpg";
import Frontend from "../Certificate/image/Front_End_Certificate.jpg";
import ReactCertificate from "../Certificate/image/React-Certificate.jpg";
import Backend from "../Certificate/image/certificate_of_Backend_with_Nodejs-.jpg";
import DBMS from "../Certificate/image/certificate_of_DBMS.jpg";
import Generative_AI from "../Certificate/image/certificate_of_Generative_AI.jpg";
import HTML_CSS from "../Certificate/image/HTMLCSS_Catificate.jpg";
import JAVA from "../Certificate/image/JAVA_Caticfica.jpg";
import My_SQL from "../Certificate/image/My_SQL_catificate-.jpg";
import Canva from "../Certificate/image/Canva.jpg";
import Git_Github from "../Certificate/image/Git_and_Github.jpg";
import React_ from "../Certificate/image/React.jpg";
import metaric_marks from "../Certificate/image/metaric marks sheet.jpg";
import Intermediat from "../Certificate/image/12th marks sheet.jpg";
import Six_Semester from "../Certificate/image/Six semester.jpg";
import SST from "../Certificate/image/SST.png";

const certificates = [
  { name: "DSA Certificate", image: DSA },
  { name: "Frontend Certificate", image: Frontend },
  { name: "React Certificate", image: ReactCertificate },
  { name: "Backend Certificate", image: Backend },
  { name: "DBMS Certificate", image: DBMS },
  { name: "AI Generative Certificate", image: Generative_AI },
  { name: "SST Skill Certificate", image: SST },
  { name: "HTML & CSS Certificate", image: HTML_CSS },
  { name: "JAVA Certificate", image: JAVA },
  { name: "MySQL Certificate", image: My_SQL },
  { name: "Canva Certificate", image: Canva },
  { name: "Git & Github Certificate", image: Git_Github },
  { name: "React Certificate", image: React_ },
  { name: "10th Certificate", image: metaric_marks },
  { name: "12th Certificate", image: Intermediat },
  { name: "Six Semester Certificate", image: Six_Semester },
];

const CertificateGallery = () => {
  const handleDownload = (imageUrl, name) => {
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = `${name}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8"
      id="Certificate_Gallery"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-8">
          Certificate Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center"
            >
              <img
                src={cert.image}
                alt={cert.name}
                className="w-full h-48 sm:h-64 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-3">
                {cert.name}
              </h3>
              <button
                className="bg-blue-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-700 transition"
                onClick={() => handleDownload(cert.image, cert.name)}
              >
                Download
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificateGallery;