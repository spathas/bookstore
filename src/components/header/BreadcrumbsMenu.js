//MUI COMPONENTS
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

function BasicBreadcrumbsMenu({ links, pageName }) {
  return (
    <div role='presentation' onClick={handleClick}>
      <Breadcrumbs maxItems={2} aria-label='breadcrumb'>
        {links.map((data) => (
          <Link
            underline='hover'
            color='inherit'
            href={data.href}
            key={`bc-menu-${data.name}`}
          >
            {data.name}
          </Link>
        ))}
        <Typography color='text.primary'>{pageName}</Typography>
      </Breadcrumbs>
    </div>
  );
}

export default BasicBreadcrumbsMenu;
