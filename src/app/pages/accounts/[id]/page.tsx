'use client';

import Divider from '@mui/material/Divider';
import { CustomTable } from "@/components/CustomTable";
import { useState, useEffect } from 'react';
import { Account, Transaction } from '@/services/types';

export default function AccountProfile({ params }: { params: { id: string } }) {

  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [account, setAccount] = useState<Account | null>(null)

  useEffect(() => {
    fetch('/api/accounts?' + new URLSearchParams({
      id: params.id
    }))
      .then((res) => res.json())
      .then((data) => {
        setAccount(data);
      });
    fetch('/api/transactions?' + new URLSearchParams({
      accountId: params.id
    }))
      .then((res) => res.json())
      .then((data) => {
        setTransactions(data);
      });
  }, []);


  return (
    <>
      <div>{account?.name}</div>
      <Divider />
      {
        transactions?.map(trans => (<div key={trans.id}>{trans.amount}</div>))
      }
      <CustomTable />
    </>
  )
}