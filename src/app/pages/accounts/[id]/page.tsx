'use client';

import Divider from '@mui/material/Divider';
import { CustomTable } from "@/components/CustomTable";
import { useState, useEffect } from 'react';
import { Transaction } from '@/services/types';

export default function AccountProfile({ params }: { params: { id: string } }) {

  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
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
    {
      transactions?.map(trans => (<div>{trans.amount}</div>))
    }
      <Divider />
      <CustomTable />
    </>
  )
}