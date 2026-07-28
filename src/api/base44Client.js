import { createClient } from '@base44/sdk';

export const base44 = createClient({
  appId: 'local-dev',
  token: '',
  functionsVersion: 'v1',
  serverUrl: '',
  requiresAuth: false,
  appBaseUrl: ''
});