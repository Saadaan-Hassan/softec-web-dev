import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Navbar from "../components/common/Navbar";

const ContactUs = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [messageType, setMessageType] = useState("complaint"); // Default to complaint

	const handleSubmit = (e) => {
		e.preventDefault();

		// Send form data to the server
		axios
			.post("/queries/", {
				name,
				email,
				message,
				messageType,
			})
			.then((response) => {
				toast.success(response.data.message);
			});

		// Reset form fields
		setName("");
		setEmail("");
		setMessage("");
		setMessageType("complaint"); // Reset message type to default
	};

	return (
		<>
			<Navbar />
			<div className='container w-3/4  mx-auto p-6'>
				<h1 className='text-3xl font-semibold mb-6'>Contact Us</h1>
				<form onSubmit={handleSubmit} className='space-y-4'>
					<div>
						<label htmlFor='name' className='block text-sm font-semibold'>
							Name:
						</label>
						<input
							type='text'
							id='name'
							value={name}
							onChange={(e) => setName(e.target.value)}
							className='w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500'
							required
						/>
					</div>
					<div>
						<label htmlFor='email' className='block text-sm font-semibold'>
							Email:
						</label>
						<input
							type='email'
							id='email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className='w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500'
							required
						/>
					</div>
					<div>
						<label htmlFor='message' className='block text-sm font-semibold'>
							Message:
						</label>
						<textarea
							id='message'
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							className='w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500'
							rows={6}
							required></textarea>
					</div>
					<div>
						<label
							htmlFor='messageType'
							className='block text-sm font-semibold'>
							Message Type:
						</label>
						<select
							id='messageType'
							value={messageType}
							onChange={(e) => setMessageType(e.target.value)}
							className='w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500'>
							<option value='complaint'>Complaint</option>
							<option value='QA'>Question/Answer</option>
						</select>
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

export default ContactUs;
