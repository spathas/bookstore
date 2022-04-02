import { useState, useContext, useCallback, useEffect } from 'react';

//CONTEXT
import DataContext from '../../contexts/data-context';

//CUSTOM COMPONENTS
import Book from './BookCard';
import Filters from '../search/Filters';

//MUI COMPONENTS
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

function BookCardList() {
  //Context
  const dataContext = useContext(DataContext);

  //State
  const [sortedValue, setSortedValue] = useState('title');
  const [books, setBooks] = useState(null);

  useEffect(() => {
    setBooks(dataContext.books);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getSortedValue = (value) => {
    setSortedValue(value);
  };

  // Filtering System
  const returnSortedBooks = useCallback(() => {
    let sortedData = dataContext.rowData.books;

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
    if (sortedValue === 'title') {
      sortedData.sort(function (a, b) {
        return a.title.localeCompare(b.title);
      });
    }

    return sortedData.map((book) => (
      <Grid item key={`bl-isbn-${book.isbn}`}>
        <Book title={book.title} desc={book.description} rating={2.4} />
      </Grid>
    ));
  }, [sortedValue, dataContext.rowData.books]);

  return (
    <Grid
      container
      spacing={3}
      justifyContent='center'
      alignItems='center'
      sx={{ my: 2 }}
    >
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Container>
          <Filters getValue={getSortedValue} />
        </Container>
      </Grid>
      {books && returnSortedBooks()}
    </Grid>
  );
}

export default BookCardList;
