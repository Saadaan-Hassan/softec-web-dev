import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/common/Navbar";
import blog from "../assets/blog.jpg";

const BlogPage = () => {
	const [name, setName] = useState("");
	const [comment, setComment] = useState("");
	const [comments, setComments] = useState([]);

	useEffect(() => {
		// Fetch the comments from the server
		const fetchComments = async () => {
			const res = await axios.get("/posts/65da6a1442cf3a7622927da2/comment/");
			console.log(res.data);

			// Set the comments state to the comments from the server
			setComments(res.data.comments);
		};
		fetchComments();
	}, []);

	const handleNameChange = (e) => {
		setName(e.target.value);
	};

	const handleCommentChange = (e) => {
		setComment(e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		// Create a new comment object
		const newComment = { name, comment };
		// Add the new comment to the comments array
		setComments([...comments, newComment]);

		// Send the new comment to the server
		await axios
			.post("/posts/65da6a1442cf3a7622927da2/comment", newComment)
			.then((res) => {
				//Show notification
				console.log(res.data);
			});
		// Clear the input fields
		setName("");
		setComment("");
	};

	return (
		<>
			<Navbar />
			<div className='container mx-auto p-10'>
				<img className='w-full h-[60vh]' src={blog} alt='Blog' />
				<p className='text-4xl font-bold text-center p-10'>Title of the Blog</p>
				<p className='text-xl p-10'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
					accusantium mollitia voluptates unde eum dignissimos culpa voluptatem
					sunt nam autem nesciunt magnam tempora, deleniti officiis error beatae
					veritatis consectetur temporibus?
				</p>
			</div>
			<div className='container lg:w-1/2 p-10'>
				<h2 className='text-2xl font-semibold mb-4'>Comments</h2>
				<form onSubmit={handleSubmit}>
					<div className='mb-4'>
						<label htmlFor='name' className='block mb-2 text-sm font-semibold'>
							Name:
						</label>
						<input
							type='text'
							id='name'
							value={name}
							onChange={handleNameChange}
							className='w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500'
							required
						/>
					</div>
					<div className='mb-4'>
						<label
							htmlFor='comment'
							className='block mb-2 text-sm font-semibold'>
							Comment:
						</label>
						<textarea
							id='comment'
							value={comment}
							onChange={handleCommentChange}
							className='w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500'
							rows={4}
							required></textarea>
					</div>
					<button
						type='submit'
						className='px-4 py-2 bg-blue-500 text-white rounded-md'>
						Submit
					</button>
				</form>
				<div className='mt-8'>
					{comments.map((comment, index) => (
						// Display the comments with name and date beside it and comment below it
						<div key={index} className='mb-4'>
							<div className='flex items-center justify-between mb-2 bg-gray-100 p-2'>
								<p className='font-semibold'>{comment.name}</p>
								<p className='text-sm'>
									{new Date(comment.createdAt).toDateString()}
								</p>
							</div>
							<p>{comment.comment}</p>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default BlogPage;
