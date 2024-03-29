import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { blogdata } from '../data/blogdata';
import { useAuth } from '../auth/auth';

export const BlogPost = () => {
    const { slug } = useParams();


    const auth = useAuth();

    const blogpost = blogdata.find(post => post.slug === slug);



    const navigate = useNavigate();

    const returnToBlog = () => {
        navigate(-1)
    }

    if (!blogpost) {
        // Manejar el caso en que no se encuentre la publicación
        return <p>Blog post no encontrado.</p>;
    }

    return (
        <div className="container mx-auto p-2">
            <button
                onClick={returnToBlog}>Volver al blog</button>
            <article className=" bg-stone-600 p-6 rounded-md shadow-md">
                <h2 className="text-3xl font-bold mb-4 text-white">{blogpost.title}</h2>
                <p className="text-yellow-300 mb-2">Por {blogpost.author}</p>
                <p className='text-gray-200'>{blogpost.content}</p>
            </article>
            {auth.user?.role.write && <button>Edit Post</button>}
            {auth.user?.role.delete && <button>Delete Post</button>}
            {auth.user?.name === blogpost.author && (
                <>
                    <button>Edit Post</button>
                    <button>Delete Post</button>
                </>
            )}
        </div>
    );
};
