import { Schema, model } from "mongoose";

// •	name
// •	pictures []
// •	videos []
// •	desc
// •	latitude
// •	longitude
// •	city
// •	category

const placeSchema = new Schema({
	location_name: {
		type: String,
		required: true,
		trim: true,
	},
	picture: {
		type: String,
	},

	video: {
		type: String,
	},
	description: {
		type: String,
		trim: true,
	},
	latitude: {
		type: Number,
		required: true,
	},
	longitude: {
		type: Number,
		required: true,
	},
	city: {
		type: String,
		required: true,
	},
	category: {
		type: String,
		required: true,
	},
});

export default model("Place", placeSchema);
