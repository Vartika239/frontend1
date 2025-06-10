import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 to-black-700 flex flex-col items-center justify-center text-white px-4">
      {/* Logo & Tagline */}
      <h1 className="text-5xl font-bold mb-6 text-center text-white">VibeNet</h1>
      <p className="text-xl md:text-3xl font-bold mb-10 max-w-xl text-white text-center">
        Where Moments Become Memories – Join the Vibe.
      </p>

      {/* Main content: Image left, buttons right */}
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-16">
        {/* Image on the left */}
        <img
          src="/images/Pic1.jpg"
          alt="Social Media Vibe"
          className="rounded-2xl shadow-xl max-w-xs w-full"
        />

        {/* Buttons on the right, stacked vertically */}
        <div className="flex flex-col space-y-6 mt-40">
          <button
            onClick={() => navigate('/login')}
            className="bg-gray-800 text-white font-semibold text-xl py-3 px-8 rounded-xl hover:scale-105 hover:bg-white hover:text-black transition"
          >
            Login
          </button>
          <button
            onClick={() => navigate('/register')}
            className="bg-gray-800 border border-white text-white font-semibold text-xl py-3 px-8 rounded-xl hover:scale-105 hover:bg-white hover:text-black transition"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
