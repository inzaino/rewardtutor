import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { 
  BookOpenIcon, 
  CurrencyDollarIcon, 
  ChartBarIcon,
  UsersIcon,
  EnvelopeIcon,
  InformationCircleIcon
} from '@heroicons/react/24/outline';

const Layout: React.FC = () => {
  // Temporary hardcoded values until Redux is fully connected
  const isAuthenticated = true;
  const user = { firstName: 'Alex' };
  const balance = 1275;

  const navigationItems = [
    { name: 'About', href: '/about', icon: InformationCircleIcon },
    { name: 'Lessons', href: '/lessons', icon: BookOpenIcon },
    { name: 'SmartCoins', href: '/smartcoins', icon: CurrencyDollarIcon },
    { name: 'Dashboard', href: '/dashboard', icon: ChartBarIcon },
    { name: 'Parents', href: '/parents', icon: UsersIcon },
    { name: 'Contact', href: '/contact', icon: EnvelopeIcon },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <header className="bg-slate-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="smartcoin-gradient w-8 h-8 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">RT</span>
              </div>
              <span className="text-xl font-bold">Reward Tutor</span>
            </Link>
            
            {isAuthenticated && (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 bg-smartcoin-600 px-3 py-1 rounded-full">
                  <CurrencyDollarIcon className="w-4 h-4" />
                  <span className="font-semibold">{balance.toLocaleString()}</span>
                  <span className="text-xs">SmartCoins</span>
                </div>
                <div className="text-sm">
                  Welcome, {user?.firstName}!
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Navigation Ribbon */}
      <nav className="bg-slate-700 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-1 overflow-x-auto py-2">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className="flex flex-col items-center justify-center min-w-[80px] px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-slate-600 transition-colors group"
                >
                  <Icon className="w-6 h-6 mb-1" />
                  <span className="text-xs font-medium">{item.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Outlet />
      </main>

      {/* Khan Academy Attribution Footer */}
      <footer className="bg-slate-800 border-t border-slate-700 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="khan-attribution text-center">
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
              . All Khan Academy materials are freely available. Khan Academy is not affiliated with or endorsing Reward Tutor.
            </p>
          </div>
          <div className="text-center text-gray-400 text-sm mt-2">
            © 2025 Reward Tutor
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;