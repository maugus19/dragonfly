'use client';

import { DCard } from "@/components/Card";
import { Account } from "@/services/types";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation'
 
 
export default function Page() {
const router = useRouter()
const [accounts, setAccounts] = useState<Account[]>([]);
  
  useEffect(() => {
    fetch('/api/accounts')
    .then((res) => res.json())
    .then((data) => {
      setAccounts(data);
    });
  }, []);

  const goToTransactions = (accountId: number) => {
    router.push(`accounts/${accountId}`, { scroll: false })

  }
  return (
    <div>
      {
      accounts?.map(account => (
        <DCard
          key={account.id}
          title={account.name}
          linkLabel="Details"
          details={account.amount}
          redirect={()=>goToTransactions(account.id!)}
        />
      ))
    }
    </div>
  );
}