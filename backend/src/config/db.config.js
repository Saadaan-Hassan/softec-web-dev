import mongoose from "mongoose";
import { faker } from "@faker-js/faker";

const generateSampleData = async (collection) => {
	try {
		const documents = [];
		for (let i = 0; i < 20; i++) {
			documents.push({
				title: "Amazing Post on " + faker.location.city(),
				post_image: faker.image.urlLoremFlickr({ category: "nature" }),
				content: faker.lorem.paragraphs(3),
			});
		}
		await collection.insertMany(documents);
		console.log(
			`Sample data inserted into ${collection.collectionName} collection.`
		);
	} catch (error) {
		console.error(`Error inserting sample data: ${error.message}`);
	}
};

const connectDB = async (url) => {
	try {
		const conn = await mongoose.connect(url);
		console.log(`MongoDB Connected: ${conn.connection.host}`);

		try {
			// const collection = conn.connection.collection("posts");
			// await generateSampleData(collection);
		} catch (error) {
			console.error(`Error checking collection count: ${error.message}`);
		}
	} catch (error) {
		console.error(`Error: ${error.message}`);
		process.exit(1);
	}
};

export default connectDB;
