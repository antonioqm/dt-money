import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "./services/api";

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

interface TransactionProviderProps {
  children: ReactNode
}

interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction : (transaction: TransactionInput) => void;
}

export const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);


export function TransactionsProviver({children}: TransactionProviderProps){

  const [transactions, setTransactions] = useState<Transaction[]>([]);
  useEffect(() => {
    api.get('/transactions')
    .then(response => setTransactions(response.data.transactions))
  },[])
  function createTransaction(transaction: TransactionInput ){
 
    api.post('/transactions', transaction)
    .then(data => console.log(data))
    .catch(data => console.log(data))
  }
  return (
    <TransactionsContext.Provider value={{transactions, createTransaction}}>
      {children}
    </TransactionsContext.Provider>
  )
}