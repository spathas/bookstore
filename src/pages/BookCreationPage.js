import React from 'react';

//CUSTOM COMPONENTS
import Form from '../components/form/Form';

//MUI COMPONENTS
import Typography from '@mui/material/Typography';

function bookCreationPage() {
  return (
    <>
      <Typography variant='h4' color='primary' align='center'>
        Add a new book
      </Typography>
      <Form />
    </>
  );
}

export default bookCreationPage;
