import React, { useState } from 'react';

const EvidenceCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <section className="bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-2xl font-bold text-slate-900 mb-4">{title}</h2>
    <div className="text-slate-700">
      {children}
    </div>
  </section>
);

const YouTubeEmbed: React.FC<{ videoId: string; title: string }> = ({ videoId, title }) => (
  <div className="relative w-full" style={{ height: '420px' }}>
    <iframe
      src={`https://www.youtube.com/embed/${videoId}`}
      title={title}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="absolute inset-0 w-full h-full rounded-lg shadow-lg"
    ></iframe>
  </div>
);

// Modal component for image preview
const ImageModal: React.FC<{ 
  isOpen: boolean; 
  onClose: () => void; 
  imageSrc: string; 
  imageAlt: string; 
}> = ({ isOpen, onClose, imageSrc, imageAlt }) => {
  React.useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div className="relative max-w-4xl max-h-full">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-75 transition-all z-10"
          aria-label="Cerrar modal"
        >
          ✕
        </button>
        <img
          src={imageSrc}
          alt={imageAlt}
          className="max-w-full max-h-full object-contain rounded-lg"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  );
};

const EvidencesPage: React.FC = () => {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    imageSrc: string;
    imageAlt: string;
  }>({
    isOpen: false,
    imageSrc: '',
    imageAlt: ''
  });

  const openModal = (imageSrc: string, imageAlt: string) => {
    setModalState({ isOpen: true, imageSrc, imageAlt });
  };

  const closeModal = () => {
    setModalState({ isOpen: false, imageSrc: '', imageAlt: '' });
  };

  return (
    <div className="max-w-4xl mx-auto py-8">
      <header className="text-center mb-12">
        <div className="flex justify-center items-center gap-4 mb-4">
          <img src="/logo_SENA.png" alt="SENA Logo" className="h-12 sm:h-16" />
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Consolidated Evidences</h1>
        </div>
        <p className="mt-4 text-xl text-slate-600">William Merchán</p>
      </header>
      
      <div className="space-y-12">
        <EvidenceCard title="Presentation Video">
          <YouTubeEmbed videoId="Ch60VQNgJ5k" title="Presentation Video" />
        </EvidenceCard>

        <EvidenceCard title="Trifold Brochure">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img 
              src="/Trifold1 .png" 
              alt="Trifold brochure page 1" 
              className="rounded-lg shadow-lg w-full h-auto cursor-pointer hover:opacity-90 transition-opacity" 
              onClick={() => openModal("/Trifold1 .png", "Trifold brochure page 1")}
            />
            <img 
              src="/Trifold2.png" 
              alt="Trifold brochure page 2" 
              className="rounded-lg shadow-lg w-full h-auto cursor-pointer hover:opacity-90 transition-opacity" 
              onClick={() => openModal("/Trifold2.png", "Trifold brochure page 2")}
            />
          </div>
        </EvidenceCard>

        <EvidenceCard title="Video-Exposicion: Interview">
           <YouTubeEmbed videoId="ICxUaNL7tTk" title="Video-Interview" />
        </EvidenceCard>

        <EvidenceCard title="Chronicle: Steve Wozniak">
          <p className="mb-4">This document is a chronicle about the life and contributions of Steve Wozniak, co-founder of Apple Inc.</p>
          <a
            href="/GA2-240202501-AA1-EV03.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            View PDF Document
          </a>
        </EvidenceCard>

        <EvidenceCard title="Video-Sustentacion: Sesquile Cundinamarca">
          <YouTubeEmbed videoId="YfYWl7b-9eM" title="Sustentacion" />
        </EvidenceCard>

        <EvidenceCard title="Audio: Description of my life">
          <p className="mb-4">This audio provides a personal description of my background and life experiences.</p>
          <a
            href="https://www.canva.com/design/DAGqAjIWy_o/XKs3x0Cp6Z08OU3qnjZGWg/watch?utm_content=DAGqAjIWy_o&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hbb7402c055"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
          >
            <svg 
              viewBox="0 0 24 24" 
              className="w-6 h-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7.5 6.4C7.5 5.1 8.6 4 9.9 4h4.2c1.3 0 2.4 1.1 2.4 2.4v11.2c0 1.3-1.1 2.4-2.4 2.4H9.9c-1.3 0-2.4-1.1-2.4-2.4V6.4z" fill="#00C4CC"/>
              <path d="M7.5 6.4C7.5 5.1 6.4 4 5.1 4c-1.3 0-2.4 1.1-2.4 2.4v11.2c0 1.3 1.1 2.4 2.4 2.4 1.3 0 2.4-1.1 2.4-2.4V6.4z" fill="#7B68EE"/>
              <path d="M16.5 6.4C16.5 5.1 17.6 4 18.9 4c1.3 0 2.4 1.1 2.4 2.4v11.2c0 1.3-1.1 2.4-2.4 2.4-1.3 0-2.4-1.1-2.4-2.4V6.4z" fill="#FF7A00"/>
            </svg>
            <span className="flex items-center gap-2">
              Play Audio on Canva
              <svg 
                className="w-4 h-4 transition-transform group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m6-6V7a2 2 0 00-2-2H5a2 2 0 00-2 2v3m2 0V7h10v3M7 21h10a2 2 0 002-2v-5a2 2 0 00-2-2H7a2 2 0 00-2 2v5a2 2 0 002 2z" />
              </svg>
            </span>
          </a>
        </EvidenceCard>

        <EvidenceCard title="Mind Map">
          <img src="/mindmap.png" alt="Mind Map" className="rounded-lg shadow-lg w-full h-auto" />
        </EvidenceCard>

      </div>

      <ImageModal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        imageSrc={modalState.imageSrc}
        imageAlt={modalState.imageAlt}
      />
    </div>
  );
};

export default EvidencesPage;