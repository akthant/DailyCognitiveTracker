# Daily Cognitive Tracker

An intelligent web application designed to help users monitor, analyze, and improve their cognitive performance through daily tracking of mental exercises, memory tests, and cognitive assessments.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation & Setup](#installation--setup)
- [Environment Configuration](#environment-configuration)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Integration](#api-integration)
- [Deployment](#deployment)
- [Future Enhancements](#future-enhancements)

## ✨ Features

### Current Features

- **📊 Daily Cognitive Tracking**: Log and track daily mental exercises and assessments
- **📈 Performance Analytics**: Visualize cognitive performance trends over time
- **🧠 Memory Tests**: Interactive memory challenges and exercises
- **📱 Responsive Design**: Works seamlessly across desktop, tablet, and mobile devices
- **⚡ Real-Time Data Processing**: Instant feedback and performance scoring
- **📋 Session History**: Comprehensive record of all cognitive exercises
- **🎯 Goal Setting**: Set and monitor cognitive improvement goals
- **📊 Dashboard Overview**: Statistics cards and performance summaries

### Demo Capabilities

Track various cognitive metrics:
- **Memory Performance**: Pattern recognition and recall accuracy
- **Attention Span**: Focus duration and consistency
- **Problem-Solving**: Logical reasoning test results
- **Reaction Time**: Speed and accuracy measurements

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe JavaScript development
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework

### Development Tools
- **ESLint** - Code linting and style enforcement
- **React Compiler** - Optimized React compilation
- **Git** - Version control

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 16.0.0 or higher)
- **npm** (version 8.0.0 or higher) or **yarn**
- **Git** for version control
- **TypeScript** (optional, for development)

## 🚀 Installation & Setup

### Step 1: Clone the Repository

```bash
git clone https://github.com/akthant/DailyCognitiveTracker.git
cd DailyCognitiveTracker/dailycognitivetracker
```

### Step 2: Install Dependencies

```bash
# Using npm
npm install

# Or using yarn
yarn install
```

### Step 3: Verify Tailwind CSS Setup

Ensure Tailwind CSS is properly configured (should be included in the project):

```bash
# If needed, install Tailwind
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

## 🔧 Environment Configuration

### Step 1: Create Environment File

Create a `.env.local` file in the root directory:

```env
# Application Configuration
VITE_APP_NAME=Daily Cognitive Tracker
VITE_API_URL=http://localhost:3001/api

# Optional: Analytics
VITE_ENABLE_ANALYTICS=true
```

### Step 2: Environment Security

Add `.env.local` to your `.gitignore`:

```gitignore
# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Dependencies
node_modules/
dist/

# Build artifacts
*.tsbuildinfo
```

## 🎮 Usage

### Development Server

```bash
# Start the development server
npm run dev

# Or with yarn
yarn dev
```

Visit `http://localhost:5173` in your browser.

### Basic Usage Flow

1. **Dashboard**: View your cognitive performance overview
   - Daily stats and trend indicators
   - Recent activity summary
   - Goal progress tracking

2. **Take Tests**: Participate in cognitive exercises
   - Memory challenges
   - Attention tests
   - Problem-solving tasks
   - Reaction time drills

3. **View Analytics**: Review your performance data
   - Historical trends and patterns
   - Performance comparisons
   - Progress towards goals
   - Detailed session results

4. **Track Progress**: Monitor improvements over time
   - Daily performance logs
   - Weekly summaries
   - Monthly analytics
   - Personal best records

## 📁 Project Structure

```
./src
├── App.tsx
├── App.css
├── main.tsx
├── index.css
├── assets/
│   └── react.svg
├── components/
│   ├── common/
│   │   ├── Header.tsx
│   │   ├── Sidebar.tsx
│   │   └── Footer.tsx
│   ├── cognitive/
│   │   ├── MemoryTest.tsx
│   │   ├── AttentionTest.tsx
│   │   └── ReactionTimeTest.tsx
│   ├── dashboard/
│   │   ├── Dashboard.tsx
│   │   ├── PerformanceChart.tsx
│   │   └── StatisticsCard.tsx
│   └── analytics/
│       ├── Analytics.tsx
│       ├── TrendChart.tsx
│       └── HistoryView.tsx
├── contexts/
│   └── CognitiveContext.tsx
├── hooks/
│   ├── useCognitiveData.ts
│   └── usePerformanceMetrics.ts
├── pages/
│   ├── Home.tsx
│   ├── Tests.tsx
│   ├── Analytics.tsx
│   └── Settings.tsx
├── services/
│   ├── api.ts
│   ├── storage.ts
│   └── analytics.ts
├── types/
│   └── index.ts
└── utils/
    ├── helpers.ts
    └── constants.ts
```

## 🔌 API Integration

### Available Services

**Storage Service** (`src/services/storage.ts`)
```typescript
// Local data persistence
saveTestResult(result)
getTestHistory()
updateGoal(goal)
```

**Analytics Service** (`src/services/analytics.ts`)
```typescript
// Performance analytics
calculateTrends()
getPerformanceStats()
generateReport()
```

**API Service** (`src/services/api.ts`)
```typescript
// Backend communication (when ready)
submitResults(data)
fetchAnalytics()
syncData()
```

## 🌐 Deployment

### Primary Deployment (Netlify) - Recommended

#### **Step 1: Prepare Your Repository**
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

#### **Step 2: Connect to Netlify**
1. **Go to [Netlify](https://netlify.com)** and sign in/create account
2. **Click "Add new site"** → **"Import an existing project"**
3. **Choose "Deploy with Git"** → **Select "GitHub"**
4. **Authorize Netlify** and select your DailyCognitiveTracker repository

#### **Step 3: Configure Build Settings**
Netlify should auto-detect:
- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Node version:** 18 (or your preferred version)

#### **Step 4: Deploy**
1. Click **"Deploy site"**
2. Wait for build to complete (usually 2-3 minutes)
3. Your app will be live at `https://your-app-name.netlify.app`

#### **Step 5: Custom Domain (Optional)**
1. Go to **Domain settings** in Netlify dashboard
2. Click **"Add custom domain"**
3. Enter your domain
4. Follow DNS configuration instructions

### Alternative Deployment Options

#### **Vercel**
```bash
npm i -g vercel
vercel
```

#### **GitHub Pages**
Use GitHub Actions for automated deployment

#### **Other Options**
- **Firebase Hosting**: Google's hosting solution
- **Railway**: Simple deployment with GitHub integration
- **AWS Amplify**: AWS hosting and CI/CD

## 🚀 Future Enhancements

### Phase 2: Backend Development
- **Node.js/Express API**: Full backend implementation
- **Database Integration**: MongoDB for persistent storage
- **User Authentication**: JWT-based auth system
- **Cloud Sync**: Synchronize data across devices

### Phase 3: Advanced Features
- **AI-Powered Insights**: Machine learning analysis of cognitive trends
- **Personalized Recommendations**: Adaptive exercise suggestions
- **Social Features**: Share progress and compete with friends
- **Mobile App**: Native iOS and Android applications
- **Wearable Integration**: Sync with smartwatch and fitness trackers

### Phase 4: Premium Features
- **Advanced Analytics**: Predictive modeling and deep insights
- **Expert Consultation**: Integration with cognitive specialists
- **Customized Programs**: Personalized cognitive training programs
- **Real-time Notifications**: Smart reminders and alerts

## 🌟 Acknowledgments

- **React Community** for the amazing ecosystem
- **Tailwind CSS** for the design system
- **Vite** for fast development experience
- **TypeScript** for type safety

---

**Built with ❤️ by AK**

*Track your mind, elevate your cognition.*
