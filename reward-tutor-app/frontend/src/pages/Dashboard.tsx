import React from 'react';
import { 
  ChartBarIcon, 
  TrophyIcon, 
  BookOpenIcon, 
  ClockIcon,
  FireIcon,
  CurrencyDollarIcon 
} from '@heroicons/react/24/outline';

const Dashboard: React.FC = () => {
  const stats = [
    { label: 'SmartCoins', value: '1,275', icon: CurrencyDollarIcon, color: 'text-smartcoin-400' },
    { label: 'Lessons Completed', value: '47', icon: BookOpenIcon, color: 'text-blue-400' },
    { label: 'Current Streak', value: '12 days', icon: FireIcon, color: 'text-orange-400' },
    { label: 'Average Score', value: '87%', icon: TrophyIcon, color: 'text-green-400' },
  ];

  const recentActivities = [
    { id: 1, title: 'Algebra: Linear Equations', subject: 'Math', score: 92, timeAgo: '2 hours ago' },
    { id: 2, title: 'Cell Division Process', subject: 'Biology', score: 88, timeAgo: '1 day ago' },
    { id: 3, title: 'American Revolution Essay', subject: 'History', score: 95, timeAgo: '2 days ago' },
  ];

  const currentLearningPath = {
    title: 'Algebra Fundamentals',
    progress: 65,
    nextLesson: 'Quadratic Equations',
    totalLessons: 15,
    completedLessons: 10,
  };

  const upcomingAssignments = [
    { id: 1, title: 'Chemistry Lab Report', dueDate: 'Tomorrow', subject: 'Chemistry' },
    { id: 2, title: 'Shakespeare Analysis', dueDate: 'Friday', subject: 'English' },
    { id: 3, title: 'Geography Quiz', dueDate: 'Next Monday', subject: 'Social Studies' },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold mb-2">Welcome back, Alex!</h1>
          <p className="text-gray-300">Ready to continue your learning journey?</p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-smartcoin-400">1,275 SmartCoins</div>
          <div className="text-sm text-gray-400">225 away from next reward</div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="bg-slate-800 rounded-lg p-6">
              <div className="flex items-center justify-between mb-2">
                <Icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <div className="text-2xl font-bold mb-1">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          );
        })}
      </div>

      {/* Current Learning Path */}
      <div className="bg-slate-800 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6">Current Learning Path</h2>
        <div className="bg-slate-700 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold">{currentLearningPath.title}</h3>
            <span className="text-sm text-gray-400">
              {currentLearningPath.completedLessons}/{currentLearningPath.totalLessons} lessons
            </span>
          </div>
          
          <div className="mb-4">
            <div className="flex justify-between text-sm mb-2">
              <span>Progress</span>
              <span>{currentLearningPath.progress}%</span>
            </div>
            <div className="w-full bg-slate-600 rounded-full h-2">
              <div 
                className="bg-primary-600 h-2 rounded-full" 
                style={{ width: `${currentLearningPath.progress}%` }}
              ></div>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-400">Next Lesson</div>
              <div className="font-semibold">{currentLearningPath.nextLesson}</div>
            </div>
            <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg">
              Continue Learning
            </button>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Recent Activities */}
        <div className="bg-slate-800 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Recent Activities</h2>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="bg-slate-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold">{activity.title}</h4>
                  <span className={`font-bold ${
                    activity.score >= 90 ? 'text-green-400' : 
                    activity.score >= 80 ? 'text-yellow-400' : 'text-red-400'
                  }`}>
                    {activity.score}%
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>{activity.subject}</span>
                  <span className="flex items-center">
                    <ClockIcon className="w-4 h-4 mr-1" />
                    {activity.timeAgo}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Assignments */}
        <div className="bg-slate-800 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Upcoming Assignments</h2>
          <div className="space-y-4">
            {upcomingAssignments.map((assignment) => (
              <div key={assignment.id} className="bg-slate-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold">{assignment.title}</h4>
                  <span className="text-sm text-gray-400">{assignment.dueDate}</span>
                </div>
                <div className="text-sm text-gray-400">{assignment.subject}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-slate-800 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="bg-primary-600 hover:bg-primary-700 text-white p-4 rounded-lg text-center">
            <BookOpenIcon className="w-8 h-8 mx-auto mb-2" />
            <div className="font-semibold">Browse Lessons</div>
          </button>
          <button className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-lg text-center">
            <TrophyIcon className="w-8 h-8 mx-auto mb-2" />
            <div className="font-semibold">Take Quiz</div>
          </button>
          <button className="bg-purple-600 hover:bg-purple-700 text-white p-4 rounded-lg text-center">
            <ChartBarIcon className="w-8 h-8 mx-auto mb-2" />
            <div className="font-semibold">View Progress</div>
          </button>
          <button className="bg-smartcoin-600 hover:bg-smartcoin-700 text-white p-4 rounded-lg text-center">
            <CurrencyDollarIcon className="w-8 h-8 mx-auto mb-2" />
            <div className="font-semibold">Redeem Rewards</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;