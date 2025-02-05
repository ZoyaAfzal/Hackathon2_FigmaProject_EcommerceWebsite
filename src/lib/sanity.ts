// lib/sanity.ts
import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!, // Replace with your Sanity Project ID
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!, // Replace with your dataset (e.g., "production")
  useCdn: false, // Set to true for caching (faster but might not update immediately)
  apiVersion: "2023-01-01", // Latest API version
  token: process.env.SANITY_API_TOKEN,
  withCredentials: false, // Secure token (store in .env file)
});
