import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Mock Storage Utility ---

export const STORAGE_KEYS = {
  USER: 'clutch_user',
  WALLET: 'clutch_wallet',
  COMMENTS: 'clutch_comments',
  STREAM_SETTINGS: 'clutch_stream_settings',
  NOTIFICATIONS: 'clutch_notifications',
};

// Types
export interface Comment {
  id: number;
  user: string;
  text: string;
  type: 'chat' | 'gift' | 'system' | 'voice';
  giftIcon?: string; // name of icon
  timestamp: number;
}

export interface StreamSettings {
  title: string;
  category: string;
  tags: string[];
  notification: string;
}

export interface WalletData {
  balance: number;
  transactions: { id: number; type: 'credit' | 'debit'; amount: number; desc: string; date: string }[];
}

// Initial Data
const INITIAL_WALLET: WalletData = {
  balance: 1500,
  transactions: [
    { id: 1, type: 'credit', amount: 500, desc: 'Compra de Diamonds', date: new Date().toISOString() }
  ]
};

const INITIAL_STREAM_SETTINGS: StreamSettings = {
  title: "Minha Primeira Live na Clutch!",
  category: "games",
  tags: ["#fps", "#novato"],
  notification: "Estou online! Venha conferir."
};

const INITIAL_COMMENTS: Comment[] = [
  { id: 1, user: 'System', text: 'Bem-vindo ao chat!', type: 'system', timestamp: Date.now() }
];

// Helper to get/set
function getStored<T>(key: string, initial: T): T {
  if (typeof window === 'undefined') return initial;
  try {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initial;
  } catch (error) {
    console.error(`Error reading ${key}`, error);
    return initial;
  }
}

function setStored<T>(key: string, value: T): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Error saving ${key}`, error);
  }
}

// Public API
export const storage = {
  wallet: {
    get: () => getStored<WalletData>(STORAGE_KEYS.WALLET, INITIAL_WALLET),
    update: (amount: number, desc: string, type: 'credit' | 'debit') => {
      const data = getStored<WalletData>(STORAGE_KEYS.WALLET, INITIAL_WALLET);
      const newBalance = type === 'credit' ? data.balance + amount : data.balance - amount;
      const newTransaction = { id: Date.now(), type, amount, desc, date: new Date().toISOString() };
      const newData = { balance: newBalance, transactions: [newTransaction, ...data.transactions] };
      setStored(STORAGE_KEYS.WALLET, newData);
      return newData;
    },
    set: (data: WalletData) => setStored(STORAGE_KEYS.WALLET, data)
  },

  stream: {
    get: () => getStored<StreamSettings>(STORAGE_KEYS.STREAM_SETTINGS, INITIAL_STREAM_SETTINGS),
    save: (settings: Partial<StreamSettings>) => {
      const current = getStored<StreamSettings>(STORAGE_KEYS.STREAM_SETTINGS, INITIAL_STREAM_SETTINGS);
      setStored(STORAGE_KEYS.STREAM_SETTINGS, { ...current, ...settings });
    }
  },

  comments: {
    get: (streamId: string | number) => {
        // In a real app, this would be filtered by streamId.
        // For mock, we share one chat or use a key suffix.
        return getStored<Comment[]>(`${STORAGE_KEYS.COMMENTS}_${streamId}`, INITIAL_COMMENTS);
    },
    add: (streamId: string | number, comment: Omit<Comment, 'id' | 'timestamp'>) => {
        const key = `${STORAGE_KEYS.COMMENTS}_${streamId}`;
        const current = getStored<Comment[]>(key, INITIAL_COMMENTS);
        const newComment = { ...comment, id: Date.now(), timestamp: Date.now() };
        // Keep last 50 messages
        const updated = [...current, newComment].slice(-50);
        setStored(key, updated);
        return newComment;
    }
  }
};
