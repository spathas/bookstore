import { useNavigate } from 'react-router-dom';

//MUI COMPONENTS
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

//STYLES
import FindInPageRoundedIcon from '@mui/icons-material/FindInPageRounded';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';

//NAV DATA
const navData = [
  {
    name: 'Search Page',
    path: '/books',
    icon: <FindInPageRoundedIcon color='primary' />,
  },
  {
    name: 'Product Creation Page',
    path: '/books/add',
    icon: <AddBoxRoundedIcon color='primary' />,
  },
];

function MenuBar({ triggerMenu, closeBar }) {
  const navigate = useNavigate();

  const handleClose = () => {
    closeBar();
  };

  return (
    <Drawer anchor={'left'} open={triggerMenu} onClose={handleClose}>
      <List>
        {navData.map((item, index) => (
          <ListItem
            button
            key={item.name}
            onClick={() => {
              handleClose();
              navigate(item.path);
            }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default MenuBar;
