import { createContext, useEffect, useState } from "react";
import { ICashier } from "../pages/SelectCashier/SelectCashier";
import { useNavigate } from "react-router-dom";

interface IState {
  cashier: ICashier;
  changeCashier: (cashier: ICashier) => void;
}

const initialState: IState = {
  cashier: {} as ICashier,
  changeCashier: () => { }
}

export const CashierContext = createContext(initialState)

export const CashierContextProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const [cashier, setCashier] = useState<ICashier>(initialState.cashier);
  const navigate = useNavigate();

  useEffect(() => {
    if (!cashier.id) {
      navigate('/');
    }
  }, [cashier.id, navigate])

  const changeCashier = (cashier: ICashier) => {
    setCashier(cashier)
  }

  return (
    <CashierContext.Provider value={{ cashier, changeCashier }}>
      {children}
    </CashierContext.Provider>
  );
}

