import React from "react";

const Coverletter = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8" id="CoverLetter">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-6 sm:p-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-6">Cover Letter</h1>

        <div className="text-gray-700 text-base sm:text-lg leading-relaxed space-y-4">
          <p>Dear Sir/Madam,</p>

          <p>
            I am excited to apply for the{" "}
            <span className="text-yellow-500 font-semibold">Full Stack Developer role.</span> With expertise in software development,{" "}
            <span className="text-blue-600">
              HTML, CSS, JavaScript, Bootstrap, React, Redux, Node.js, Express.js, MongoDB, MySQL,
            </span>{" "}
            and authentication systems, I am eager to contribute to your mission of delivering secure and innovative solutions.
          </p>

          <p>
            I completed the{" "}
            <span className="text-blue-600 font-semibold">Full Stack Developer Bootcamp from Coding Ninjas,</span>{" "}
            where I honed my skills in building end-to-end web applications and integrating secure authentication mechanisms.
          </p>

          <p>
            I am confident my skills in building RESTful APIs, implementing secure authentication systems, and managing databases like MongoDB and MySQL align with your team’s needs. I look forward to contributing to Authenticate’s success.
          </p>

          <p>Thank you for considering my application.</p>

          <p>Name: Manish Kumar Verma</p>
          <p>Contact Number: 8521837619</p>

          <p>
            <a
              href="https://www.linkedin.com/in/manishverma25"
              className="text-green-600 hover:text-green-800 underline"
            >
              <span className="text-lg font-semibold">LinkedIn Profile: </span>
              https://www.linkedin.com/in/manishverma25
            </a>
          </p>

          <p>
            <a
              href="https://vermamanishkumar.github.io/My-Portfolio/"
              className="text-green-600 hover:text-green-800 underline"
            >
              <span className="text-lg font-semibold">Portfolio Link: </span>
              https://vermamanishkumar.github.io/My-Portfolio/
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Coverletter;