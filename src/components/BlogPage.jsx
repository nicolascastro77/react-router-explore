import React from 'react';
import { blogdata } from '../data/blogdata';
import { Link } from 'react-router-dom';

export const BlogPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8">BlogPage</h1>
      <ul className="space-y-4">
        {blogdata.map((post, index) => (
          <BlogLink key={index} post={post} />
        ))}
      </ul>
    </div>
  );
};

function BlogLink({ post }) {
  return (
    <li className="bg-white p-4 rounded-md shadow-md">
      <Link
        to={`/blog/${post.slug}`}
        className="block text-blue-500 hover:underline"
      >
        <h2 className="text-xl font-bold mb-2">{post.title}</h2>
        <p className="text-gray-600">{post.excerpt}</p>
      </Link>
    </li>
  );
}

