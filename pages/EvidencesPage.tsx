import React from 'react';

const EvidenceCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <section className="bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-2xl font-bold text-slate-900 mb-4">{title}</h2>
    <div className="text-slate-700">
      {children}
    </div>
  </section>
);

const YouTubeEmbed: React.FC<{ videoId: string; title: string }> = ({ videoId, title }) => (
  <div className="aspect-w-16 aspect-h-9">
    <iframe
      src={`https://www.youtube.com/embed/${videoId}`}
      title={title}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="w-full h-full rounded-lg shadow-lg"
    ></iframe>
  </div>
);


const EvidencesPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Consolidated Evidences</h1>
        <p className="mt-4 text-xl text-slate-600">William Merchán</p>
      </header>
      
      <div className="space-y-12">
        <EvidenceCard title="Presentation Video">
          <YouTubeEmbed videoId="Ch60VQNgJ5k" title="Presentation Video" />
        </EvidenceCard>

        <EvidenceCard title="Trifold Brochure">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img src="/media/Trifold-1.png" alt="Trifold brochure page 1" className="rounded-lg shadow-lg w-full h-auto" />
            <img src="/media/Trifold-2.png" alt="Trifold brochure page 2" className="rounded-lg shadow-lg w-full h-auto" />
          </div>
        </EvidenceCard>

        <EvidenceCard title="Video-Exposicion: Critical Thinking">
           <YouTubeEmbed videoId="ICxUaNL7tTk" title="Video-Exposicion" />
        </EvidenceCard>

        <EvidenceCard title="Chronicle: Steve Wozniak">
          <p className="mb-4">This document is a chronicle about the life and contributions of Steve Wozniak, co-founder of Apple Inc.</p>
          <a
            href="https://litter.catbox.moe/k36qku.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            View PDF Document
          </a>
        </EvidenceCard>

        <EvidenceCard title="Video-Sustentacion: Crime and Punishment">
          <YouTubeEmbed videoId="YfYWl7b-9eM" title="Sustentacion" />
        </EvidenceCard>

        <EvidenceCard title="Audio: Description of my life">
          <p className="mb-4">This audio provides a personal description of my background and life experiences.</p>
          <iframe
            loading="lazy"
            src="https://www.canva.com/design/DAGqAjIWy_o/view?embed"
            allowFullScreen
            allow="fullscreen"
            className="w-full h-48 rounded-lg shadow-lg border-0"
            title="Canva Audio Player"
          >
          </iframe>
        </EvidenceCard>

        <EvidenceCard title="Mind Map">
          <img src="/media/mindmap.png" alt="Mind Map" className="rounded-lg shadow-lg w-full h-auto" />
        </EvidenceCard>

      </div>
    </div>
  );
};

export default EvidencesPage;