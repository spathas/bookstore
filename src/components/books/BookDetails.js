import { useState } from 'react';
import ISBN from 'isbnjs';

//MUI COMPONENTS
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

function BookDetails({ book }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [open, setOpen] = useState(false);

  // ISBN Functionalities ///////////////////////
  const checkISBN = (value) => {
    const isbn = ISBN.parse(value);
    if (isbn === null)
      return { type: 'error', formated: `${value} is not a valid` };
    if (isbn.isIsbn10()) return { type: 10, formated: isbn.asIsbn10() };
    if (isbn.isIsbn13()) return { type: 13, formated: isbn.asIsbn13() };
  };

  const returnISBN = () => {
    // If isbn is not an array return the isbn to user
    if (typeof book.isbn === 'string') {
      const isbn = checkISBN(book.isbn);
      return (
        <Typography variant='body1' color='primary'>
          <strong>ISBN-{isbn.type}: </strong> {isbn.formated}
        </Typography>
      );
    }

    // When there are multiple isbn
    if (Array.isArray(book.isbn)) {
      return book.isbn.map((item) => {
        const isbn = checkISBN(item);
        return (
          <Typography variant='body1' color='primary' key={`isbn-key-${item}`}>
            <strong>ISBN-{isbn.type}: </strong> {isbn.formated}
          </Typography>
        );
      });
    }

    return (
      <Typography variant='body1' color='primary'>
        There is no ISBN for this book.
      </Typography>
    );
  };

  // Component Functions ////////////////////////
  const handleClickBuy = () => {
    setOpen(true);
  };

  const handleCloseAlert = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleClickFavorite = () => {
    setIsFavorite((prev) => !prev);
  };

  // Render
  return (
    <Grid container direction='column' spacing={2}>
      {/* Title - subtitle - -description */}
      <Grid item>
        <Typography variant='h3' color='primary'>
          {book.title}
        </Typography>
        <Typography variant='h6' color='primary'>
          {book.subtitle}
        </Typography>
        <Divider />
        <Typography variant='body1' color='primary'>
          {book.description}
        </Typography>
      </Grid>

      {/* Buttons [favorite - share] */}
      <Grid item container spacing={2}>
        <Grid item>
          <Button
            variant='contained'
            color={isFavorite ? 'warning' : 'primary'}
            onClick={handleClickFavorite}
          >
            Favorite
          </Button>
        </Grid>
        <Grid item>
          <Button variant='outlined'>Share</Button>
        </Grid>
      </Grid>

      {/* Detailes [categories - year - pages] */}
      <Grid item>
        <Typography variant='body1' color='primary'>
          <strong>Categories:</strong>{' '}
          {Array.isArray(book.categories)
            ? book.categories.join(' , ')
            : book.categories}
        </Typography>
        <Typography variant='body1' color='primary'>
          <strong>Year:</strong> {new Date(book.published).getFullYear()}
        </Typography>
        <Typography variant='body1' color='primary'>
          <strong>Number of pages:</strong> {book.pages}
        </Typography>
      </Grid>

      {/* Publisher */}
      <Grid item>
        <Typography variant='body1' color='primary'>
          <strong>Publisher:</strong> {book.publisher}
        </Typography>
      </Grid>

      {/* ISBN */}
      <Grid item>{returnISBN()}</Grid>

      {/* Buy button */}
      <Grid item align='center'>
        <Box sx={{ width: '30%', mt: 5 }}>
          <Button variant='contained' fullWidth onClick={handleClickBuy}>
            Buy
          </Button>
          <Snackbar
            open={open}
            autoHideDuration={3000}
            onClose={handleCloseAlert}
          >
            <Alert
              onClose={handleCloseAlert}
              severity='success'
              elevation={6}
              variant='filled'
            >
              Thanks for your purchase!
            </Alert>
          </Snackbar>
        </Box>
      </Grid>
    </Grid>
  );
}

export default BookDetails;
