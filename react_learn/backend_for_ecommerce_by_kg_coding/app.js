const express = require('express');
const bodyParser = require('body-parser');

//importing 
const { getStoredItems, storeItems } = require('./data/items');
const { getStoredMensItems, storeMensItems } = require('./data/mensItems');
const { getStoredWomensItems, storeWomensItems } = require('./data/womensItems');


const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});



// main page items
app.get('/items', async (req, res) => {
  const storedItems = await getStoredItems();
  await new Promise((resolve, reject) => setTimeout(() => resolve(), 2000));
  res.json({ items: storedItems });
});

app.get('/items/:id', async (req, res) => {
  const storedItems = await getStoredItems();
  const item = storedItems.find((item) => item.id === req.params.id);
  res.json({ item });
});

app.post('/items', async (req, res) => {
  const existingItems = await getStoredItems();
  const itemData = req.body;
  const newItem = {
    ...itemData,
    id: Math.random().toString(),
  };
  const updatedItems = [newItem, ...existingItems];
  await storeItems(updatedItems);
  res.status(201).json({ message: 'Stored new item.', item: newItem });
});


//mens page items
app.get('/mens', async (req, res) => {
  const storedMensItems = await getStoredMensItems();
  await new Promise((resolve, reject) => setTimeout(() => resolve(), 2000));
  res.json({ items: storedMensItems });
});

app.get('/mens/:id', async (req, res) => {
  const storedMensItems = await getStoredMensItems();
  const item = storedMensItems.find((item) => item.id === req.params.id);
  res.json({ item });
});

app.post('/mens', async (req, res) => {
  const existingMensItems = await getStoredMensItems();
  const itemData = req.body;
  const newItem = {
    ...itemData,
    id: Math.random().toString(),
  };
  const updatedItems = [newItem, ...existingMensItems];
  await storeMensItems(updatedItems);
  res.status(201).json({ message: 'Stored new mens item.', item: newItem });
});


//womens page items
app.get('/womens', async (req, res) => {
  const storedWomensItems = await getStoredWomensItems();
  await new Promise((resolve, reject) => setTimeout(() => resolve(), 2000));
  res.json({ items: storedWomensItems });
});

app.get('/womens/:id', async (req, res) => {
  const storedWomensItems = await getStoredWomensItems();
  const item = storedWomensItems.find((item) => item.id === req.params.id);
  res.json({ item });
});

app.post('/womens', async (req, res) => {
  const existingWomensItems = await getStoredWomensItems();
  const itemData = req.body;
  const newItem = {
    ...itemData,
    id: Math.random().toString(),
  };
  const updatedItems = [newItem, ...existingWomensItems];
  await storeWomensItems(updatedItems);
  res.status(201).json({ message: 'Stored new womens item.', item: newItem });
});








app.listen(8080);
