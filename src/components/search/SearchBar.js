import { useContext } from 'react';

//CONTEXT
import DataContext from '../../contexts/data-context';

//MUI COMPONENTS
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';

//STYLES
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.primary.light, 0.25),
  margin: theme.spacing(2),
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: '50%',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

function SearchBar() {
  //Context
  const dataContext = useContext(DataContext);
  const data = dataContext.rowData.books;

  // Search engine - Ignore all website links and all numeric values... At this time we search by phrase.
  // This is a basic searching, we can split the text to array. With this solution we can search by keywords
  // Return all books which contains the given search.
  const getBooksBySearch = (data, text) => {
    const tempArr = [];
    for (let value in data) {
      let values = Object.entries(data[value]);

      values = values.filter(
        ([key, value]) => key !== 'website' && typeof value === 'string'
      );

      const results = values.filter((value) => {
        return value[1].toLowerCase().includes(text.toLowerCase());
      });

      if (results.length) {
        tempArr.push(data[value]);
      }
    }

    return [...tempArr];
  };

  const handleChange = (e) => {
    // The books are stored in data context and received at the BookList component
    dataContext.updateBooks(getBooksBySearch(data, e.target.value));
  };

  return (
    <section id='search'>
      <Typography variant='h4' align='center'>
        Search to find your new book
      </Typography>
      <Typography variant='body1' align='center'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder='Search for a new book...'
            inputProps={{ 'aria-label': 'search' }}
            onChange={handleChange}
          />
        </Search>
      </Box>
    </section>
  );
}

export default SearchBar;
