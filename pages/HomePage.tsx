import React from 'react';
import { posts } from '../data/posts';
import PostCard from '../components/PostCard';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <div className="flex justify-center items-center gap-4 mb-4">
          <img src="/logo_SENA.png" alt="SENA Logo" className="h-12 sm:h-16" />
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Welcome to my English Blog</h1>
        </div>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          Thoughts on media, life, and everything in between.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
        <Link to="/evidences" className="group block bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden md:col-span-2">
          <div className="overflow-hidden">
            <img src="/senaenglish.jpg" alt="A person studying English" className="w-full h-[480px] object-cover group-hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="p-6">
            <h2 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">Consolidated Evidences</h2>
            <p className="text-slate-600 text-sm leading-relaxed">A collection of my academic and professional work, including presentations, projects, and other relevant evidence.</p>
          </div>
        </Link>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;