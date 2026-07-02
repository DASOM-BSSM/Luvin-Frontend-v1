import Constants from 'expo-constants';
import { create } from 'zustand';
import { createJSONStorage, persist, type StateStorage } from 'zustand/middleware';

type CreateMMKV = typeof import('react-native-mmkv').createMMKV;

interface AuthState {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

const memoryStorage = new Map<string, string>();

const fallbackStorage: StateStorage = {
  getItem: (name: string) => memoryStorage.get(name) ?? null,
  setItem: (name: string, value: string) => {
    memoryStorage.set(name, value);
  },
  removeItem: (name: string) => {
    memoryStorage.delete(name);
  },
};

function createAuthStorage(): StateStorage {
  if (Constants.appOwnership === 'expo') {
    return fallbackStorage;
  }

  try {
    // MMKV must stay out of Expo Go's module graph until a native runtime is available.
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { createMMKV } = require('react-native-mmkv') as { createMMKV: CreateMMKV };
    const authStorage = createMMKV({
      id: 'luvin-auth-storage',
    });

    return {
      getItem: (name: string) => authStorage.getString(name) ?? null,
      setItem: (name: string, value: string) => {
        authStorage.set(name, value);
      },
      removeItem: (name: string) => {
        authStorage.remove(name);
      },
    };
  } catch {
    return fallbackStorage;
  }
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      login: () => {
        set({ isAuthenticated: true });
      },
      logout: () => {
        set({ isAuthenticated: false });
      },
    }),
    {
      name: 'luvin-auth',
      storage: createJSONStorage(createAuthStorage),
      partialize: (state) => ({
        isAuthenticated: state.isAuthenticated,
      }),
    },
  ),
);
