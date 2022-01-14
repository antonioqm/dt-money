
import { Dashboard } from "./Components/Dashboard/inedx";
import { Header } from "./Components/Header/Header";
import Modal from 'react-modal'

import { GlobalStyle } from "./styles/globals";
import { useState } from "react";
import { NewTransactionModal } from "./Components/NewTransactionModal";
import { TransactionsProviver } from "./TransactionsContexts";

Modal.setAppElement('#root');

export function App() {
  
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false)
  }
  return (
    <TransactionsProviver>
     <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard/>

      <NewTransactionModal
      isOpen={isNewTransactionModalOpen}
      onRequestClose={handleCloseNewTransactionModal}
      />

     <GlobalStyle />
    </TransactionsProviver>
  );
}


