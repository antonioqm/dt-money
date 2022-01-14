import { Container } from "./styles";
import React, {useContext} from 'react'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { TransactionsContext } from "../../TransactionsContexts";

export function Summary (){

const {transactions} = useContext(TransactionsContext) 
console.log(transactions)
  return (
    <Container>
      <div>
        <header>
          <p>entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>R$ 1.000,00</strong>
      </div>
      <div>
        <header>
          <p>entradas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong>-R$ 500,00</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>entradas</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>R$ 500,00</strong>
      </div>
    </Container>
  )
} 