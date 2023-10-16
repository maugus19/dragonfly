import {NextRequest, NextResponse} from 'next/server';
import { Account } from '@/services/types';
import { getById, getList, saveAccount } from '@/services/accountService';

export async function POST(request: NextRequest) {
  const body: Account = await request.json();
  const result = await saveAccount(body);

  return NextResponse.json({code: result});
}

export async function GET(request: NextRequest) {
  const {searchParams} = new URL(request.url);
  const id = searchParams.get('id');
  const result = id === null ? await getList() : await getById(id);

  return NextResponse.json(result);
}