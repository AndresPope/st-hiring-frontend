import { BASE_URL } from './config.ts';
import { Settings } from '../types/settings.ts';

export const getClientSettings = async (clientId: number) => {
  const response = await fetch(`${BASE_URL}/settings/${clientId}`);
  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }
  return (await response.json()) as Settings;
};

export const updateSettings = async (clientId: number, settings: Settings) => {
  const response = await fetch(`${BASE_URL}/settings/${clientId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(settings),
  });
  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }
  return (await response.json()) as { message: string; settings: Settings };
};
