import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-gray-200 text-center py-16">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to AI-Powered Interview Mastery
        </h1>
        <p className="text-lg mb-8">
          Supercharge your interview skills and land your dream job.
        </p>
        <div className="flex justify-center">
          <img
            src="https://www.interviewai.io/images/referican_bottom.svg"
            alt="Interview Illustration"
            className="w-1/2"
          />
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Why Choose Our Platform?</h2>
          <ul className="list-disc list-inside">
            <li>
              Access a wide range of interview questions across various domains
              and job roles.
            </li>
            <li>
              Improve your interview performance with personalized feedback and
              suggestions.
            </li>
            <li>Track your progress over time and see how you're improving.</li>
            <li>
              Boost your confidence and enhance your communication skills.
            </li>
            <li>Prepare for both technical and behavioral interviews.</li>
            <li>
              Get valuable insights into industry-specific interview trends and
              expectations.
            </li>
            <li>
              Stay updated with the latest interview techniques and best
              practices.
            </li>
          </ul>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Join Our Community Today</h2>
          <p className="text-lg">
            Sign up now and start your journey towards interview mastery!
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4">
            Sign Up
          </button>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">What Our Users Say</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <p className="text-lg mb-2">
                "This platform helped me tremendously in my interview
                preparation. The personalized feedback and realistic interview
                simulations were invaluable!"
              </p>
              <p className="text-gray-500">- John Doe, Software Engineer</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <p className="text-lg mb-2">
                "I'm impressed with the quality of interview questions provided.
                It covers a wide range of topics and really helped me broaden my
                knowledge and confidence."
              </p>
              <p className="text-gray-500">- Jane Smith, Product Manager</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
