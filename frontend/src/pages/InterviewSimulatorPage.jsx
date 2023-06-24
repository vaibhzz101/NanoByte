import React, { useState } from "react";
import axios from "axios";
require("dotenv").config();
const InterviewSimulatorPage = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const simulateInterview = async () => {
    try {
      // Make the API call to OpenAI
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [
            { role: "system", content: "You are a helpful assistant." },
            { role: "user", content: question },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.api_key}`,
          },
        }
      );

      // Extract the generated answer from the response
      const generatedAnswer = response.data.choices[0].message.content;
      setAnswer(generatedAnswer);
    } catch (error) {
      console.error(error);
      // Handle error case
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Interview Simulator</h1>
      <div className="flex items-center justify-center">
        <div className="w-full max-w-lg">
          <div className="mb-4">
            <label htmlFor="question" className="font-semibold mb-2 block">
              Enter your interview question:
            </label>
            <textarea
              id="question"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none"
              rows="4"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            ></textarea>
          </div>
          <div className="mb-4">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
              onClick={simulateInterview}
            >
              Simulate Interview
            </button>
          </div>
          {answer && (
            <div>
              <h2 className="font-semibold mb-2">Generated Answer:</h2>
              <p>{answer}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InterviewSimulatorPage;
