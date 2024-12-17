import { createContext, FC, ReactNode, useCallback, useEffect, useMemo, useState } from "react";
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

export const CashierContextProvider: FC<{ children?: ReactNode }> = ({ children }) => {
  const [cashier, setCashier] = useState<ICashier>(initialState.cashier);
  const navigate = useNavigate();

  useEffect(() => {
    if (!cashier.id) {
      navigate('/');
    }
  }, [cashier.id, navigate])

  const changeCashier = useCallback((cashier: ICashier) => {
    setCashier(cashier)
  }, [])

  const provider = useMemo(
    () => ({
      changeCashier,
      cashier
    }),
    [cashier, changeCashier],
  );

  return (
    <CashierContext.Provider value={provider}>
      {children}
    </CashierContext.Provider>
  );
}

