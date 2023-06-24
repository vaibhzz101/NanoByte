import React, { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const InterviewSimulatorPage = () => {
  const [interviewType, setInterviewType] = useState("");
  const [difficultyLevel, setDifficultyLevel] = useState("");
  const [topics, setTopics] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [userResponse, setUserResponse] = useState("");
  const [feedback, setFeedback] = useState("");
  const apiKey = process.env.api_key;

  const handleInterviewTypeChange = (e) => {
    setInterviewType(e.target.value);
  };

  const handleDifficultyLevelChange = (e) => {
    setDifficultyLevel(e.target.value);
  };

  const handleTopicChange = (e) => {
    const selectedTopics = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setTopics(selectedTopics);
  };

  const handleGenerateQuestions = async () => {
    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [
            { role: "system", content: "You are a helpful assistant." },
            {
              role: "user",
              content: `Generate ${interviewType} interview questions for ${topics.join(
                ", "
              )}.`,
            },
          ],
          max_tokens: 100,
          temperature: 0.7,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );

      const generatedQuestions = response.data.choices[0].message.content;
      const questionsArray = generatedQuestions.split("\n").map((question) => ({
        text: question,
      }));
      setQuestions(questionsArray);
    } catch (error) {
      console.error(error);
      // Handle error case
    }
  };

  const handleUserResponseChange = (e) => {
    setUserResponse(e.target.value);
  };

  const handleGetFeedback = async () => {
    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [
            { role: "system", content: "You are a helpful assistant." },
            { role: "user", content: userResponse },
          ],
          max_tokens: 100,
          temperature: 0.7,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );

      const generatedFeedback = response.data.choices[0].message.content;
      setFeedback(generatedFeedback);
    } catch (error) {
      console.error(error);
      // Handle error case
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-center ">
        <div className="container mx-auto px-4 py-8 justify-center">
          <h1 className="text-4xl font-bold mb-4">Interview Simulator</h1>
          <div className="mb-4 ">
            <label htmlFor="interviewType" className="mr-2 text-lg font-bold ">
              Interview Type:
            </label>
            <select
              id="interviewType"
              value={interviewType}
              onChange={handleInterviewTypeChange}
              className="border border-gray-300 rounded-md p-2"
            >
              <option value="">Select interview type</option>
              <option value="Technical">Technical</option>
              <option value="Behavioral">Behavioral</option>
              {/* Add more options if needed */}
            </select>
          </div>
          <div className="mb-4 ">
            <label htmlFor="difficultyLevel" className="mr-2 text-lg font-bold">
              Difficulty Level:
            </label>
            <select
              id="difficultyLevel"
              value={difficultyLevel}
              onChange={handleDifficultyLevelChange}
              className="border border-gray-300 rounded-md p-2"
            >
              <option value="">Select difficulty level</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
              {/* Add more options if needed */}
            </select>
          </div>
          <div className="mb-4 flex  ">
            <label htmlFor="topics" className="mr-3 text-lg font-bold">
              Topics:
            </label>
            <select
              id="topics"
              multiple
              value={topics}
              onChange={handleTopicChange}
              className="border border-gray-300 rounded-md p-2"
            >
              <option value="JavaScript">JavaScript</option>
              <option value="React">React</option>
              <option value="Node.js">Node.js</option>
              <option value="Java">Java</option>
              <option value="behavioural">behavioural</option>
              {/* Add more topics if needed */}
            </select>
          </div>
          <button
            onClick={handleGenerateQuestions}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Generate Questions
          </button>
          {questions.length > 0 && (
            <div className="mt-4">
              <h2 className="text-2xl font-bold mb-2">Generated Questions:</h2>
              <ul className="list-disc list-inside">
                {questions.map((question, index) => (
                  <li key={index}>{question.text}</li>
                ))}
              </ul>
            </div>
          )}
          <div className="mt-4">
            <h2 className="text-2xl font-bold mb-2">Your Response:</h2>
            <textarea
              value={userResponse}
              onChange={handleUserResponseChange}
              className="border border-gray-300 rounded-md p-2"
            ></textarea>
          </div>
          <button
            onClick={handleGetFeedback}
            className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
          >
            Get Feedback
          </button>
          {feedback && (
            <div className="mt-4">
              <h2 className="text-2xl font-bold mb-2">Feedback:</h2>
              <p>{feedback}</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default InterviewSimulatorPage;
