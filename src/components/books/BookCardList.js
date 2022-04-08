import { useState, useContext, useEffect } from 'react';

//CONTEXT
import DataContext from '../../contexts/data-context';

//CUSTOM COMPONENTS
import Book from './BookCard';
import Filters from '../search/Filters';

//MUI COMPONENTS
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Grow from '@mui/material/Grow';

//STYLES
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

function BookCardList() {
  //Context
  const dataContext = useContext(DataContext);

  //State
  const [sortedValue, setSortedValue] = useState('title');
  const [books, setBooks] = useState(null);

  //Styles
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    setBooks(dataContext.books);
  }, [dataContext.books]);

  const getSortedValue = (value) => {
    setSortedValue(value);
  };

  // Filtering System
  const returnSortedBooks = () => {
    let sortedData = dataContext.books;

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
      <Grow in timeout={500} key={`bl-isbn-${book.isbn}`}>
        <Grid item>
          <Book title={book.title} desc={book.description} rating={2.4} />
        </Grid>
      </Grow>
    ));
  };

  return (
    <Grid
      container
      spacing={3}
      justifyContent='center'
      alignItems='center'
      sx={{ my: 2 }}
    >
      <Grow in timeout={500}>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Container align={matchesMD ? 'center' : 'false'}>
            <Filters getValue={getSortedValue} />
          </Container>
        </Grid>
      </Grow>
      {books && returnSortedBooks()}
    </Grid>
  );
}

export default BookCardList;
