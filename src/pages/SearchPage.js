import Grid from '@mui/material/Grid';
import Header from '../components/header/Header';
import Search from '../components/search/Search';
import BooksList from '../components/books/BooksList';

function SearchPage() {
  return (
    <Grid container justifyContent='center' alignItems='center'>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Header />
      </Grid>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12} sx={{ mb: 5 }}>
        <Search />
      </Grid>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <BooksList />
      </Grid>
    </Grid>
  );
}

export default SearchPage;
