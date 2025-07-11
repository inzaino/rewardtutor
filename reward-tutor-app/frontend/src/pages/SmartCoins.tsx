import React from 'react';
import { CurrencyDollarIcon, GiftIcon, ClockIcon } from '@heroicons/react/24/outline';

const SmartCoins: React.FC = () => {
  const recentTransactions = [
    { id: 1, description: 'Completed Algebra Quiz', amount: 75, type: 'EARNED', date: '2 hours ago' },
    { id: 2, description: 'Essay Submission Bonus', amount: 50, type: 'BONUS', date: '1 day ago' },
    { id: 3, description: 'Daily Streak Reward', amount: 25, type: 'EARNED', date: '1 day ago' },
    { id: 4, description: 'Amazon Gift Card', amount: -500, type: 'SPENT', date: '3 days ago' },
  ];

  const availableRewards = [
    { id: 1, name: 'Amazon Gift Card', cost: 500, value: '$5', category: 'gift_card', icon: '🎁' },
    { id: 2, name: 'Starbucks Gift Card', cost: 400, value: '$5', category: 'gift_card', icon: '☕' },
    { id: 3, name: 'Movie Ticket', cost: 800, value: '$12', category: 'entertainment', icon: '🎬' },
    { id: 4, name: 'Gaming Credits', cost: 600, value: '$10', category: 'gaming', icon: '🎮' },
  ];

  const earningMethods = [
    { action: 'Complete Lesson', coins: 100, icon: '📚' },
    { action: 'Finish Quiz (90%+)', coins: 75, icon: '🎯' },
    { action: 'Essay Submission', coins: 150, icon: '✍️' },
    { action: 'Code Assignment', coins: 150, icon: '💻' },
    { action: 'Daily Streak', coins: 25, icon: '🔥' },
    { action: 'Peer Review', coins: 50, icon: '👥' },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">SmartCoins Center</h1>
        <p className="text-xl text-gray-300">
          Your effort deserves real rewards. Track your SmartCoins and redeem for exciting prizes!
        </p>
      </div>

      {/* Balance Overview */}
      <div className="bg-gradient-to-r from-smartcoin-600 to-smartcoin-700 rounded-xl p-8 text-center">
        <div className="text-6xl font-bold mb-2">1,275</div>
        <div className="text-xl opacity-90">Total SmartCoins</div>
        <div className="mt-4 text-sm opacity-75">
          You're 225 SmartCoins away from your next reward goal!
        </div>
      </div>

      {/* How to Earn */}
      <div className="bg-slate-800 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6">How to Earn SmartCoins</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {earningMethods.map((method, index) => (
            <div key={index} className="bg-slate-700 rounded-lg p-4 flex items-center space-x-4">
              <div className="text-2xl">{method.icon}</div>
              <div className="flex-1">
                <div className="font-semibold text-sm">{method.action}</div>
                <div className="text-smartcoin-400 font-bold">+{method.coins} SmartCoins</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Available Rewards */}
      <div className="bg-slate-800 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6">Redeem Rewards</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {availableRewards.map((reward) => (
            <div key={reward.id} className="bg-slate-700 rounded-lg p-6 text-center learning-card-hover">
              <div className="text-4xl mb-4">{reward.icon}</div>
              <h3 className="font-semibold mb-2">{reward.name}</h3>
              <div className="text-gray-400 text-sm mb-3">{reward.value} value</div>
              <div className="text-smartcoin-400 font-bold mb-4">{reward.cost} SmartCoins</div>
              <button className="w-full bg-primary-600 hover:bg-primary-700 text-white py-2 rounded-lg font-semibold">
                Request Reward
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-slate-800 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6">Recent Activity</h2>
        <div className="space-y-4">
          {recentTransactions.map((transaction) => (
            <div key={transaction.id} className="flex items-center justify-between p-4 bg-slate-700 rounded-lg">
              <div className="flex items-center space-x-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  transaction.type === 'SPENT' ? 'bg-red-600' : 'bg-green-600'
                }`}>
                  {transaction.type === 'SPENT' ? (
                    <GiftIcon className="w-5 h-5" />
                  ) : (
                    <CurrencyDollarIcon className="w-5 h-5" />
                  )}
                </div>
                <div>
                  <div className="font-semibold">{transaction.description}</div>
                  <div className="text-gray-400 text-sm flex items-center">
                    <ClockIcon className="w-4 h-4 mr-1" />
                    {transaction.date}
                  </div>
                </div>
              </div>
              <div className={`font-bold text-lg ${
                transaction.amount > 0 ? 'text-green-400' : 'text-red-400'
              }`}>
                {transaction.amount > 0 ? '+' : ''}{transaction.amount}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SmartCoins;