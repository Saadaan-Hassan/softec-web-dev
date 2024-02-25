import mongoose from "mongoose";

const generateSampleData = async (collection) => {
    try {
        const documents = [];
        for (let i = 0; i < 10; i++) {
            documents.push({
                location_name: `Sample Place ${i}`,
                picture: `https://placeimg.com/640/480/arch`,
                latitude: Math.random() * 180 - 90, 
                longitude: Math.random() * 360 - 180, 
                city: "lhr",
                category: "Abc"
            });
        }
        await collection.insertMany(documents);
        console.log(`Sample data inserted into ${collection.collectionName} collection.`);
    } catch (error) {
        console.error(`Error inserting sample data: ${error.message}`);
    }
};

const connectDB = async (url) => {
    try {
        const conn = await mongoose.connect(url);
        console.log(`MongoDB Connected: ${conn.connection.host}`);

        try {
            // const collection = conn.connection.collection('places');
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
