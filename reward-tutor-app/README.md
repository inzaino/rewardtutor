# Reward Tutor 🎓✨

> Learn Smart. Earn SmartCoins.

An AI-powered K-12 tutoring platform that delivers personalized, adaptive learning with an integrated real-world rewards system. Built with React, TypeScript, Node.js, and PostgreSQL.

## 🌟 Features

### For Students
- **Personalized Learning Paths**: AI-driven adaptive tutoring that adjusts to individual learning styles and pace
- **SmartCoins Rewards System**: Earn points for educational activities and redeem for real-world rewards
- **Khan Academy Integration**: Access to thousands of high-quality lessons and exercises
- **Real-time AI Feedback**: Instant, detailed feedback on essays, code, and problem-solving
- **Interactive Content**: Simulations, visualizations, and hands-on learning modules
- **Peer Collaboration**: Review and learn from other students' work
- **Spaced Repetition**: Optimized review system for long-term retention

### For Parents
- **Comprehensive Dashboard**: Monitor children's progress, SmartCoin balance, and learning activities
- **SmartCoin Management**: Customize point values for different activities
- **Reward Approval System**: Control and approve reward redemptions
- **Progress Insights**: Detailed reports on learning patterns and achievements
- **Communication Tools**: Connect with teachers and access weekly reports

### For Teachers
- **Class Analytics**: Track student progress across subjects and identify learning gaps
- **Content Assignment**: Assign specific lessons and track completion
- **Performance Reports**: Generate detailed academic progress reports
- **AI-Powered Insights**: Get recommendations for intervention strategies

## 🏗️ Architecture

### Frontend (React + TypeScript)
```
frontend/
├── src/
│   ├── components/
│   │   └── Layout/          # Main app layout with navigation
│   ├── pages/               # All application pages
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Lessons.tsx
│   │   ├── SmartCoins.tsx
│   │   ├── Dashboard.tsx
│   │   ├── Parents.tsx
│   │   ├── Contact.tsx
│   │   ├── Login.tsx
│   │   └── Register.tsx
│   ├── store/               # Redux state management
│   │   ├── store.ts
│   │   └── slices/
│   │       ├── authSlice.ts
│   │       ├── smartCoinSlice.ts
│   │       └── learningSlice.ts
│   ├── hooks/               # Custom React hooks
│   ├── services/            # API service functions
│   ├── types/               # TypeScript type definitions
│   └── utils/               # Utility functions
```

### Backend (Node.js + Express + PostgreSQL)
```
backend/
├── src/
│   ├── controllers/         # Request handlers
│   ├── middleware/          # Custom middleware (auth, validation, etc.)
│   ├── models/              # Business logic models
│   ├── routes/              # API route definitions
│   │   ├── auth.ts
│   │   ├── users.ts
│   │   ├── learning.ts
│   │   ├── smartcoins.ts
│   │   ├── rewards.ts
│   │   └── dashboard.ts
│   ├── services/            # Business logic services
│   ├── types/               # TypeScript interfaces
│   └── utils/               # Utility functions
├── prisma/
│   └── schema.prisma        # Database schema
```

### Database Schema (PostgreSQL + Prisma)
- **Users**: Students, parents, teachers, admins with role-based access
- **StudentProfiles**: Learning preferences, progress tracking, SmartCoin balance
- **SmartCoinTransactions**: Complete audit trail of all point activities
- **KnowledgeGraphNodes**: Curriculum structure with prerequisites and objectives
- **Activities**: Lessons, quizzes, essays, code submissions
- **LearningPaths**: Personalized sequences of educational content
- **SmartCoinSettings**: Parent-controlled point values for activities
- **Rewards**: Available prizes and redemption catalog
- **RewardApprovals**: Parent approval workflow for reward purchases

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- PostgreSQL 14+
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd reward-tutor-app
   ```

2. **Set up the backend**
   ```bash
   cd backend
   npm install
   
   # Copy environment file and configure
   cp .env.example .env
   # Edit .env with your database credentials and API keys
   
   # Generate Prisma client and set up database
   npx prisma generate
   npx prisma db push
   ```

3. **Set up the frontend**
   ```bash
   cd ../frontend
   npm install
   ```

### Running the Application

1. **Start the backend server**
   ```bash
   cd backend
   npm run dev
   ```
   Backend will run on http://localhost:3001

2. **Start the frontend application**
   ```bash
   cd frontend
   npm start
   ```
   Frontend will run on http://localhost:3000

3. **Access the application**
   Open your browser to http://localhost:3000

## 🎨 Design System

### Color Palette
- **Primary Blue**: Used for main actions and navigation
- **SmartCoin Gold**: Distinctive gradient for rewards system
- **Slate Background**: Dark theme optimized for extended learning sessions
- **Status Colors**: Green (success), Red (errors), Orange (warnings), Purple (special features)

### Typography
- **Primary Font**: Inter - Clean, readable, optimized for all screen sizes
- **Responsive Design**: Mobile-first approach with breakpoints for tablets and desktop

### Components
- **Learning Cards**: Hover effects and visual feedback for engagement
- **Progress Indicators**: Clear visualization of learning advancement
- **SmartCoin Elements**: Consistent iconography and animations
- **Khan Academy Attribution**: Prominent, compliant attribution as required

## 📊 SmartCoins System

### Earning Mechanics (Parent-Configurable)
- **Lesson Completion**: 100 SmartCoins (default)
- **Quiz Achievement (90%+)**: 75 SmartCoins + accuracy bonus
- **Essay Submission**: 150 SmartCoins
- **Code Assignment**: 150 SmartCoins
- **Daily Streak**: 25 SmartCoins per day
- **Peer Review Contribution**: 75 SmartCoins
- **Concept Mastery**: 200+ SmartCoins for proven understanding

### Redemption System
- **Gift Cards**: Amazon, Starbucks, Target (500-1000 SmartCoins)
- **Entertainment**: Movie tickets, gaming credits (600-800 SmartCoins)
- **Educational**: Books, supplies, experiences (variable pricing)
- **Parent Approval**: All redemptions require parental authorization

### Conversion Rate
- **Base Rate**: 1000 SmartCoins = $1 USD (adjustable by parents)
- **Financial Model**: Parents fund redemptions; no cost for educational content

## 🔗 Khan Academy Integration

### Compliance Framework
- **Attribution**: Required footer on all pages using Khan content
- **Link-Back**: Direct links to original Khan Academy materials
- **Free Access**: All Khan content remains freely accessible
- **Brand Separation**: Clear distinction between Khan content and Reward Tutor services
- **Terms Compliance**: Adheres to Khan Academy's non-commercial educational use terms

### Content Integration
- **Phase 1 (MVP)**: API/iframe embedding with SmartCoin wrapper
- **Phase 2**: Enhanced analytics and progress sharing
- **Phase 3**: Potential Khanmigo AI integration (pending B2B access)

## 🔐 Security & Privacy

### Data Protection
- **COPPA Compliance**: Special protections for users under 13
- **FERPA Alignment**: Educational privacy safeguards
- **GDPR Ready**: European data protection standards
- **Minimal Data Collection**: Only necessary information for personalization

### Security Measures
- **JWT Authentication**: Secure, stateless user sessions
- **Rate Limiting**: Protection against abuse and spam
- **Input Validation**: All user inputs sanitized and validated
- **Encryption**: Data encrypted in transit and at rest

## 🎯 Development Roadmap

### Phase 1: MVP (Current)
- [x] Core UI/UX with all major pages
- [x] Basic SmartCoins system
- [x] Khan Academy content integration
- [x] Parent dashboard and controls
- [ ] User authentication implementation
- [ ] Database deployment and connection
- [ ] Basic AI feedback system

### Phase 2: Enhanced Features
- [ ] Advanced AI tutoring capabilities
- [ ] Detailed analytics and reporting
- [ ] Mobile app development
- [ ] Advanced gamification features
- [ ] Peer collaboration tools

### Phase 3: Scale & Integration
- [ ] School district licensing
- [ ] Advanced AI personalization
- [ ] Third-party LMS integration
- [ ] Extended reward partnerships
- [ ] Advanced assessment tools

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details on:
- Code style and standards
- Pull request process
- Issue reporting
- Feature requests

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Khan Academy**: For providing world-class educational content that powers many of our lessons
- **Open Source Community**: The amazing libraries and tools that make this platform possible
- **Educators**: Teachers and parents who inspired the vision for personalized, rewarding learning

## 📞 Support

- **Email**: support@rewardtutor.ai
- **Documentation**: [docs.rewardtutor.ai](https://docs.rewardtutor.ai)
- **Community**: [Discord Server](https://discord.gg/rewardtutor)

---

**Built with ❤️ for learners everywhere**

*"Because every answer earns more than just a grade."*