import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>Welcome to Dangalfs Library of Computer Science!</h1>
      <h1>Check out the amazing selection of books in our catalog.</h1>
      <p>Check out the amazing selection of books in our</p>
      <Link to="/books">catalog</Link>
    </div>
  );
}
