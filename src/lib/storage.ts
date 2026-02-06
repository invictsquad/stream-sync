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
  MESSAGES: 'clutch_messages',
  SETTINGS: 'clutch_app_settings',
};

// Types
export interface Comment {
  id: number;
  user: string;
  text: string;
  type: 'chat' | 'gift' | 'system' | 'voice';
  giftIcon?: string;
  timestamp: number;
}

export interface StreamSettings {
  title: string;
  category: string;
  tags: string[];
  notification: string;
}

export interface WalletTransaction {
  id: number;
  type: 'credit' | 'debit';
  amount: number;
  desc: string;
  date: string;
}

export interface WalletData {
  balance: number;
  transactions: WalletTransaction[];
}

export interface UserProfile {
  name: string;
  username: string;
  bio: string;
  location: string;
  website: string;
  avatar: string;
  banner: string;
  socials: { platform: string; url: string }[];
}

export interface AppSettings {
  emailNotifications: boolean;
  pushNotifications: boolean;
  theme: 'dark' | 'light';
  showOnlineStatus: boolean;
  allowDM: boolean;
}

export interface Message {
  id: number;
  sender: string;
  text: string;
  timestamp: string;
  read: boolean;
}

export interface Conversation {
  id: string; // user id or username
  user: string;
  avatar: string;
  messages: Message[];
}

export interface Notification {
    id: number;
    user: string;
    action: string;
    context: string;
    time: string;
    avatar: string;
    read: boolean;
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

const INITIAL_USER: UserProfile = {
  name: "John Doe",
  username: "@johndoe_tv",
  bio: "Apaixonado por jogos competitivos e tecnologia. Faço lives todos os dias a partir das 18h.",
  location: "São Paulo, BR",
  website: "johndoe.com",
  avatar: "https://github.com/shadcn.png",
  banner: "https://www.transparenttextures.com/patterns/cubes.png",
  socials: [
    { platform: 'Twitter', url: '@johndoe' },
    { platform: 'Instagram', url: '@john.doe' }
  ]
};

const INITIAL_APP_SETTINGS: AppSettings = {
    emailNotifications: true,
    pushNotifications: true,
    theme: 'dark',
    showOnlineStatus: true,
    allowDM: false,
};

const INITIAL_NOTIFICATIONS: Notification[] = [
    { id: 1, user: "Gaules", action: "está ao vivo:", context: "Major CS2 - Final", time: "2 min", avatar: "https://i.pravatar.cc/150?u=gaules", read: false },
    { id: 2, user: "Alanzoka", action: "está ao vivo:", context: "Terror Indie", time: "15 min", avatar: "https://i.pravatar.cc/150?u=alanzoka", read: false },
];

const INITIAL_MESSAGES: Conversation[] = [
    {
        id: 'user2',
        user: 'Maria Gamer',
        avatar: 'https://i.pravatar.cc/150?u=maria',
        messages: [
            { id: 1, sender: 'Maria Gamer', text: 'Oi! Adorei a live ontem!', timestamp: new Date().toISOString(), read: true },
            { id: 2, sender: 'me', text: 'Obrigado Maria! Apareça hoje também.', timestamp: new Date().toISOString(), read: true }
        ]
    }
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
        return getStored<Comment[]>(`${STORAGE_KEYS.COMMENTS}_${streamId}`, INITIAL_COMMENTS);
    },
    add: (streamId: string | number, comment: Omit<Comment, 'id' | 'timestamp'>) => {
        const key = `${STORAGE_KEYS.COMMENTS}_${streamId}`;
        const current = getStored<Comment[]>(key, INITIAL_COMMENTS);
        const newComment = { ...comment, id: Date.now(), timestamp: Date.now() };
        const updated = [...current, newComment].slice(-50);
        setStored(key, updated);
        return newComment;
    }
  },

  user: {
    get: () => getStored<UserProfile>(STORAGE_KEYS.USER, INITIAL_USER),
    update: (data: Partial<UserProfile>) => {
        const current = getStored<UserProfile>(STORAGE_KEYS.USER, INITIAL_USER);
        setStored(STORAGE_KEYS.USER, { ...current, ...data });
    }
  },

  settings: {
    get: () => getStored<AppSettings>(STORAGE_KEYS.SETTINGS, INITIAL_APP_SETTINGS),
    update: (data: Partial<AppSettings>) => {
        const current = getStored<AppSettings>(STORAGE_KEYS.SETTINGS, INITIAL_APP_SETTINGS);
        setStored(STORAGE_KEYS.SETTINGS, { ...current, ...data });
    }
  },

  messages: {
    get: () => getStored<Conversation[]>(STORAGE_KEYS.MESSAGES, INITIAL_MESSAGES),
    send: (conversationId: string, text: string) => {
        const conversations = getStored<Conversation[]>(STORAGE_KEYS.MESSAGES, INITIAL_MESSAGES);
        const updated = conversations.map(c => {
            if (c.id === conversationId) {
                return {
                    ...c,
                    messages: [...c.messages, { id: Date.now(), sender: 'me', text, timestamp: new Date().toISOString(), read: true }]
                };
            }
            return c;
        });
        setStored(STORAGE_KEYS.MESSAGES, updated);
        return updated;
    }
  },

  notifications: {
      get: () => getStored<Notification[]>(STORAGE_KEYS.NOTIFICATIONS, INITIAL_NOTIFICATIONS),
      markAllRead: () => {
          const notifications = getStored<Notification[]>(STORAGE_KEYS.NOTIFICATIONS, INITIAL_NOTIFICATIONS);
          const updated = notifications.map(n => ({ ...n, read: true }));
          setStored(STORAGE_KEYS.NOTIFICATIONS, updated);
          return updated;
      }
  }
};
