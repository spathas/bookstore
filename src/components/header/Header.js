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
import MenuIcon from '@mui/icons-material/Menu';

//Example links
const links = [{ name: 'Home', href: '/' }];

export default function MenuAppBar() {
  const [triggerMenu, setTriggerMenu] = useState(false);

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
            <Typography variant='h4' component='div' align='center'>
              <Link href='#' color='inherit' underline='hover'>
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
