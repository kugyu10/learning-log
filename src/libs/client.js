import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'uota2',
  apiKey: process.env.API_KEY,
});