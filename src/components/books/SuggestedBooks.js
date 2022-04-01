import { useState, useEffect, useCallback } from 'react';

//CUSTOM COMPONENTS
import BookCardSlider from './BookCardSlider';

//MUI COMPONENTS
import Grid from '@mui/material/Grid';

function SuggestedBooks({ book, booksArr }) {
  const [suggestedBooks, setSuggestedBooks] = useState(null);

  // Inititalze suggestedBooks
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setSuggestedBooks(returnSuggestedBooks()), []);

  // Get all books with same at least 1 category keyword
  const getBooksBySearchCategories = (data, text) => {
    const tempArr = [];

    // Loop for the object categories
    for (let value in data) {
      // Extract the categories
      const categories = data[value].categories;

      const results = categories.filter((value) => {
        return value.toLowerCase().includes(text.toLowerCase());
      });

      if (results.length) {
        tempArr.push(data[value]);
      }
    }

    return tempArr;
  };

  // When categories are over that 1 the result is an Array of Arrays.
  // We convate the arrays and delete duplicate objects (based on title).
  const removeDuplicates = (booksArr) => {
    const books = [].concat.apply([], booksArr);
    const newArray = [];
    const uniqueObject = {};

    // Loop for the array elements
    for (const i in books) {
      // Extract the title
      const objTitle = books[i]['title'];

      // Use the title as the index
      uniqueObject[objTitle] = books[i];
    }

    // Loop to push unique object into array
    for (const i in uniqueObject) {
      newArray.push(uniqueObject[i]);
    }

    return newArray;
  };

  // Filtering System
  const returnSuggestedBooks = useCallback(() => {
    const bookCategories = book.categories;

    let tempArr = [];
    bookCategories.forEach((category) => {
      tempArr.push(getBooksBySearchCategories(booksArr, category));
    });

    tempArr = removeDuplicates(tempArr);

    return tempArr;
  }, [book.categories, booksArr]);

  return (
    <Grid container sx={{ mb: 2 }}>
      {suggestedBooks && (
        <BookCardSlider
          books={suggestedBooks}
          results={suggestedBooks.length}
        />
      )}
    </Grid>
  );
}

export default SuggestedBooks;
