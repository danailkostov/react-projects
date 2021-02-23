const pagination = (data) => {
  const itemsPerPage = 10;
  const numberOfPages = Math.ceil(data.length / itemsPerPage);
  const pagesArray = Array.from({ length: numberOfPages }, (item, index) => {
    const start = index * itemsPerPage;
    return data.slice(start, start + itemsPerPage);
  });
  return pagesArray
};

export default pagination;
