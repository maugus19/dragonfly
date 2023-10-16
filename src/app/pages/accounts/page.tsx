'use client';

import { DCard } from "@/components/Card";
import { Account } from "@/services/types";
import { useEffect, useState } from "react";

export default function Page() {
  const [accounts, setAccounts] = useState<Account[]>([]);
  
  useEffect(() => {
    fetch('/api/accounts')
    .then((res) => res.json())
    .then((data) => {
      setAccounts(data);
    });
  }, []);

  return (
    <div>
      {
      accounts?.map(account => (
        <DCard
          key={account.id}
          title={account.name}
          linkLabel="Details"
          details={account.amount}
        />
      ))
    }
    </div>
  );
}