import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";
import FilterCombo from "../components/common/FilterCombo";
import Navbar from "../components/common/Navbar";
import { Link } from "react-router-dom";

const Community = () => {
	const [posts, setPosts] = useState([]);
	const [filter, setFilter] = useState("All");

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
			{/* Filter section */}
			<div className='p-10'>
				<h1 className='text-xl font-bold'>Filter By</h1>
				<br />
				<FilterCombo
					options={["All", "Latest"]}
					onSelect={(value) => console.log(value)}
				/>

				<div className='my-10 flex flex-wrap gap-10'>
					{posts.map((post) => (
						<Link key={post._id} to={`/community/post/${post._id}`}>
							<Card post={post} />
						</Link>
					))}
				</div>
			</div>
		</>
	);
};

export default Community;
