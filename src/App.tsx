
import { useMemo } from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import sales from './data/sales_sample.json';
import Dashboard from './pages/Dashboard/Dashboard';
import SelectCashier from './pages/SelectCashier/SelectCashier';
import Sale from './pages/Sale/Sale';
import { CashierContextProvider } from './store/CashierContextProvider';

export const STORAGE_KEY = 'SALES'

function App() {
  useMemo(() => {
    const storedSales = localStorage.getItem(STORAGE_KEY);

    if (!storedSales) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(sales));
    }
  }, [])

  return (
    <Router>
      <CashierContextProvider>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<SelectCashier />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/sale" element={<Sale />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </CashierContextProvider>
    </Router>
  );
}

export default App;
