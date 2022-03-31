import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

//STYLES
import FindInPageRoundedIcon from '@mui/icons-material/FindInPageRounded';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';

function MenuBar({ triggerMenu, closeBar }) {
  const handleClose = () => {
    closeBar();
  };

  return (
    <Drawer anchor={'left'} open={triggerMenu} onClose={handleClose}>
      <List>
        {['Books', 'Add new Book'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? (
                <FindInPageRoundedIcon color='primary' />
              ) : (
                <AddBoxRoundedIcon color='primary' />
              )}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default MenuBar;
