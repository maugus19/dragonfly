import {NextRequest, NextResponse} from 'next/server';
import { Transaction } from '@/services/types';
import { getById, getListByAccount, saveAccount } from '@/services/transactionService';

export async function POST(request: NextRequest) {
  const body: Transaction = await request.json();
  const result = await saveAccount(body);

  return NextResponse.json({code: result});
}

export async function GET(request: NextRequest) {
  const {searchParams} = new URL(request.url);
  const id = searchParams.get('accountId');
  const result = await getListByAccount(id!);

  return NextResponse.json(result);
}