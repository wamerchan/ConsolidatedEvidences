
import React from 'react';
import { ContentBlock } from '../types';

interface PostContentRendererProps {
  content: ContentBlock[];
}

const PostContentRenderer: React.FC<PostContentRendererProps> = ({ content }) => {
  return (
    <div className="space-y-6">
      {content.map((block, index) => {
        switch (block.type) {
          case 'text':
            return <p key={index} dangerouslySetInnerHTML={{ __html: block.content }} />;
          case 'image':
            return (
              <figure key={index}>
                <img src={block.src} alt={block.alt} className="w-full h-auto object-cover rounded-lg" />
                <figcaption className="text-center text-sm text-slate-500 mt-2">{block.alt}</figcaption>
              </figure>
            );
          case 'youtube':
            return (
              <div key={index} className="my-8">
                <div className="aspect-w-16 aspect-h-9">
                   <iframe
                      src={`https://www.youtube.com/embed/${block.videoId}`}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full rounded-lg shadow-lg"
                    ></iframe>
                </div>
                 {block.caption && <p className="text-center text-sm text-slate-500 mt-2">{block.caption}</p>}
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
};

export default PostContentRenderer;
