/**
 * Debug utility for conditional logging
 * Logs are only shown in development mode
 */

const isDevelopment = import.meta.env.DEV;
const isDebugMode = import.meta.env.VITE_DEBUG === 'true';

export const debug = {
  log: (...args: any[]) => {
    if (isDevelopment || isDebugMode) {
      console.log('[Chat Real]', ...args);
    }
  },

  error: (...args: any[]) => {
    if (isDevelopment || isDebugMode) {
      console.error('[Chat Real Error]', ...args);
    }
  },

  warn: (...args: any[]) => {
    if (isDevelopment || isDebugMode) {
      console.warn('[Chat Real Warning]', ...args);
    }
  },

  info: (...args: any[]) => {
    if (isDevelopment || isDebugMode) {
      console.info('[Chat Real Info]', ...args);
    }
  },

  // For production-critical logs that should always show
  critical: (...args: any[]) => {
    console.error('[Chat Real Critical]', ...args);
  }
};

export const env = {
  isDevelopment,
  isProduction: !isDevelopment,
  isDebugMode,
  version: import.meta.env.VITE_APP_VERSION || '1.0.0'
};
