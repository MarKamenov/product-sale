
import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { FC } from 'react';


import { BarChart } from '@mui/x-charts';
import { STORAGE_KEY } from '../../App';
import cashiers from '../../data/cashier_sample.json';

export interface ISale {
  cashierId: number;
  saleAmount: number;
}

const Dashboard: FC = () => {
  const storedSales: ISale[] = JSON.parse(localStorage.getItem(STORAGE_KEY)!);

  const getCashier = (cashierId: number) => cashiers.find(c => c.id === cashierId)!.name;


  const sales = Object.values(storedSales.reduce<Record<number, ISale>>((acc, sale) => {
    const { cashierId, saleAmount } = sale;

    if (!acc[cashierId]) {
      acc[cashierId] = { cashierId, saleAmount: 0 };
    }

    acc[cashierId].saleAmount += saleAmount;

    return acc;
  }, {}));

  return (
    <div id="Dashboard">
      <Typography sx={{ mb: 4 }} variant="h2" align="center">Cashier Sales Statistics</Typography>

      <Box sx={{ width: '100%', maxWidth: 600, margin: 'auto' }}>
        <BarChart
          xAxis={[{ scaleType: 'band', data: sales.map(item => getCashier(item.cashierId)) }]}
          series={[{
            data: sales.map(item => item.saleAmount)
          }]}
          width={500}
          height={300}
        />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
        <Button component={Link} to='/' color="primary" >Switch Cashier</Button>
        <Button component={Link} to='/sale' variant="contained" color="primary" data-test-id="add-sale">Add a sale</Button>
      </Box>
    </div>
  );
}

export default Dashboard;
