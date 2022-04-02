import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

//STYLES
import { useTheme } from '@mui/material/styles';

function Footer() {
  //Styles
  const theme = useTheme();

  return (
    <footer>
      <Box
        sx={{
          minHeight: '5vh',
          backgroundColor: theme.palette.primary.main,
          p: 1,
        }}
      >
        <Grid
          container
          justifyContent='center'
          alignItems='center'
          sx={{ pt: 2 }}
        >
          <Grid item xl={2} lg={2} md={2} sm={2} xs={2}></Grid>
          <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
            <Typography
              variant='h5'
              component='div'
              align='center'
              color='primary.contrastText'
            >
              BOOKSTORE FOOTER
            </Typography>
          </Grid>
          <Grid item xl={2} lg={2} md={2} sm={2} xs={2}>
            <Typography
              variant='body1'
              component='div'
              align='center'
              color='primary.contrastText'
            >
              Developed by: Christopher Spathas
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </footer>
  );
}

export default Footer;
