import Grid from '@mui/material/Grid';
import Header from '../components/header/Header';
import SearchBar from '../components/search/SearchBar';
import BookCardList from '../components/books/BookCardList';
import Footer from '../components/footer/Footer';

function SearchPage() {
  return (
    <>
      <Header />
      <SearchBar />
      <BookCardList />
      <Footer />
    </>
  );
}

export default SearchPage;
