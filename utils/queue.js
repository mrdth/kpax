const items = [];

const addItem = item => {
  items.push(item);
};

const getNextItem = () => {
  return items.shift();
};

const getItemsPaginated = (page = 1, pageLength = 10) => {
  const lastPage = Math.ceil(items.length / pageLength);
  if (page < 1) page = 1;
  if (page > lastPage) page = lastPage;
  const startIndex = (page - 1) * pageLength;
  return {
    items: items.length > pageLength ? items.slice(startIndex, startIndex + pageLength) : items,
    page: page,
    lastPage: lastPage,
    pageLength: pageLength,
    pageText: `page ${page} of ${lastPage}`
  };
};

const removeItem = (index) => {};

const reset = () => {
  while (items.length) items.shift();
};

module.exports = {
  items,
  addItem,
  getNextItem,
  getItemsPaginated,
  removeItem,
  reset
};
