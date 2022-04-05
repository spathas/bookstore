import { useLocation, useNavigate } from 'react-router-dom';

//MUI COMPONENTS
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

function BreadcrumbsMenu({ links, pageName }) {
  const location = useLocation();
  const navigate = useNavigate();

  // Convert pathname to array and replace the first (empty) element to "Home".
  // After that get last value of array because we want to print it as text not as router.
  const bdItems = location.pathname.split('/');
  bdItems[0] = 'Home';
  const lastEl = bdItems.pop();

  const clickHandler = (item) => {
    const path =
      item === 'Home' ? '/' : location.pathname.split(item)[0] + item;
    navigate(path);
  };

  return (
    <Breadcrumbs maxItems={3} aria-label='breadcrumb'>
      {bdItems.map((item, i) => (
        <Link
          key={`bc-menu-${item}`}
          underline='hover'
          color='inherit'
          onClick={() => clickHandler(item)}
          sx={{ cursor: 'pointer' }}
        >
          {item.charAt(0).toUpperCase() + item.slice(1)}
        </Link>
      ))}
      <Typography color='text.primary'>
        {lastEl.charAt(0).toUpperCase() + lastEl.slice(1)}
      </Typography>
    </Breadcrumbs>
  );
}

export default BreadcrumbsMenu;
