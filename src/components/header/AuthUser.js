import { useState } from 'react';

//MUI COMPONENTS
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';

function AuthUser() {
  const [auth, setAuth] = useState(true);
  const [anchorAcc, setAnchorAcc] = useState(null);

  const handleMenu = (event) => {
    setAnchorAcc(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorAcc(null);
  };

  return (
    <>
      {auth ? (
        <div>
          <IconButton
            size='large'
            aria-label='your account'
            aria-controls='menu-appbar'
            aria-haspopup='true'
            onClick={handleMenu}
            color='inherit'
            sx={{ m: 1 }}
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id='menu-appbar'
            anchor={anchorAcc}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorAcc)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem
              onClick={() => {
                setAuth(false);
                handleClose();
              }}
            >
              Logout
            </MenuItem>
          </Menu>
        </div>
      ) : (
        <Button color='inherit' onClick={() => setAuth(true)}>
          Login
        </Button>
      )}
    </>
  );
}

export default AuthUser;
