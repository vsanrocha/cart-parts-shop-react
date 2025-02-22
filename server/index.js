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

const dataPath = path.join(__dirname, 'data/products.json');

async function readproducts() {
  try {
    const data = await fs.readFile(dataPath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading products:', error);
    return [];
  }
}

app.get('/', async (req, res) => {
  try {
    const products = await readproducts();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Error reading products' });
  }
});

app.get('/api/products', async (req, res) => {
  try {
    const products = await readproducts();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Error reading products' });
  }
});

app.get('/api/products/:id', async (req, res) => {
  try {
    const products = await readproducts();
    const product = products.find(c => c.id === req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ error: 'product not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error reading product' });
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
