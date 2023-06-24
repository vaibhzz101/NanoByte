import React from "react";

const DashboardPage = () => {
  // Simulated user data for demonstration
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    profilePicture: "https://example.com/profile-picture.jpg",
    // Add more user data as needed
  };

  const recentActivities = [
    {
      id: 1,
      type: "Interview Session",
      description: "Completed technical interview for Company XYZ",
      date: "June 15, 2023",
    },
    {
      id: 2,
      type: "Feedback Received",
      description: "Received feedback on last interview",
      date: "June 10, 2023",
    },
    // Add more recent activities as needed
  ];

  const interviewHistory = [
    {
      id: 1,
      date: "June 15, 2023",
      type: "Technical Interview",
      duration: "45 minutes",
      score: 85,
    },
    {
      id: 2,
      date: "June 10, 2023",
      type: "Behavioral Interview",
      duration: "30 minutes",
      score: 92,
    },
    // Add more interview history entries as needed
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>

      {/* User Profile */}
      <div className="bg-white rounded-lg shadow-md p-4 mb-6">
        <div className="flex items-center">
          {/* <img
            src={user.profilePicture}
            alt="Profile Picture"
            className="w-12 h-12 rounded-full mr-4"
          /> */}
          <div>
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
          </div>
        </div>
        {/* Add additional user profile details as needed */}
      </div>

      {/* Dashboard Overview */}
      <div className="bg-white rounded-lg shadow-md p-4 mb-6">
        <h2 className="text-xl font-semibold mb-2">Overview</h2>
        {/* Add your overview content and statistics here */}
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-md p-4 mb-6">
        <h2 className="text-xl font-semibold mb-2">Recent Activity</h2>
        <ul className="space-y-2">
          {recentActivities.map((activity) => (
            <li key={activity.id}>
              <span className="text-gray-500">{activity.date}</span>
              <p>
                <strong>{activity.type}: </strong>
                {activity.description}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* Interview History */}
      <div className="bg-white rounded-lg shadow-md p-4 mb-6">
        <h2 className="text-xl font-semibold mb-2">Interview History</h2>
        <table className="w-full">
          <thead>
            <tr>
              <th>Date</th>
              <th>Type</th>
              <th>Duration</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {interviewHistory.map((entry) => (
              <tr key={entry.id}>
                <td>{entry.date}</td>
                <td>{entry.type}</td>
                <td>{entry.duration}</td>
                <td>{entry.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Performance Metrics */}
      <div className="bg-white rounded-lg shadow-md p-4 mb-6">
        <h2 className="text-xl font-semibold mb-2">Performance Metrics</h2>
        {/* Add your performance metrics visualizations or charts here */}
      </div>

      {/* Resources and Recommendations */}
      <div className="bg-white rounded-lg shadow-md p-4 mb-6">
        <h2 className="text-xl font-semibold mb-2">
          Resources and Recommendations
        </h2>
        {/* Add your resources and recommendations content here */}
      </div>

      {/* Settings */}
      <div className="bg-white rounded-lg shadow-md p-4 mb-6">
        <h2 className="text-xl font-semibold mb-2">Settings</h2>
        {/* Add your settings options and functionality here */}
      </div>
    </div>
  );
};

export default DashboardPage;
