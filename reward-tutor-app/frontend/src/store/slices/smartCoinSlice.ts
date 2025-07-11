import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SmartCoinTransaction {
  id: string;
  amount: number;
  eventType: 'EARNED' | 'SPENT' | 'BONUS' | 'PENALTY';
  description: string;
  createdAt: string;
}

interface SmartCoinState {
  balance: number;
  transactions: SmartCoinTransaction[];
  loading: boolean;
  error: string | null;
}

const initialState: SmartCoinState = {
  balance: 0,
  transactions: [],
  loading: false,
  error: null,
};

const smartCoinSlice = createSlice({
  name: 'smartCoins',
  initialState,
  reducers: {
    setBalance: (state, action: PayloadAction<number>) => {
      state.balance = action.payload;
    },
    addTransaction: (state, action: PayloadAction<SmartCoinTransaction>) => {
      state.transactions.unshift(action.payload);
      if (action.payload.eventType === 'EARNED' || action.payload.eventType === 'BONUS') {
        state.balance += action.payload.amount;
      } else if (action.payload.eventType === 'SPENT' || action.payload.eventType === 'PENALTY') {
        state.balance -= action.payload.amount;
      }
    },
    setTransactions: (state, action: PayloadAction<SmartCoinTransaction[]>) => {
      state.transactions = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setBalance, addTransaction, setTransactions, setLoading, setError } = smartCoinSlice.actions;
export default smartCoinSlice.reducer;