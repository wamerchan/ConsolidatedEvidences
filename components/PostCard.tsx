
import React from 'react';
import { Link } from 'react-router-dom';
import { Post } from '../types';

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <Link to={`/post/${post.id}`} className="group block bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <div className="overflow-hidden">
        <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
      </div>
      <div className="p-6">
        <h2 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{post.title}</h2>
        <div className="text-xs text-slate-500 mb-3">
          <span>By {post.author}</span> &middot; <span>{post.date}</span>
        </div>
        <p className="text-slate-600 text-sm leading-relaxed">{post.snippet}</p>
      </div>
    </Link>
  );
};

export default PostCard;
