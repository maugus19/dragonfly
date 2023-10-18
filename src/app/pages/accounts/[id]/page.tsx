'use client';

import Divider from '@mui/material/Divider';
import { CustomTable } from "@/components/CustomTable";

export default function AccountProfile({ params }: { params: { id: string } }) {
  return (
    <>
      <div>My Post: {params.id}</div>
      <Divider/>
      <CustomTable />
    </>
  )
}