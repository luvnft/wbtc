import React from "react";
import { TransactionDetailsProps } from "./TransactionDetails";
export const TransactionContext = React.createContext({} as TransactionProviderProps);
interface TransactionProviderProps {
    transaction: TransactionDetailsProps[];
    setTransaction: React.Dispatch<React.SetStateAction<TransactionDetailsProps[]>>;
}

export const TransactionProvider: React.FC<any> = ({ children }) => {
    const [transaction, setTransaction] = React.useState<TransactionDetailsProps[]>([{
        buttonYes: false,
        value: "1.29 BTC",
        status: "Sucessfull",
        timeRemaining: "10",
    }]);
    
    return (
        <TransactionContext.Provider value={{ transaction:transaction, setTransaction:setTransaction }}>
        {children}
        </TransactionContext.Provider>
    );
    }   
