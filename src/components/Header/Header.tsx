import { Person } from '@mui/icons-material';
import { AppBar, Avatar, Toolbar, Typography } from '@mui/material';
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { CashierContext } from '../../store/CashierContextProvider';

const Header = () => {
  const { cashier } = useContext(CashierContext);
  const location = useLocation()

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          POS Point
        </Typography>
        {cashier.name && location.pathname !== '/' && (<>
          <Avatar sx={{ marginRight: 2 }}>
            <Person />
          </Avatar>
          <strong data-test-id="casher-name">{cashier.name}</strong>
        </>)}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
