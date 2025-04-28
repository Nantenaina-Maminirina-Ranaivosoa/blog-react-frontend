import React, { useState } from 'react';
import "./App.css";

const fakePosts = [
  {
    id: 1,
    title: 'Bienvenue sur mon blog !',
    author: 'Nante',
    content: 'Ceci est mon tout premier article. Merci de votre visite !',
  },
  {
    id: 2,
    title: "Pourquoi j'aime React",
    author: 'Nante',
    content: 'React est une bibliothèque géniale pour créer des interfaces dynamiques.',
  },
  {
    id: 3,
    title: 'Mes astuces pour apprendre le code',
    author: 'Nante',
    content: 'Pratique, projets réels, et persévérance sont les clés de la réussite.',
  },
]; 

function BlogPost({ post, onDelete }) {
  return (
    <div className="post">
      <h2>{post.title}</h2>
      <p><strong>Auteur:</strong> {post.author}</p>
      <p>{post.content}</p>
      <button onClick={() => onDelete(post.id)}>Supprimer</button>
    </div>
  );
}

function BlogApp() {
  const [posts, setPosts] = useState(fakePosts);

  const handleDelete = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  return (
    <div className="container">
      <h1>📰 Mon Blog en React</h1>
      {posts.length > 0 ? (
        posts.map(post => (
          <BlogPost key={post.id} post={post} onDelete={handleDelete} />
        ))
      ) : (
        <p>Aucun article pour le moment.</p>
      )}
    </div>
  );
}

export default BlogApp;
