"use client";

import { useEffect, useState } from "react";

export default function AdminLoginPage() {
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchAdmins = async () => {
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
                console.log("🔹 관리자 데이터:", data); 
            } catch (err: any) {
                setError(err.message);
                console.error("❌ API 요청 오류:", err.message);
            }
        };

        fetchAdmins();
    }, []);

    return (
        <div className="container">
            <h1>관리자 목록</h1>
        </div>
    );
}