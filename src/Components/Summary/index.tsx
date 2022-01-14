import { Container } from "./styles";
import React, {useContext} from 'react'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { transitions } from "polished";
import { useTransactions } from "../../hooks/useTransactions";

export function Summary (){

const {transactions} = useTransactions() 
console.log(transactions)

// const totalDeposits = transactions.reduce((acc, transaction) => {
//   if(transaction.type === 'deposit'){
//     return acc += transaction.amount;
//   }
//   return acc;
// }, 0)


const summary = transactions.reduce((acc, transaction) => {
  if(transaction.type == 'deposit'){
    acc.deposits += transaction.amount;
    acc.total += transaction.amount;
  } else {
    acc.withdraws += transaction.amount;
    acc.total -= transaction.amount;

  }
  return acc
}, {
  deposits: 0,
  withdraws: 0,
  total:0
})

const formatValue = (value:number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value)
}
  return (
    <Container>
      <div>
        <header>
          <p>entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>{formatValue(summary.deposits)}</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong>- {formatValue(summary.withdraws)}</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>{formatValue(summary.total)}</strong>
      </div>
    </Container>
  )
} 