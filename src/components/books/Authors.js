import React from 'react';

//MUI COMPONENTS
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

function Authors({ authors }) {
  return (
    <Grid
      container
      justifyContent='start'
      alignItems='center'
      spacing={2}
      sx={{ px: 10 }}
    >
      {Array.isArray(authors) &&
        authors.map((author) => (
          <Grid item container key={`author-${author}`}>
            <Grid item xl={1} lg={1} md={1} sm={1} xs={1}>
              <Avatar alt='Remy Sharp' src='/dummy/img/author/1.jpg' />
            </Grid>
            <Grid item xl={11} lg={11} md={11} sm={11} xs={11}>
              <Typography variant='h6'>
                <strong>Authors: </strong>
                {author}
              </Typography>
            </Grid>
          </Grid>
        ))}

      {!Array.isArray(authors) && (
        <Grid item container>
          <Grid item xl={1} lg={1} md={1} sm={1} xs={1}>
            <Avatar alt='Remy Sharp' src='/dummy/img/author/1.jpg' />
          </Grid>
          <Grid item xl={11} lg={11} md={11} sm={11} xs={11}>
            <Typography variant='h6'>
              <strong>Authors: </strong>
              {authors}
            </Typography>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
}

export default Authors;
