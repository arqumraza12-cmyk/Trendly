import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    ok: true,
    app: 'trendly',
    env: process.env.VERCEL ? 'vercel' : 'local',
    time: new Date().toISOString(),
  });
}
