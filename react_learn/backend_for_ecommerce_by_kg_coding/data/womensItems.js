const fs = require('node:fs/promises');

async function getStoredWomensItems() {
  const rawFileContent = await fs.readFile('womensItems.json', { encoding: 'utf-8' });
  const data = JSON.parse(rawFileContent);
  const storedWomensItems = data.items ?? [];
  return storedWomensItems;
}

function storeWomensItems(items) {
  return fs.writeFile('womensItems.json', JSON.stringify({ items: items || [] }));
}

exports.getStoredWomensItems = getStoredWomensItems;
exports.storeWomensItems = storeWomensItems;