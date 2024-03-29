import { useNavigate } from 'react-router-dom';
import slugify from 'slugify';

//MUI COMPONENTS
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { CardActionArea } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';

function BookCard({ title, desc, rating }) {
  const navigate = useNavigate();

  // Redirect user to book details page
  // We will using slugify to make a mock id for every book.
  // We need IDs to redirect the user to book details page.
  const handleClick = (title) => {
    const id = slugify(title);
    navigate(`/books/${id}`);
  };

  return (
    <Card sx={{ width: '280px' }} onClick={() => handleClick(title)}>
      <CardActionArea>
        <CardMedia
          component='img'
          width='280px'
          height='340'
          image={`/book-images/${slugify(title)}.webp`}
          alt={slugify(title) + '--image'}
        />
        <CardContent>
          <Typography gutterBottom variant='h6' component='div'>
            <Box
              component='div'
              overflow='hidden'
              textOverflow='ellipsis'
              whiteSpace='pre-line'
              maxHeight={60}
              minHeight={60}
              height={60}
            >
              {/* First later toUpperCase */}
              {title.charAt(0).toUpperCase() + title.slice(1)}
            </Box>
          </Typography>
          {desc && (
            <Tooltip title={desc} arrow>
              <Typography variant='body2' color='text.secondary' noWrap>
                {desc}
              </Typography>
            </Tooltip>
          )}
          <Rating title='rating' value={rating} precision={0.5} readOnly />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default BookCard;
