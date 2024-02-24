import React, { useState, useEffect } from "react";
import Navbar from "../components/common/Navbar";
import HeroSection from "../components/HeroSection";
import CustomTripSection from "../components/CustomTripSection";
import CommunityPartners from "../components/CommunityPartners";
import Card from "../components/Card";
import Footer from "../components/common/Footer";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const fetchPosts = async () => {
			const res = await axios.get("/posts");
			setPosts(res.data.post);
		};
		fetchPosts();
	}, []);

	return (
		<>
			<Navbar />
			<HeroSection />
			<CustomTripSection />
			<CommunityPartners />
			<h1 className='font-bold text-3xl text-center py-6'>
				Our Community Posts
			</h1>
			<div className='px-10 flex gap-5'>
				{/* Show only 6 blogs */}
				{posts.slice(0, 6).map((post) => (
					<Link key={post._id} to={`/community/posts/${post._id}`}>
						<Card post={post} />
					</Link>
				))}
			</div>
			<Footer />
		</>
	);
};

export default Home;
