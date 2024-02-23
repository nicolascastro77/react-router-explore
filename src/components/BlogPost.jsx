import React from 'react';
import { useParams } from 'react-router-dom';
import { blogdata } from '../data/blogdata';

export const BlogPost = () => {
  const { slug } = useParams();
  const blogpost = blogdata.find(post => post.slug === slug);

  if (!blogpost) {
    // Manejar el caso en que no se encuentre la publicación
    return <p>Blog post no encontrado.</p>;
  }

  return (
    <div className="container mx-auto p-4">
    <article className=" bg-stone-600 p-6 rounded-md shadow-md">
      <h2 className="text-3xl font-bold mb-4 text-white">{blogpost.title}</h2>
      <p className="text-yellow-300 mb-2">Por {blogpost.author}</p>
      <p className='text-gray-200'>{blogpost.content}</p>
    </article>
  </div>
  );
};
