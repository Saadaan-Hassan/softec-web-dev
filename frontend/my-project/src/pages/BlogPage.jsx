import React, { useState } from 'react';
import Navbar from '../components/common/Navbar';
import blog from '../assets/blog.jpg';

const BlogPage = () => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a new comment object
    const newComment = { name, comment };
    // Add the new comment to the comments array
    setComments([...comments, newComment]);
    // Clear the input fields
    setName('');
    setComment('');
  };

  return (
    <>
      <Navbar />
      <div>
        <img className="w-full h-[60vh]" src={blog} alt="Blog" />
        <p className="text-4xl font-bold text-center p-10">Title of the Blog</p>
        <p className="text-xl p-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi accusantium mollitia voluptates unde eum
          dignissimos culpa voluptatem sunt nam autem nesciunt magnam tempora, deleniti officiis error beatae veritatis
          consectetur temporibus?
        </p>
      </div>
      <div className="p-10">
        <h2 className="text-2xl font-semibold mb-4">Comments</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 text-sm font-semibold">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="comment" className="block mb-2 text-sm font-semibold">Comment:</label>
            <textarea
              id="comment"
              value={comment}
              onChange={handleCommentChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              rows={4}
              required
            ></textarea>
          </div>
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">Submit</button>
        </form>
        <div className="mt-8">
          {comments.map((comment, index) => (
            <div key={index} className="mb-4">
              <p className="font-semibold">{comment.name}</p>
              <p>{comment.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogPage;
