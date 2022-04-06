import { useState } from 'react';

import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Grow from '@mui/material/Grow';
import AddIcon from '@mui/icons-material/Add';

//STYLES
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  image: {
    borderRadius: '10px',
    height: 300,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
  },
}));

function ImageInput() {
  const [image, setImage] = useState('');

  //Styles
  const classes = useStyles();

  const changeHandler = (e) => {
    setImage(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        width: '100%',
        mt: 2,
      }}
    >
      <label htmlFor='upload-photo'>
        <input
          style={{ display: 'none' }}
          id='upload-photo'
          name='upload-photo'
          type='file'
          onChange={changeHandler}
        />
        <Grow in timeout={500}>
          <Fab
            color='primary'
            size='small'
            component='span'
            aria-label='add'
            variant='extended'
            sx={{ m: 2 }}
          >
            <AddIcon /> {`${image ? 'Change' : 'Upload'} photo`}
          </Fab>
        </Grow>
      </label>
      {image && (
        <img
          src={URL.createObjectURL(image)}
          alt={image.name}
          loading='lazy'
          className={classes.image}
        />
      )}
    </Box>
  );
}

export default ImageInput;
