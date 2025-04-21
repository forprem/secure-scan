// test-dotenv.ts

import * as dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

console.log("Firebase API Key from .env:", process.env.NEXT_PUBLIC_FIREBASE_API_KEY);
