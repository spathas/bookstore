import { useState, createContext } from 'react';

const jsonData = require('../data/bookstore-data.json');

const DataContext = createContext({
  rowData: null,
  books: null,
  updateBooks: () => {},
  categories: null,
  updateCategories: () => {},
});

export const DataContextProvider = (props) => {
  const rowData = jsonData;
  const [books, setBooks] = useState(jsonData.books);
  const [categories, setCategories] = useState(jsonData.categories);

  const updateBooks = (data) => {
    setBooks(data);
  };

  const updateCategories = (data) => {
    setCategories(data);
  };

  const contetxtValue = {
    rowData,
    books,
    updateBooks,
    categories,
    updateCategories,
  };

  return (
    <DataContext.Provider value={contetxtValue}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContext;
