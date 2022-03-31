import { useState, createContext } from 'react';

const jsonData = require('../data/bookstore-data.json');

const UIContext = createContext({
  rowData: null,
  books: null,
  updateBooks: () => {},
});

export const UIContextProvider = (props) => {
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
    <UIContext.Provider value={contetxtValue}>
      {props.children}
    </UIContext.Provider>
  );
};

export default UIContext;
