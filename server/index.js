import express from 'express';
import cors from 'cors';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get('/api/products', async (req, res) => {
  try {
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const productsData = await fs.readFile(path.join(__dirname, 'data', 'products.json'), 'utf8');
    const products = JSON.parse(productsData);
    const { search } = req.query;

    if (!search) {
      return res.json(products);
    }

    const searchTerm = search.toLowerCase();
    const filteredProducts = products.filter((product) => {
      const searchableFields = [
        product.name.toLowerCase(),
        product.brand.toLowerCase(),
        product.code.toLowerCase(),
      ];
      return searchableFields.some((field) => field.includes(searchTerm));
    });

    res.json(filteredProducts);
  } catch (error) {
    console.error('Error reading products:', error);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
