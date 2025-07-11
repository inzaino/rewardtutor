import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Activity {
  id: string;
  title: string;
  description: string;
  type: 'LESSON' | 'PRACTICE' | 'QUIZ' | 'ESSAY' | 'CODE_SUBMISSION';
  subject: string;
  gradeLevel: string;
  difficulty: number;
  estimatedMinutes: number;
  isCompleted: boolean;
  score?: number;
}

interface LearningPath {
  id: string;
  title: string;
  description: string;
  subject: string;
  gradeLevel: string;
  activities: Activity[];
  currentPosition: number;
  isCompleted: boolean;
}

interface LearningState {
  currentLearningPath: LearningPath | null;
  availablePaths: LearningPath[];
  recentActivities: Activity[];
  loading: boolean;
  error: string | null;
}

const initialState: LearningState = {
  currentLearningPath: null,
  availablePaths: [],
  recentActivities: [],
  loading: false,
  error: null,
};

const learningSlice = createSlice({
  name: 'learning',
  initialState,
  reducers: {
    setCurrentLearningPath: (state, action: PayloadAction<LearningPath>) => {
      state.currentLearningPath = action.payload;
    },
    setAvailablePaths: (state, action: PayloadAction<LearningPath[]>) => {
      state.availablePaths = action.payload;
    },
    setRecentActivities: (state, action: PayloadAction<Activity[]>) => {
      state.recentActivities = action.payload;
    },
    completeActivity: (state, action: PayloadAction<{ activityId: string; score?: number }>) => {
      // Update activity in current learning path
      if (state.currentLearningPath) {
        const activity = state.currentLearningPath.activities.find(a => a.id === action.payload.activityId);
        if (activity) {
          activity.isCompleted = true;
          if (action.payload.score !== undefined) {
            activity.score = action.payload.score;
          }
        }
      }
      
      // Update in recent activities
      const recentActivity = state.recentActivities.find(a => a.id === action.payload.activityId);
      if (recentActivity) {
        recentActivity.isCompleted = true;
        if (action.payload.score !== undefined) {
          recentActivity.score = action.payload.score;
        }
      }
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const {
  setCurrentLearningPath,
  setAvailablePaths,
  setRecentActivities,
  completeActivity,
  setLoading,
  setError,
} = learningSlice.actions;

export default learningSlice.reducer;