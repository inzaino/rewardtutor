import React from 'react';
import { 
  CurrencyDollarIcon, 
  ChartBarIcon, 
  CogIcon, 
  UserGroupIcon,
  ClockIcon,
  TrophyIcon 
} from '@heroicons/react/24/outline';

const Parents: React.FC = () => {
  const childrenProgress = [
    {
      id: 1,
      name: 'Alex Johnson',
      grade: '8th Grade',
      smartCoins: 1275,
      weeklyHours: 8.5,
      averageScore: 87,
      currentStreak: 12,
    },
    {
      id: 2,
      name: 'Emma Johnson',
      grade: '5th Grade',
      smartCoins: 890,
      weeklyHours: 6.2,
      averageScore: 92,
      currentStreak: 8,
    },
  ];

  const smartCoinSettings = [
    { activity: 'Lesson Completion', defaultCoins: 100, currentCoins: 100 },
    { activity: 'Quiz Completion (90%+)', defaultCoins: 75, currentCoins: 100 },
    { activity: 'Essay Submission', defaultCoins: 150, currentCoins: 150 },
    { activity: 'Daily Streak Bonus', defaultCoins: 25, currentCoins: 25 },
    { activity: 'Peer Review', defaultCoins: 50, currentCoins: 75 },
  ];

  const pendingRewards = [
    {
      id: 1,
      child: 'Alex Johnson',
      reward: 'Amazon Gift Card ($5)',
      smartCoinsUsed: 500,
      requestedAt: '2 hours ago',
    },
    {
      id: 2,
      child: 'Emma Johnson',
      reward: 'Movie Ticket',
      smartCoinsUsed: 800,
      requestedAt: '1 day ago',
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Parent Dashboard</h1>
        <p className="text-xl text-gray-300">
          Monitor your children's progress and manage their SmartCoins rewards
        </p>
      </div>

      {/* Children Overview */}
      <div className="grid md:grid-cols-2 gap-6">
        {childrenProgress.map((child) => (
          <div key={child.id} className="bg-slate-800 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">{child.name}</h3>
              <span className="text-gray-400">{child.grade}</span>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-slate-700 rounded-lg p-3">
                <div className="flex items-center text-smartcoin-400 mb-1">
                  <CurrencyDollarIcon className="w-4 h-4 mr-1" />
                  <span className="text-sm">SmartCoins</span>
                </div>
                <div className="text-lg font-bold">{child.smartCoins.toLocaleString()}</div>
              </div>
              
              <div className="bg-slate-700 rounded-lg p-3">
                <div className="flex items-center text-blue-400 mb-1">
                  <ClockIcon className="w-4 h-4 mr-1" />
                  <span className="text-sm">Weekly Hours</span>
                </div>
                <div className="text-lg font-bold">{child.weeklyHours}h</div>
              </div>
              
              <div className="bg-slate-700 rounded-lg p-3">
                <div className="flex items-center text-green-400 mb-1">
                  <TrophyIcon className="w-4 h-4 mr-1" />
                  <span className="text-sm">Avg Score</span>
                </div>
                <div className="text-lg font-bold">{child.averageScore}%</div>
              </div>
              
              <div className="bg-slate-700 rounded-lg p-3">
                <div className="flex items-center text-orange-400 mb-1">
                  <span className="text-sm">🔥 Streak</span>
                </div>
                <div className="text-lg font-bold">{child.currentStreak} days</div>
              </div>
            </div>
            
            <button className="w-full bg-primary-600 hover:bg-primary-700 text-white py-2 rounded-lg">
              View Detailed Progress
            </button>
          </div>
        ))}
      </div>

      {/* SmartCoin Settings */}
      <div className="bg-slate-800 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <CogIcon className="w-6 h-6 mr-2" />
          SmartCoin Settings
        </h2>
        <p className="text-gray-300 mb-6">
          Customize how many SmartCoins your children earn for different activities.
        </p>
        
        <div className="space-y-4">
          {smartCoinSettings.map((setting, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-slate-700 rounded-lg">
              <div>
                <div className="font-semibold">{setting.activity}</div>
                <div className="text-sm text-gray-400">Default: {setting.defaultCoins} SmartCoins</div>
              </div>
              <div className="flex items-center space-x-4">
                <input
                  type="number"
                  value={setting.currentCoins}
                  className="w-20 px-3 py-2 bg-slate-600 border border-gray-600 rounded text-white text-center"
                  min="0"
                  max="500"
                />
                <span className="text-smartcoin-400 font-semibold">SmartCoins</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 flex space-x-4">
          <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg">
            Save Changes
          </button>
          <button className="bg-slate-600 hover:bg-slate-500 text-white px-6 py-2 rounded-lg">
            Reset to Defaults
          </button>
        </div>
      </div>

      {/* Pending Reward Approvals */}
      <div className="bg-slate-800 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6">Pending Reward Approvals</h2>
        
        {pendingRewards.length > 0 ? (
          <div className="space-y-4">
            {pendingRewards.map((request) => (
              <div key={request.id} className="bg-slate-700 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="font-semibold">{request.child}</h4>
                    <p className="text-gray-400">wants to redeem: {request.reward}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-smartcoin-400 font-bold">-{request.smartCoinsUsed} SmartCoins</div>
                    <div className="text-sm text-gray-400">{request.requestedAt}</div>
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg flex-1">
                    Approve & Purchase
                  </button>
                  <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg flex-1">
                    Decline
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-gray-400">
            <UserGroupIcon className="w-16 h-16 mx-auto mb-4 opacity-50" />
            <p>No pending reward requests</p>
          </div>
        )}
      </div>

      {/* Communication Tools */}
      <div className="bg-slate-800 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6">Communication & Insights</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-700 rounded-lg p-6 text-center">
            <ChartBarIcon className="w-12 h-12 mx-auto mb-4 text-blue-400" />
            <h4 className="font-semibold mb-2">Weekly Reports</h4>
            <p className="text-gray-400 text-sm mb-4">Get detailed progress summaries</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
              View Reports
            </button>
          </div>
          
          <div className="bg-slate-700 rounded-lg p-6 text-center">
            <UserGroupIcon className="w-12 h-12 mx-auto mb-4 text-green-400" />
            <h4 className="font-semibold mb-2">Teacher Messages</h4>
            <p className="text-gray-400 text-sm mb-4">Connect with your child's teachers</p>
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg">
              Open Messages
            </button>
          </div>
          
          <div className="bg-slate-700 rounded-lg p-6 text-center">
            <CogIcon className="w-12 h-12 mx-auto mb-4 text-purple-400" />
            <h4 className="font-semibold mb-2">Account Settings</h4>
            <p className="text-gray-400 text-sm mb-4">Manage account and privacy</p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg">
              Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parents;