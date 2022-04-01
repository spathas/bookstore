import { Route, Routes, Navigate, BrowserRouter } from 'react-router-dom';

//CUSTOM COMPONENTS
import Header from './components/header/Header';
import SearchPage from './pages/SearchPage';
import BookPage from './pages/BookPage';
import BookCreationPage from './pages/BookCreationPage';
import Footer from './components/footer/Footer';

//MUI COMPONENTS
import Container from '@mui/material/Container';

// Dummy component for wrong routing
const NotFound = () => {
  return (
    <div
      style={{
        textAlign: 'center',
        fontSize: '3rem',
      }}
    >
      Page not found!
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      {/* We use classic components. In the whole project, we will use mui components as style param is equal to sx */}
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <Header />
          <Container component='main' maxWidth='xl'>
            <Routes>
              {/* We redirect the user because we dont have a home page yet. */}
              <Route index element={<Navigate replace to='/books' />}></Route>
              <Route path='/books' element={<SearchPage />} />
              <Route path='/books/add' element={<BookCreationPage />} />
              <Route path='/books/:bookId' element={<BookPage />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </Container>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
