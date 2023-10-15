import {NextRequest, NextResponse} from 'next/server';
import {ModelService as service} from '@/services/modelService';

export async function POST(request: NextRequest) {
  const body: Model = await request.json();
  const result = await service.addModel(body);

  return NextResponse.json({code: result});
}

export async function GET(request: NextRequest) {
  const {searchParams} = new URL(request.url);
  const id = searchParams.get('id');
  const result = id === null ? await service.getList() : await service.getById(id);

  return NextResponse.json(result);
}