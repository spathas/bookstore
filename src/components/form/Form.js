import { useCallback, useState } from 'react';

//CUSTOM COMPONENTS
import CommonInput from './CommonInput';
import AuthorList from './AuthorList';
import CategoriesSelector from './CategoriesSelector';
import PublichedPicker from './PublichedPicker';

//MUI COMPOENTS
import { Button, Container } from '@mui/material';

//VALIDATION FUNCTIONS
// Restrict all special chars except for [!@"#&*]
const titleValidations = (value) => {
  const regex = /[`$%^()_+\-=[\]{};':\\|,.<>/?~]/;
  return (
    !regex.test(value.trim()) &&
    value.trim().length >= 10 &&
    value.trim().length <= 120
  );
};

const descValidations = (value) =>
  value.trim().length > 0 && value.trim().length <= 512;

const publisherValidations = (value) =>
  value.trim().length >= 5 && value.trim().length <= 60;

// We set extra validation over 20 pages
const pagesValidations = (value) => value >= 20 && value <= 9999;

//////////////////////////////////////////////////////////
export default function Form() {
  const [title, setTitle] = useState({});
  const [subtitle, setSubtitle] = useState({});
  const [description, setDescription] = useState({});
  const [pages, setPages] = useState({});
  const [published, setPublished] = useState({});
  const [authors, setAuthors] = useState([]); // Array of objs
  const [categories, setCategories] = useState([]); // Array of objs
  // const [isbn, setIsbn] = useState({});

  const isValid =
    title.isValid &&
    subtitle.isValid &&
    description.isValid &&
    pages.isValid &&
    published.isValid &&
    authors.isValid &&
    categories.isValid;

  console.log('isValid', isValid);

  console.log('title', title);
  console.log('subtitle', subtitle);
  console.log('description', description);
  console.log('pages', pages);
  console.log('published', published);
  console.log('authors', authors);
  console.log('categories', categories);

  //Submit form
  const submitHandler = (e) => {
    e.preventDefault();

    //SEND RESULTS TO SERVER /////
    /////////////////////////////

    //Print values
    const formObj = {
      title: {
        value: title.value,
        isValid: title.isValid,
      },
      subtitle: {
        value: subtitle.value,
        isValid: subtitle.isValid,
      },
      desc: {
        value: description.value,
        isValid: description.isValid,
      },
      pages: {
        value: pages.value,
        isValid: pages.isValid,
      },
      publisher: {
        value: published.publisher.value,
        isValid: published.publisher.isValid,
      },
      year: {
        value: published.year.value,
        isValid: published.year.isValid,
      },
      authors: {
        value: authors.value,
        isValid: authors.isValid,
      },
      categories: {
        value: categories.value,
        isValid: categories.isValid,
      },
    };
    console.log(formObj);

    //Reset values
    title.reset();
    subtitle.reset();
    description.reset();
    pages.reset();
    published.reset();
    authors.reset();
    categories.reset();
  };

  //////////////////////////////////
  return (
    <Container component='div'>
      <form noValidate autoComplete='off' onSubmit={submitHandler}>
        {/* TITLE */}
        <CommonInput
          name='title'
          isRequired
          validationFn={titleValidations}
          getValues={useCallback((value) => setTitle(value), [])}
        />
        {/* SUBTITLE */}
        <CommonInput
          name='subtitle'
          getValues={useCallback((value) => setSubtitle(value), [])}
        />
        {/* DESCRIPTION */}
        <CommonInput
          name='description'
          isRequired
          validationFn={descValidations}
          getValues={useCallback((value) => setDescription(value), [])}
        />
        {/* PAGES */}
        <CommonInput
          name='pages'
          type='number'
          isRequired
          validationFn={pagesValidations}
          getValues={useCallback((value) => setPages(value), [])}
        />
        {/* PUBLICHED DATE */}
        <PublichedPicker
          validationFn={publisherValidations}
          getValues={useCallback((value) => setPublished(value), [])}
        />
        {/* AUTHORS */}
        <AuthorList getValues={useCallback((value) => setAuthors(value), [])} />
        {/* CATEGORIES */}
        <CategoriesSelector
          getValues={useCallback((value) => setCategories(value), [])}
        />
        {/* ISBN */}
        <Button
          disabled={!isValid}
          type='submit'
          variant='contained'
          size='large'
          color='primary'
          sx={{ my: 2 }}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
}
