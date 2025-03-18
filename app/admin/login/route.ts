// /app/api/admins/route.ts
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const response = await fetch("https://api.kodegen.kr/api/v1/admins", {
        method: "GET",
        headers: {
            "Accept": "application/json",
        },
        });

        if (!response.ok) {
        throw new Error(`HTTP 오류! 상태 코드: ${response.status}`);
        }

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error: unknown) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }
        return NextResponse.json({ error: 'An unknown error occurred' }, { status: 500 });
    }
}