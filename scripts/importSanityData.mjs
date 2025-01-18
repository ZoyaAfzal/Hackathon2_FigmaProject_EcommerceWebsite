
import { createClient } from '@sanity/client';
import axios from 'axios';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';

// Load environment variables from .env.local
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

// Validate environment variables
const requiredEnvVars = [
  'NEXT_PUBLIC_SANITY_PROJECT_ID',
  'NEXT_PUBLIC_SANITY_DATASET',
  'SANITY_API_TOKEN'
];
requiredEnvVars.forEach((env) => {
  if (!process.env[env]) {
    throw new Error(`Missing required environment variable: ${env}`);
  }
});

// Create Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2021-08-31',
});


async function uploadImageToSanity(imageUrl) {
  try {
    console.log(`Uploading image: ${imageUrl}`);
    const response = await axios.get(imageUrl, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        Referer: 'https://sizeer.bg/',
      },
      responseType: 'arraybuffer',
    });
    const buffer = Buffer.from(response.data);
    const asset = await client.assets.upload('image', buffer, {
      filename: imageUrl.split('/').pop(),
    });
    console.log(`Image uploaded successfully: ${asset._id}`);
    return asset._id;
  } catch (error) {
    console.error(`Failed to upload image: ${imageUrl}`, error.message);
    return null;
  }
}

async function importData() {
  try {
    console.log('Fetching products from API...');
    const productsResponse = await axios.get(
      'https://677e7e1994bde1c1252c2704.mockapi.io/products'
    );
   

    const products = productsResponse.data || []; 
    console.log(`Fetched ${products.length} products `);

   for (const product of products) {
      console.log(`Processing product: ${product.name}`);
      let imageRef = null;
      if (product.image) {
        imageRef = await uploadImageToSanity(product.image);
      }

      const sanityProduct = {
        _type: 'products',
        id: product.id || '',
        name: product.name || 'Unnamed Product',
        description: product.description || 'No description available',
        price: product.price || 0,
        sizes: product.sizes || [],
        rating: product.rating != null ? product.rating : 0,
        stock: product.stock || 0,
        discount: product.discount || 0,
        tag: product.tag || 'No tag',
        color: product.color || 'Unknown',
        category: product.category || 'Uncategorized',
        style: product.style || 'Not specified',
        details: product.details || 'No additional details provided',
        image: imageRef
          ? {
              _type: 'image',
              asset: { _type: 'reference', _ref: imageRef },
            }
          : undefined,
      };

      console.log('Uploading product to Sanity:', sanityProduct.name);
      const result = await client.create(sanityProduct);
      console.log(`Product uploaded successfully: ${result._id}`);
    } 


    console.log('Data import completed successfully!');
  } catch (error) {
    console.error('Error importing data:', error.message);
  }
}

importData();  



