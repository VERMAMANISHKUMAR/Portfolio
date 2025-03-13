import React from "react";
import DSA from "../Certificate/image/Data Structures & Algorithms wiith Java.jpg"
import Frontend from "../Certificate/image/Front_End_Certificate.jpg"
import ReactCertificate from "../Certificate/image/React-Certificate.jpg"
import Backend from "../Certificate/image/certificate_of_Backend_with_Nodejs-.jpg"
import DBMS from "../Certificate/image/certificate_of_DBMS.jpg"
import Generative_AI from "../Certificate/image/certificate_of_Generative_AI.jpg"
import HTML_CSS from "../Certificate/image/HTMLCSS_Catificate.jpg"
import JAVA from "../Certificate/image/JAVA_Caticfica.jpg"
import My_SQL from "../Certificate/image/My_SQL_catificate-.jpg"
import Canva from "../Certificate/image/Canva.jpg"
import Git_Github from "../Certificate/image/Git_and_Github.jpg"
import React_ from "../Certificate/image/React.jpg"
import metaric_marks  from "../Certificate/image/metaric marks sheet.jpg"
import Intermediat from "../Certificate/image/12th marks sheet.jpg"
import Six_Semester from "../Certificate/image/Six semester.jpg"
import SST from '../Certificate/image/SST.png'
const certificates = [
  {
    name: "DSA Certificate",
    image: DSA,
  },
  {
    name: "Frontend Certificate",
    image:Frontend,
  },
  {
    name: "React Certificate",
    image: ReactCertificate ,
  },
  {
          name: "Backend Certificate",
          image: Backend ,
        },
        {
          name: " DBMS Certificate",
          image: DBMS ,
        },
        {
          name: "AI Generative Certificate",
          image: Generative_AI ,
        },
        {
          name: "SST Skill Certificate",
          image: SST ,
        },
        {
          name: "HTML & CSS Certificate",
          image: HTML_CSS ,
        },
        {
          name: " JAVA Certificate",
          image: JAVA ,
        },
        {
          name: "MySQL Certificate",
          image: My_SQL,
        },
        {
          name: " Canva Certificate",
          image: Canva ,
        },
        {
          name: "Git & Github Certificate",
          image: Git_Github,
        },
        {
          name: "React Certificate",
          image: React_,
        },
        {
          name: " 10th Certificate",
          image: metaric_marks ,
        },
        {
          name: "12th Certificate",
          image: Intermediat,
        },
        {
          name: "Six Semester Certificate",
          image: Six_Semester,
        },
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
    <div className="container mx-auto p-6" id="Certificate_Gallery">
      <h2 className="text-3xl font-semibold text-center mb-6">Certificate Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 text-center"
          >
            <img
              src={cert.image}
              alt={cert.name}
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="text-lg font-medium mt-4">{cert.name}</h3>
            <button
              className="mt-3 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
              onClick={() => handleDownload(cert.image, cert.name)}
            >
              Download
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificateGallery;
