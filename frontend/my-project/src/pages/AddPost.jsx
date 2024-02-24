import React, { useState } from "react";
import Navbar from "../components/common/Navbar";
import axios from "axios";
import { toast } from "react-toastify";

const AddPost = () => {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [file, setFile] = useState(null);

	const handleTitleChange = (e) => {
		setTitle(e.target.value);
	};

	const handleContentChange = (e) => {
		setContent(e.target.value);
	};

	const handleFileChange = (e) => {
		setFile(e.target.files[0]);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		// Create form data
		const formData = new FormData();
		formData.append("title", title);
		formData.append("content", content);
		formData.append("file", file);

		// Send form data to server
		axios
			.post("/posts", formData)
			.then((res) => {
				toast.success(res.data.message);
			})
			.catch((err) => {
				toast.error(err.response.data.message);
			});

		// Reset form fields
		setTitle("");
		setContent("");
		setFile(null);
	};

	return (
		<>
			<Navbar />
			<div className='container w-3/4 mx-auto p-6'>
				<h1 className='text-2xl font-semibold mb-4'>Add New Blog Post</h1>
				<form onSubmit={handleSubmit} className='space-y-4'>
					<div>
						<label htmlFor='title' className='block text-sm font-semibold'>
							Title:
						</label>
						<input
							type='text'
							id='title'
							value={title}
							onChange={handleTitleChange}
							className='w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500'
							required
						/>
					</div>
					<div>
						<label htmlFor='content' className='block text-sm font-semibold'>
							Content:
						</label>
						<textarea
							id='content'
							value={content}
							onChange={handleContentChange}
							className='w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500'
							rows={6}
							required></textarea>
					</div>
					<div>
						<label htmlFor='file' className='block text-sm font-semibold'>
							Upload File:
						</label>
						<input
							type='file'
							id='file'
							onChange={handleFileChange}
							className='w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500'
							accept='.jpg, .jpeg, .png, .pdf' // Define accepted file types
						/>
					</div>
					<button
						type='submit'
						className='px-4 py-2 bg-blue-500 text-white rounded-md'>
						Submit
					</button>
				</form>
			</div>
		</>
	);
};

export default AddPost;
