import React, { useEffect, useState } from "react";
import axios from "axios";

const InterviewQuestions = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInterviewQuestions = async () => {
      try {
        const response = await axios.get("/api/interview-questions"); // Replace with your API endpoint

        setQuestions(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching interview questions:", error);
        setLoading(false);
      }
    };

    fetchInterviewQuestions();
  }, []);

  return (
    <div className="bg-gray-200 p-4">
      <h2 className="text-2xl font-bold mb-4">Interview Questions</h2>
      {loading ? (
        <p>Loading interview questions...</p>
      ) : (
        <ul className="list-disc pl-6">
          {questions.map((question) => (
            <li key={question.id} className="mb-2">
              {question.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default InterviewQuestions;
