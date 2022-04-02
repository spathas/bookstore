import slugify from 'slugify';

//CUSTOM COMPONENTS
import BookDetails from './BookDetails';
import Authors from './Authors';
import BookRating from './BookRating';

//MUI COMPONENTS
import Grid from '@mui/material/Grid';

//STYLES
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  image: {
    borderRadius: '10px',
    height: 700,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
  },
}));

function BookPrevierw({ book }) {
  //Styles
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={3}
      sx={{ p: 5 }}
      justifyContent='space-around'
      direction='row-reverse'
    >
      <Grid item xl={5} lg={5} md={12} sm={12} xs={12}>
        <BookDetails book={book} />
      </Grid>
      <Grid item xl={5} lg={5} md={0} sm={0} xs={0}>
        <img
          src={`/book-images/${slugify(book.title)}.webp`}
          srcSet={`/book-images/${slugify(book.title)}.webp`}
          alt={book.title}
          loading='lazy'
          className={classes.image}
        />
      </Grid>

      {/* Empty item */}
      <Grid item xl={6} lg={6} md={12} sm={12} xs={12} />
      <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
        <Authors authors={book.author} />
      </Grid>

      {/* Empty item */}
      <Grid item xl={6} lg={6} md={12} sm={12} xs={12} />
      <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
        <BookRating rating={book.rating} />
      </Grid>
    </Grid>
  );
}

export default BookPrevierw;
