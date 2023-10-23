'use client';

import Divider from '@mui/material/Divider';
import { CustomTable } from "@/components/CustomTable";
import { useState, useEffect } from 'react';
import { Account, Column, Transaction } from '@/services/types';

export default function AccountProfile({ params }: { params: { id: string } }) {

  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [account, setAccount] = useState<Account | null>(null);
  const columns: readonly Column[] = [
    {
      id: 'id',
      label: 'ID',
      minWidth: 100
    },
    {
      id: 'source',
      label: 'Source',
      minWidth: 100
    },
    {
      id: 'type',
      label: 'Type',
      minWidth: 100
    },
    {
      id: 'status',
      label: 'Status',
      minWidth: 100
    },
    {
      id: 'amount',
      label: 'Amount',
      minWidth: 100
    }
  ];

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
      <CustomTable data={transactions} columns={columns}/>
    </>
  )
}