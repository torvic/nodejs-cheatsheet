// importo fs -> handle of files
const { readFile, writeFile } = require('fs/promises')
const path = require('path')

// Get the product from file
const productsPath = path.join(__dirname, '../data', 'products.json')
console.log('yep products path', productsPath)
const getProductsFromFile = async () => {
  try {
		debugger
    const products = await readFile(productsPath);
    return JSON.parse(products.toString());
  } catch (error) {
    console.log('File not found', error);
    return [];
  }
};
class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  async save() {
    this.id = Math.random().toString();
    const products = await getProductsFromFile();
    products.push(this);
    await writeFile(productsPath, JSON.stringify(products));
  }

  static async fetchAll() {
    return await getProductsFromFile();
  }
}

module.exports = Product