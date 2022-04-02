import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import slugify from 'slugify';

//CUSTOM COMPONENTS
import BookPrevierw from '../components/books/BookPrevierw';
import SuggestedBooks from '../components/books/SuggestedBooks';

//CONTEXTS
import DataContext from '../contexts/data-context';

//STYLES
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

function BookPage() {
  const params = useParams();
  const bookId = params.bookId;

  //Styles
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.up('md'));

  const dataContext = useContext(DataContext);
  const books = dataContext.books;

  const book = books.find((book) => slugify(book.title) === bookId);

  return (
    <>
      <BookPrevierw book={book} />
      {matchesSM && (
        <SuggestedBooks book={book} booksArr={dataContext.rowData.books} />
      )}
    </>
  );
}

export default BookPage;
