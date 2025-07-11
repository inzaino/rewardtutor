import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">About Reward Tutor</h1>
        <p className="text-xl text-gray-300">
          Revolutionizing K-12 education through AI-powered personalized learning and meaningful rewards
        </p>
      </div>

      <div className="bg-slate-800 rounded-lg p-8">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-300 leading-relaxed">
          Reward Tutor is the leading online AI-powered tutoring platform that delivers personalized, 
          adaptive, and highly interactive learning for every K-12 learner. We drive engagement and 
          achievement with an integrated real-world rewards program while giving parents and teachers 
          clear insight and control.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-slate-800 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-3 text-primary-400">For Students</h3>
          <ul className="space-y-2 text-gray-300">
            <li>• Personalized learning paths</li>
            <li>• Real-time AI feedback</li>
            <li>• SmartCoins rewards system</li>
            <li>• Interactive simulations</li>
            <li>• Peer collaboration</li>
          </ul>
        </div>

        <div className="bg-slate-800 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-3 text-green-400">For Parents</h3>
          <ul className="space-y-2 text-gray-300">
            <li>• Detailed progress insights</li>
            <li>• SmartCoin management</li>
            <li>• Reward approval system</li>
            <li>• Learning path oversight</li>
            <li>• Communication tools</li>
          </ul>
        </div>
      </div>

      <div className="bg-slate-800 rounded-lg p-8">
        <h2 className="text-2xl font-semibold mb-4">Khan Academy Partnership</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          We're proud to integrate high-quality educational content from Khan Academy, providing 
          students with access to thousands of lessons, videos, and exercises across all K-12 subjects.
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
            . All Khan Academy materials are freely available. Khan Academy is not affiliated with or endorsing Reward Tutor.
          </p>
        </div>
      </div>

      <div className="bg-slate-800 rounded-lg p-8">
        <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-semibold mb-2 text-primary-400">Adaptive Learning</h4>
            <p className="text-gray-300 text-sm">
              AI algorithms adjust difficulty and content based on individual progress and learning style.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-smartcoin-400">SmartCoins System</h4>
            <p className="text-gray-300 text-sm">
              Students earn points for effort and achievement, redeemable for real-world rewards.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-green-400">Real-time Feedback</h4>
            <p className="text-gray-300 text-sm">
              Instant, detailed feedback on essays, code, and problem-solving across all subjects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;