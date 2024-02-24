import mongoose from "mongoose";
import dotenv from "dotenv";
import Query from "../models/queries.model.js";
dotenv.config();

const getQueries = async (req, res) => {
    try {
        const queries = await Query.find({ replied: false });
        res.status(200).json(queries);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

const getAnsweredQueries = async (req, res) => {
  try {
      const queries = await Query.find({ replied: true });
      res.status(200).json(queries);
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
  }
}
const getQuery = async (req,res) => {
    const { id } = req.params;

    try {
      const query = await Query.findById(id);
      if (!query) {
        return res.status(404).json({ message: 'Query not found' });
      }
      res.status(200).json(query);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
}
// Post a question (api/queries/)
const addQuery = async (req, res) => {
  const { firstName, lastName, email, subject, description } = req.body;
  const emptyFields = [];
  if (!firstName) emptyFields.push('firstName');
  if (!lastName) emptyFields.push('lastName');
  if (!email) emptyFields.push('email');
  if (!subject) emptyFields.push('subject');
  if (!description) emptyFields.push('description');

  // If any field is empty, return error message
  if (emptyFields.length > 0) {
    const message = `Please enter : ${emptyFields.join(', ')}`;
    return res.status(400).json({ message });
  }
  try {
    const query = new Query({ firstName, lastName, email, subject, description });
    await query.save();
    res.status(201).json({ message: 'Query submitted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Patch answer (api/queries/:id)
const queryAns = async (req, res) => {
  const { answer } = req.body;
  const { id } = req.params;
  if (!answer) {
    return res.status(400).json({ message: 'Please provide an answer' });
  }
  try {
    const query = await Query.findByIdAndUpdate(id, { answer, replied: true });
    if (!query) {
      return res.status(404).json({ message: 'Query not found' });
    }
    res.status(200).json({ message: 'Answer added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export { addQuery, queryAns, getQueries, getQuery, getAnsweredQueries };