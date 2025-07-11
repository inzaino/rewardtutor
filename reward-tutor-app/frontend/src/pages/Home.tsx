import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpenIcon, 
  CurrencyDollarIcon, 
  ChartBarIcon,
  StarIcon,
  PlayIcon,
  AcademicCapIcon 
} from '@heroicons/react/24/outline';

const Home: React.FC = () => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center py-12">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Learn Smart. Earn SmartCoins.
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Welcome to Reward Tutor - the AI-powered K-12 tutoring platform where every answer earns more than just a grade.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/lessons" 
            className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
          >
            <PlayIcon className="w-5 h-5 mr-2" />
            Start Learning
          </Link>
          <Link 
            to="/dashboard" 
            className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
          >
            <ChartBarIcon className="w-5 h-5 mr-2" />
            View Dashboard
          </Link>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-slate-800 rounded-lg p-6 learning-card-hover">
          <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
            <BookOpenIcon className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-semibold mb-3">Personalized Learning</h3>
          <p className="text-gray-300">
            AI-powered tutoring adapts to your learning style and pace, with content from Khan Academy and our custom modules.
          </p>
        </div>

        <div className="bg-slate-800 rounded-lg p-6 learning-card-hover">
          <div className="w-12 h-12 smartcoin-gradient rounded-lg flex items-center justify-center mb-4">
            <CurrencyDollarIcon className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-semibold mb-3">SmartCoins Rewards</h3>
          <p className="text-gray-300">
            Earn SmartCoins for completing lessons, quizzes, and showing improvement. Redeem for real rewards!
          </p>
        </div>

        <div className="bg-slate-800 rounded-lg p-6 learning-card-hover">
          <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
            <AcademicCapIcon className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-semibold mb-3">K-12 Coverage</h3>
          <p className="text-gray-300">
            Complete curriculum coverage from Kindergarten through AP courses in all major subjects.
          </p>
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-slate-800 rounded-xl p-8">
        <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
            <h4 className="font-semibold mb-2">Take Assessment</h4>
            <p className="text-gray-300 text-sm">Start with a quick diagnostic to identify your current skill level</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
            <h4 className="font-semibold mb-2">Learn & Practice</h4>
            <p className="text-gray-300 text-sm">Follow your personalized learning path with interactive content</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-smartcoin-600 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
            <h4 className="font-semibold mb-2">Earn SmartCoins</h4>
            <p className="text-gray-300 text-sm">Get rewarded for effort, accuracy, and improvement</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
            <h4 className="font-semibold mb-2">Redeem Rewards</h4>
            <p className="text-gray-300 text-sm">Use SmartCoins for gift cards, event tickets, and more</p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div>
          <div className="text-3xl font-bold text-primary-400">10K+</div>
          <div className="text-gray-300">Students</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-smartcoin-400">1M+</div>
          <div className="text-gray-300">SmartCoins Earned</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-green-400">50+</div>
          <div className="text-gray-300">Subjects</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-purple-400">95%</div>
          <div className="text-gray-300">Success Rate</div>
        </div>
      </div>
    </div>
  );
};

export default Home;