
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { posts } from '../data/posts';
import PostContentRenderer from '../components/PostContentRenderer';
import ArrowLeftIcon from '../components/icons/ArrowLeftIcon';

const PostPage: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  const post = posts.find((p) => p.id === postId);

  if (!post) {
    return (
      <div className="text-center">
        <h1 className="text-2xl font-bold">Post not found</h1>
        <Link to="/" className="text-blue-600 hover:underline">Go back to the homepage</Link>
      </div>
    );
  }

  return (
    <article className="max-w-3xl mx-auto">
      <div className="mb-8">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
          <ArrowLeftIcon />
          Back to Blog
        </Link>
      </div>
      <header className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-4">{post.title}</h1>
        <div className="text-sm text-slate-500">
          <span>By {post.author}</span> &middot; <span>{post.date}</span>
        </div>
      </header>
      
      <img src={post.imageUrl} alt={post.title} className="w-full h-auto object-cover rounded-lg mb-8 aspect-video" />

      <div className="prose prose-slate max-w-none lg:prose-lg prose-p:text-slate-700 prose-headings:text-slate-900 prose-strong:text-slate-900 prose-a:text-blue-600">
        <PostContentRenderer content={post.content} />
      </div>
    </article>
  );
};

export default PostPage;
