import { useState } from 'react';
import { Link as LinkRouter } from 'react-router-dom';
import Link from '@mui/material/Link';

//CUSTOM COMPONENTS
import MenuBar from '../nav/MenuBar';
import AuthUser from './AuthUser';
import BreadcrumbsMenu from '../nav/BreadcrumbsMenu';

//MUI COMPONENTS
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

//STYLES
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

//Example links
const links = [{ name: 'Home', href: '/' }];

export default function MenuAppBar() {
  const [triggerMenu, setTriggerMenu] = useState(false);

  //Styles
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <header>
      <AppBar position='sticky'>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <MenuBar
            triggerMenu={triggerMenu}
            closeBar={() => setTriggerMenu(false)}
          />
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            onClick={() => setTriggerMenu(true)}
          >
            <MenuIcon />
          </IconButton>
          <LinkRouter
            to='/'
            style={{
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <Typography
              variant={matchesSM ? 'h4' : 'h6'}
              component='div'
              align='center'
            >
              <Link href='#' component='span' color='inherit' underline='hover'>
                BOOKSTORE
              </Link>
            </Typography>
          </LinkRouter>
          <AuthUser />
        </Toolbar>
      </AppBar>
      <Box sx={{ m: 2 }}>
        <BreadcrumbsMenu links={links} pageName={'Search'} />
      </Box>
    </header>
  );
}
