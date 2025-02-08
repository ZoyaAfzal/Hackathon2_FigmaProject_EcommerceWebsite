import { createClient } from 'next-sanity'



export const client = createClient({
  projectId: '0om36av6',
  dataset: 'production',
  apiVersion: '2023-10-31',
  token: process.env.SANITY_API_TOKEN,
  useCdn: true, 
 
});
  


