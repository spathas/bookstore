import { Profiler } from 'react';

//CUSTOM COMPONENTS
import Form from '../components/form/Form';

//MUI COMPONENTS
import Typography from '@mui/material/Typography';

function bookCreationPage() {
  const logProfiler = (
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime,
    interactions
  ) =>
    console.log({
      id,
      phase,
      actualDuration,
      baseDuration,
      startTime,
      commitTime,
      interactions,
    });

  console.log('form');

  return (
    <Profiler id='book form' onRender={logProfiler}>
      <Typography variant='h4' color='primary' align='center'>
        Add a new book
      </Typography>
      <Form />
    </Profiler>
  );
}

export default bookCreationPage;
