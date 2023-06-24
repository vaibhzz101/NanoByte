const mongoose = require("mongoose");

// Define the schema for your interview question
const interviewQuestionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
  interviewType: {
    type: String,
    required: true,
  },
  difficultyLevel: {
    type: String,
    required: true,
  },
  topics: {
    type: [String],
    required: true,
  },
});

// Create the InterviewQuestion model
const InterviewQuestion = mongoose.model(
  "InterviewQuestion",
  interviewQuestionSchema
);

module.exports = { InterviewQuestion };
