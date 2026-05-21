import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

// Initialize the MongoDB native driver client
const client = new MongoClient(process.env.MONGODB_URI || process.env.MONGODB_URL);

// Changed this to your custom database project namespace!
const db = client.db('tiles-gallery-2');

export const auth = betterAuth({
  emailAndPassword: { 
    enabled: true, 
  }, 

  database: mongodbAdapter(db, {
    client
  }),

  socialProviders: {
    google: { 
      clientId: process.env.GOOGLE_CLIENT_ID, 
      clientSecret: process.env.GOOGLE_CLIENT_SECRET, 
    }, 
  },
});