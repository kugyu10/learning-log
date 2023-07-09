import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'uota',
  apiKey: process.env.API_KEY,
});