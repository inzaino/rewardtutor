import React from 'react';
import { PlayIcon, ClockIcon, StarIcon } from '@heroicons/react/24/outline';

const Lessons: React.FC = () => {
  const subjects = [
    { name: 'Mathematics', icon: '🔢', lessons: 245, color: 'bg-blue-600' },
    { name: 'Science', icon: '🔬', lessons: 189, color: 'bg-green-600' },
    { name: 'English', icon: '📚', lessons: 156, color: 'bg-purple-600' },
    { name: 'Social Studies', icon: '🌍', lessons: 134, color: 'bg-orange-600' },
    { name: 'Computer Science', icon: '💻', lessons: 67, color: 'bg-red-600' },
  ];

  const featuredLessons = [
    {
      id: 1,
      title: 'Introduction to Algebra',
      subject: 'Mathematics',
      duration: '25 min',
      difficulty: 'Intermediate',
      smartCoins: 100,
      thumbnail: '🧮',
    },
    {
      id: 2,
      title: 'Cellular Biology Basics',
      subject: 'Science',
      duration: '30 min',
      difficulty: 'Beginner',
      smartCoins: 125,
      thumbnail: '🦠',
    },
    {
      id: 3,
      title: 'Essay Writing Techniques',
      subject: 'English',
      duration: '40 min',
      difficulty: 'Advanced',
      smartCoins: 150,
      thumbnail: '✍️',
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Learning Library</h1>
        <p className="text-xl text-gray-300">
          Explore thousands of lessons powered by Khan Academy and our AI tutoring system
        </p>
      </div>

      {/* Subject Categories */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {subjects.map((subject) => (
          <div
            key={subject.name}
            className="bg-slate-800 rounded-lg p-6 text-center learning-card-hover cursor-pointer"
          >
            <div className={`w-16 h-16 ${subject.color} rounded-full flex items-center justify-center mx-auto mb-4 text-2xl`}>
              {subject.icon}
            </div>
            <h3 className="font-semibold mb-2">{subject.name}</h3>
            <p className="text-gray-400 text-sm">{subject.lessons} lessons</p>
          </div>
        ))}
      </div>

      {/* Featured Lessons */}
      <div className="bg-slate-800 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6">Featured Lessons</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {featuredLessons.map((lesson) => (
            <div key={lesson.id} className="bg-slate-700 rounded-lg p-6 learning-card-hover cursor-pointer">
              <div className="text-4xl mb-4">{lesson.thumbnail}</div>
              <h3 className="font-semibold mb-2">{lesson.title}</h3>
              <p className="text-gray-400 text-sm mb-3">{lesson.subject}</p>
              
              <div className="flex items-center justify-between text-sm text-gray-300 mb-4">
                <div className="flex items-center">
                  <ClockIcon className="w-4 h-4 mr-1" />
                  {lesson.duration}
                </div>
                <div className="flex items-center">
                  <StarIcon className="w-4 h-4 mr-1" />
                  {lesson.difficulty}
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center text-smartcoin-400">
                  <span className="font-semibold">{lesson.smartCoins}</span>
                  <span className="text-xs ml-1">SmartCoins</span>
                </div>
                <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg flex items-center">
                  <PlayIcon className="w-4 h-4 mr-2" />
                  Start
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Khan Academy Integration Notice */}
      <div className="bg-blue-900/30 border border-blue-700 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-2 text-blue-300">Powered by Khan Academy</h3>
        <p className="text-gray-300 mb-4">
          Many of our lessons are sourced from Khan Academy's world-class educational content. 
          All Khan Academy materials remain freely accessible.
        </p>
        <div className="khan-attribution">
          <p>
            Some instructional content provided courtesy of{' '}
            <a 
              href="https://www.khanacademy.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300"
            >
              Khan Academy (www.khanacademy.org)
            </a>
            . All Khan Academy materials are freely available.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Lessons;