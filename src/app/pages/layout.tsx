'use client';

import {ResponsiveAppBar} from '@/components/AppBar';
import {useState} from 'react';
import Paper from '@mui/material/Paper';


export default function Layout({
  children
}: {
  children: React.ReactNode
}) {

  return (
    <section>
      <ResponsiveAppBar />
      <nav></nav>
      <Paper>
      {children}

      </Paper>
    </section>
  );
}