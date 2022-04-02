import { useState, createContext } from 'react';

const jsonData = require('../data/bookstore-data.json');

const DataContext = createContext({
  rowData: null,
  books: null,
  updateBooks: () => {},
});

export const DataContextProvider = (props) => {
  const rowData = jsonData;
  const [books, setBooks] = useState(jsonData.books);

  const updateBooks = (data) => {
    setBooks(data);
  };

  const contetxtValue = {
    rowData,
    books,
    updateBooks,
  };

  return (
    <DataContext.Provider value={contetxtValue}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContext;
