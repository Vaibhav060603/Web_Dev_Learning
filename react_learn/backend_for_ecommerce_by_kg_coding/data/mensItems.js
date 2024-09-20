const fs = require('node:fs/promises');

async function getStoredMensItems() {
  const rawFileContent = await fs.readFile('mensItems.json', { encoding: 'utf-8' });
  const data = JSON.parse(rawFileContent);
  const storedMensItems = data.items ?? [];
  return storedMensItems;
}

function storeMensItems(items) {
  return fs.writeFile('mensItems.json', JSON.stringify({ items: items || [] }));
}

exports.getStoredMensItems = getStoredMensItems;
exports.storeMensItems = storeMensItems;