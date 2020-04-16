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

const getFormattedTotalTime = () => {
  let total = 0;
  items.forEach(item => { total += item.duration; });

  const date = new Date(0);
  date.setSeconds(total);
  return date.toISOString().substr(11, 8);
};

const removeItem = (index) => {
  items.splice(index, 1);
};

const reset = () => {
  while (items.length) items.shift();
};

module.exports = {
  items,
  addItem,
  getNextItem,
  getItemsPaginated,
  getFormattedTotalTime,
  removeItem,
  reset
};
