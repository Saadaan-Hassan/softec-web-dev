import React from "react";
import { useNavigate } from "react-router";

const Card = ({ post }) => {
	if (!post) {
		return <h1>Loading...</h1>;
	}
	return (
		<>
			<div className='card w-80 bg-base-100 shadow-xl cursor-pointer'>
				<figure>
					<img
						src={
							post.post_image ||
							"https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
						}
						alt='Shoes'
						className='rounded-t-lg'
						style={{ width: "100%", height: "200px" }}
					/>
				</figure>
				<div className='card-body'>
					<h2 className='card-title'>
						{post.title}
						<div className='badge badge-success	'>NEW</div>
					</h2>
					<p>{post.content}</p>
					<div className='card-actions justify-end'>
						{/* <div className='badge badge-outline'>Fashion</div>
						<div className='badge badge-outline'>Products</div> */}
					</div>
				</div>
			</div>
		</>
	);
};

export default Card;
