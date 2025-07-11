# 🚀 Deployment Guide - Reward Tutor

This guide will help you deploy your Reward Tutor application to various cloud platforms.

## 🌐 Quick Deploy Options

### Option 1: Vercel (Recommended for Frontend)

**⚡ One-Click Deploy**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/reward-tutor-app)

**Manual Steps:**
1. Go to [vercel.com](https://vercel.com)
2. Click "Import Project"
3. Connect your GitHub repository
4. Configure:
   - **Framework Preset**: Create React App
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
5. Click "Deploy"

**Live URL**: Your app will be available at `https://reward-tutor.vercel.app`

### Option 2: Netlify

**⚡ One-Click Deploy**

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/yourusername/reward-tutor-app)

**Manual Steps:**
1. Go to [netlify.com](https://netlify.com)
2. Click "New site from Git"
3. Connect GitHub and select repository
4. Build settings (auto-detected from `netlify.toml`):
   - **Base directory**: `frontend`
   - **Build command**: `npm run build`
   - **Publish directory**: `frontend/build`
5. Click "Deploy site"

### Option 3: GitHub Codespaces

**Perfect for development and testing**

1. **In your GitHub repository**, click the green "Code" button
2. Switch to "Codespaces" tab
3. Click "Create codespace on main"
4. Wait for environment to load
5. Run:
   ```bash
   cd frontend
   npm install
   npm start
   ```
6. GitHub will automatically provide a public URL!

### Option 4: Railway (Full-Stack)

**Deploy both frontend and backend**

1. Go to [railway.app](https://railway.app)
2. Click "Deploy from GitHub repo"
3. Select your repository
4. Railway will auto-detect and deploy both services
5. Add PostgreSQL database from Railway's marketplace

## 🛠️ Environment Setup

### Frontend Environment Variables

Create `frontend/.env.production`:
```env
REACT_APP_API_URL=https://your-backend-api.railway.app
REACT_APP_ENVIRONMENT=production
```

### Backend Environment Variables

For production deployment, set these in your hosting platform:
```env
DATABASE_URL=postgresql://username:password@host:port/database
JWT_SECRET=your-super-secret-jwt-key
NODE_ENV=production
PORT=3001
CORS_ORIGIN=https://your-frontend-domain.vercel.app
```

## 🔧 Platform-Specific Instructions

### Vercel Deployment

1. **Install Vercel CLI** (optional):
   ```bash
   npm i -g vercel
   ```

2. **Deploy from command line**:
   ```bash
   cd frontend
   vercel
   ```

3. **Environment Variables**: Set in Vercel dashboard under Project Settings

### Netlify Deployment

1. **Install Netlify CLI** (optional):
   ```bash
   npm install -g netlify-cli
   ```

2. **Deploy from command line**:
   ```bash
   cd frontend
   npm run build
   netlify deploy --prod --dir=build
   ```

### Railway Deployment

1. **Install Railway CLI**:
   ```bash
   npm install -g @railway/cli
   ```

2. **Deploy**:
   ```bash
   railway login
   railway init
   railway up
   ```

3. **Add Database**:
   - Go to Railway dashboard
   - Click "Add Service"
   - Select PostgreSQL
   - Copy connection string to backend environment

## 🔄 Automated Deployment (CI/CD)

### GitHub Actions Setup

The repository includes `.github/workflows/deploy.yml` for automated deployment.

**To enable:**

1. **For Vercel**: Add these secrets to your GitHub repository:
   - `VERCEL_TOKEN`: Get from Vercel account settings
   - `ORG_ID`: Found in Vercel project settings
   - `PROJECT_ID`: Found in Vercel project settings

2. **Push to main branch** triggers automatic deployment

### Manual Deployment Commands

**Build and deploy frontend:**
```bash
cd frontend
npm run build
# Deploy the 'build' folder to your chosen platform
```

**Build and deploy backend:**
```bash
cd backend
npm run build
# Deploy the 'dist' folder to your backend hosting
```

## 🌍 Domain Configuration

### Custom Domain Setup

**Vercel:**
1. Go to project dashboard
2. Click "Domains"
3. Add your custom domain
4. Update DNS records as instructed

**Netlify:**
1. Go to site dashboard
2. Click "Domain settings"
3. Add custom domain
4. Update DNS records

## 🔐 Security Configuration

### Production Security Checklist

- [ ] Set strong `JWT_SECRET`
- [ ] Configure proper `CORS_ORIGIN`
- [ ] Use HTTPS for all communications
- [ ] Set up proper database access controls
- [ ] Enable rate limiting
- [ ] Configure environment variables securely

## 📊 Monitoring & Analytics

### Recommended Monitoring Tools

- **Vercel Analytics**: Built-in performance monitoring
- **Sentry**: Error tracking and performance monitoring
- **LogRocket**: Session replay and debugging
- **Google Analytics**: User behavior tracking

## 🆘 Troubleshooting

### Common Issues

**Build Fails:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Environment Variables Not Working:**
- Ensure variables start with `REACT_APP_` for frontend
- Restart application after setting variables
- Check platform-specific environment variable syntax

**Database Connection Issues:**
- Verify DATABASE_URL format
- Check network connectivity
- Ensure database allows connections from hosting platform

## 🚀 Quick Start Commands

**Deploy to Vercel:**
```bash
npx vercel --cwd frontend
```

**Deploy to Netlify:**
```bash
cd frontend && npm run build && npx netlify deploy --prod --dir=build
```

**Local Production Build:**
```bash
cd frontend && npm run build && npx serve -s build
```

---

**🎉 Your Reward Tutor application is ready for the world!**

Choose your preferred platform and follow the steps above. The application will be live and accessible to users within minutes!