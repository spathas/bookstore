import { useState, useContext, useCallback, useEffect } from 'react';

//CONTEXT
import UIContext from '../../contexts/ui-context';

//CUSTOM COMPONENTS
import Book from './Book';
import Filters from './Filters';

//MUI COMPONENTS
import Grid from '@mui/material/Grid';

function BooksList() {
  //Context
  const uiContext = useContext(UIContext);

  //State
  const [sortedValue, setSortedValue] = useState('name');
  const [books, setBooks] = useState(uiContext.rowData.books);

  useEffect(() => {
    setBooks(uiContext.books);
  }, [uiContext.books]);

  const getSortedValue = (value) => {
    setSortedValue(value);
  };

  // Filtering System
  const returnSortedBooks = useCallback(() => {
    let sortedData = books;

    if (sortedValue === 'popularity') {
      sortedData.sort(function (a, b) {
        return a.popularity - b.popularity;
      });
    }

    if (sortedValue === 'year') {
      sortedData.sort(function (a, b) {
        return (
          new Date(a.published).getFullYear() -
          new Date(b.published).getFullYear()
        );
      });
    }

    //By default sorted according to title.
    if (sortedValue === 'name') {
      sortedData.sort(function (a, b) {
        return a.title.localeCompare(b.title);
      });
    }

    return sortedData.map((book) => (
      <Grid item key={`bl-isbn-${book.isbn}`}>
        <Book title={book.title} desc={book.description} rating={2.4} />
      </Grid>
    ));
  }, [books, sortedValue]);

  return (
    <Grid container spacing={3} justifyContent='center' alignItems='center'>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Filters getValue={getSortedValue} />
      </Grid>
      {returnSortedBooks()}
    </Grid>
  );
}

export default BooksList;
