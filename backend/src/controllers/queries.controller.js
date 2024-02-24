import Query from "../models/queries.model.js";

const getQueries = async (req, res) => {
	try {
		const queries = await Query.find();
		res.status(200).json(queries);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Internal server error" });
	}
};

const getQuery = async (req, res) => {
	const { id } = req.params;

	try {
		const query = await Query.findById(id);
		if (!query) {
			return res.status(404).json({ message: "Query not found" });
		}
		res.status(200).json(query);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Internal server error" });
	}
};
// Post a question (api/queries/)
const addQuery = async (req, res) => {
	const { name, email, message, messageType } = req.body;
	const emptyFields = [];
	if (!name) emptyFields.push("name");
	if (!messageType) emptyFields.push("type");
	if (!email) emptyFields.push("email");
	if (!message) emptyFields.push("description");

	// If any field is empty, return error message
	if (emptyFields.length > 0) {
		const message = `Please enter : ${emptyFields.join(", ")}`;
		return res.status(400).json({ message });
	}
	try {
		const query = new Query({ name, messageType, email, message });
		await query.save();
		res.status(201).json({ message: "Message submitted successfully" });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Internal server error" });
	}
};

// Patch answer (api/queries/:id)
const queryAns = async (req, res) => {
	const { answer } = req.body;
	const { id } = req.params;
	if (!answer) {
		return res.status(400).json({ message: "Please provide an answer" });
	}
	try {
		const query = await Query.findByIdAndUpdate(id, { answer, replied: true });
		if (!query) {
			return res.status(404).json({ message: "Message not found" });
		}
		res.status(200).json({ message: "Answer submitted successfully" });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Internal server error" });
	}
};

export { addQuery, queryAns, getQueries, getQuery };
