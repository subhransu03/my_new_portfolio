"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { FaThumbsUp, FaShareAlt, FaDownload, FaCheckCircle } from 'react-icons/fa';

const certifications = [
  {
    title: 'SAP Certified Associate - Back-End Developer - ABAP Cloud',
    description:
      'This certification verifies that you possess ABAP programming language the cores based on ABAP RESTful Application Programming Model on SAP Business Technology Platform and principles of building custom extensions in SAP S/4HANA Cloud required of the back-end developer profile and proves that you have an overall understanding and in‐depth skills to participate as a member of project team in a mentored role.',
    image: '/assets/certifications/abap.jpg',
    verifyUrl: 'https://www.credly.com/badges/6cd88a2b-02e3-45d5-9cfc-a06219aad4f9/public_url',
  },
  {
    title: 'SAP Certified Associate - SAP Fiori Application Developer',
    description:
      'This certification verifies that you possess the required skills in the area of SAP Fiori application development as it pertains to the Frontend Developer profile. This certification builds on the basic knowledge gained by a developer from formal SAP LEarning training and preferably refined by practical experience within a SAP Fiori application development project team in a mentored role. This is an entry level certification.',
    image: '/assets/certifications/fiori.jpg',
    verifyUrl: 'https://www.credly.com/badges/020d6e76-edc0-4241-9ccd-bd3e66ced371/public_url',
  },
  {
    title: 'SAP Certified Associate - Business Process Integration with SAP S/4HANA',
    description:
      'This certification verifies that you possess the core skills about business processes and their integration in SAP S/4HANA. The certification is recommended as an entry-level qualification to allow consultants and application users to get acquainted with SAP S/4HANA end-to-end business process the cores.',
    image: '/assets/certifications/ibp.jpg',
    verifyUrl: 'https://www.credly.com/badges/7f3d79c2-b1ba-4b9d-8528-fd9adeb9725b/public_url',
  },
  {
    title: 'SAP Certified Associate - SAP Generative AI Developer',
    description:
      'This certification verifies that you understand SAP’s Business AI capabilities and have the skills to extend SAP BTP applications, while leveraging leading Large Language Models(LLMs), using SAP AI Core/SAP AI Launchpad and SAP’s generative AI hub.',
    image: '/assets/certifications/genai.jpg',
    verifyUrl: 'https://www.credly.com/badges/0a99950c-ee90-4246-9ab1-df9487f51f02/public_url',
  },
  {
    title: 'Microsoft Certified: Azure AI Fundamentals',
    description:
      'Earners of the Azure AI Fundamentals certification have demonstrated foundational knowledge of machine learning (ML) and artificial intelligence (AI) concepts and related Microsoft Azure services.',
    image: '/assets/certifications/ms_az_ai.jpg',
    verifyUrl: 'https://www.credly.com/badges/a817891d-d5b7-459b-871d-372ea2568cfa/public_url',
  },
  {
    title: 'Microsoft Certified: Azure Fundamentals',
    description:
      'Earners of the Azure Fundamentals certification have demonstrated foundational level knowledge of cloud services and how those services are provided with Microsoft Azure.',
    image: '/assets/certifications/ms_az.jpg',
    verifyUrl: 'https://www.credly.com/badges/96df5238-e829-495f-91c3-b07017817e07/public_url',
  },


  {
    title: 'Google Cloud Computing Foundations Certificate',
    description:
      'This certificate program helps learners develop technical proficiency in cloud computing. This certificate is an ideal foundation for diverse career paths including those in IT infrastructure, cloud engineering, and cloud-native application development.',
    image: '/assets/certifications/gcp.png',
    verifyUrl: 'https://www.credly.com/badges/56a93fec-4660-4321-9a64-a42445cc5884/public_url',
  },
  {
    title: 'Google UX Design Professional Certificate',
    description:
      'Those who earn the Google UX Design Professional Certificate have completed seven courses, developed by Google, that include hands-on, practice-based assessments and are designed to prepare them for introductory-level roles in UX design.',
    image: '/assets/certifications/uiux.jpg',
    verifyUrl: 'https://coursera.org/share/eaf448f73bc61e5ee47cbe5b08c17049',
  },
  {
    title: 'Database Management Systems – IIT Kharagpur (NPTEL)',
    description:
      'Completed an 8-week certification course covering relational models, SQL, normalization, query optimization, transactions, and multi-tier application development. Gained practical experience through hands-on assignments using MySQL and explored design and implementation of database-driven applications.',
    image: '/assets/certifications/dbms.png',
    verifyUrl: 'https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL22CS91S4307027510193404',
  },
  {
    title: 'Data Science for Engineers – IIT Madras (NPTEL)',
    description:
      'Completed an 8-week certification course under Prof. Rengasamy and Prof. Narasimhan, covering R programming, linear algebra, statistics, optimization, and foundational data science algorithms. Gained hands-on experience through practical assignments and a capstone case study aligned with industry use cases.',
    image: '/assets/certifications/ds.jpg',
    verifyUrl: 'https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL23CS97S3514053310123604',
  },
  {
    title: 'Postman API Fundamentals Student Expert – Postman',
    description:
      'Certified for demonstrating proficiency in using Postman for API development, testing, and integration. Gained hands-on experience with RESTful methods (GET, POST, PATCH, DELETE), scripting, API key authorization, and building Postman Collections.',
    image: '/assets/certifications/postman.png',
    verifyUrl: 'https://api.badgr.io/public/assertions/kRryL4ReSiix8FL4Jq-_8g?identity__email=sahusekharsubhransu%40gmail.com',
  },
];

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState<{
    title: string;
    description: string;
    image: string;
    verifyUrl: string;
  } | null>(null);

  const [stats, setStats] = useState(
    certifications.map(() => ({ likes: 0, shares: 0, downloads: 0 }))
  );

  const [interactions, setInteractions] = useState(
    certifications.map(() => ({ liked: false, shared: false, downloaded: false }))
  );

  const openModal = (cert: typeof certifications[0]) => {
    setSelectedCert(cert);
  };

  const closeModal = () => {
    setSelectedCert(null);
  };

  const handleLike = (index: number) => {
    const updatedStats = [...stats];
    const updatedInteractions = [...interactions];
    if (!updatedInteractions[index].liked) {
      updatedStats[index].likes += 1;
      updatedInteractions[index].liked = true;
      setStats(updatedStats);
      setInteractions(updatedInteractions);
    }
  };

  const handleShare = (index: number, title: string) => {
    if (navigator.share) {
      navigator.share({
        title: `Check out this certification: ${title}`,
        text: `I earned this certification: ${title}.`,
        url: window.location.href,
      });
    } else {
      alert('Sharing is not supported on this browser.');
    }
    const updatedStats = [...stats];
    const updatedInteractions = [...interactions];
    if (!updatedInteractions[index].shared) {
      updatedStats[index].shares += 1;
      updatedInteractions[index].shared = true;
      setStats(updatedStats);
      setInteractions(updatedInteractions);
    }
  };

  const handleDownload = (index: number, imageUrl: string, title: string) => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = `${title}.png`;
    link.click();
    const updatedStats = [...stats];
    const updatedInteractions = [...interactions];
    if (!updatedInteractions[index].downloaded) {
      updatedStats[index].downloads += 1;
      updatedInteractions[index].downloaded = true;
      setStats(updatedStats);
      setInteractions(updatedInteractions);
    }
  };

  return (
    <section id="certifications" className="py-10 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold text-center mb-6">Certifications</h2>
      <div className="flex overflow-x-auto space-x-4 p-4">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="min-w-[300px] bg-gray-800 rounded-lg shadow-lg p-4 hover:scale-105 transition-transform cursor-pointer"
            onClick={() => openModal(cert)}
          >
            <Image
              src={cert.image}
              alt={cert.title}
              width={300}
              height={160}
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <h3 className="text-xl font-semibold mt-4 text-center">{cert.title}</h3>
            <div className="flex justify-around mt-2 text-sm text-gray-400">
              <span>{stats[index].likes} Likes</span>
              <span>{stats[index].shares} Shares</span>
              <span>{stats[index].downloads} Downloads</span>
            </div>
          </div>
        ))}
      </div>

      {selectedCert && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-gray-800 rounded-lg p-6 max-w-2xl w-full text-center relative">
            <button
              className="absolute top-4 right-4 text-white text-2xl font-bold"
              onClick={closeModal}
            >
              &times;
            </button>
            <div className="flex justify-center">
              <Image
                src={selectedCert.image}
                alt={selectedCert.title}
                width={500}
                height={300}
                className="object-contain rounded-lg max-w-full max-h-[400px]"
              />
            </div>
            <h3 className="text-2xl font-bold mt-4">{selectedCert.title}</h3>
            <div
              className="text-gray-400 mt-4 overflow-y-auto"
              style={{
                maxHeight: '150px',
                padding: '10px',
                border: '1px solid #555',
                borderRadius: '5px',
              }}
            >
              {selectedCert.description}
            </div>
            <div className="flex justify-center mt-6 space-x-8">
              {/* Like Icon */}
              <div
                className="flex flex-col items-center cursor-pointer hover:scale-110 transition-transform"
                onClick={() => handleLike(certifications.indexOf(selectedCert))}
              >
                <FaThumbsUp
                  className={`text-3xl ${interactions[certifications.indexOf(selectedCert)].liked
                    ? 'text-blue-500 drop-shadow-md'
                    : 'text-blue-700'
                    }`}
                />
                <span className="text-sm text-gray-400 mt-1">Like</span>
              </div>

              {/* Share Icon */}
              <div
                className="flex flex-col items-center cursor-pointer hover:scale-110 transition-transform"
                onClick={() => handleShare(certifications.indexOf(selectedCert), selectedCert.title)}
              >
                <FaShareAlt
                  className={`text-3xl ${interactions[certifications.indexOf(selectedCert)].shared
                    ? 'text-green-500 drop-shadow-md'
                    : 'text-green-700'
                    }`}
                />
                <span className="text-sm text-gray-400 mt-1">Share</span>
              </div>

              {/* Download Icon */}
              <div
                className="flex flex-col items-center cursor-pointer hover:scale-110 transition-transform"
                onClick={() =>
                  handleDownload(
                    certifications.indexOf(selectedCert),
                    selectedCert.image,
                    selectedCert.title
                  )
                }
              >
                <FaDownload
                  className={`text-3xl ${interactions[certifications.indexOf(selectedCert)].downloaded
                    ? 'text-red-500 drop-shadow-md'
                    : 'text-red-700'
                    }`}
                />
                <span className="text-sm text-gray-400 mt-1">Download</span>
              </div>

              {/* Verify Icon */}
              <a
                href={selectedCert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center cursor-pointer hover:scale-110 transition-transform"
              >
                <FaCheckCircle className="text-green-400 text-3xl" />
                <span className="text-sm text-gray-400 mt-1">Verify</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;
