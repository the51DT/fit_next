"use client";
import { useEffect, useState } from "react";

interface GuideInfo {
    siteName: string;
    period: string;
    worker: string;
    email: string;
}

export default function GuideHome() {
    const [guideData, setGuideData] = useState<GuideInfo | null>(null);

    useEffect(() => {
        fetch("/ia.json")
            .then((res) => res.json())
            .then((data) => setGuideData(data))
            .catch((error) => console.error("Error loading data:", error));
    }, []);

    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
            <div className="guide-content">
                <div className="font-body-md font-semibold">개요</div>
                <div className="guide-page__table-wrap mt-5">
                    <table>
                        <colgroup>
                            <col style={{ width: "20%" }} />
                            <col />
                        </colgroup>
                        <tbody>
                            <tr>
                                <th scope="row">프로젝트</th>
                                <td>{guideData?.siteName || "Fit Team Library"}</td>
                            </tr>
                            <tr>
                                <th scope="row">기간</th>
                                <td>{guideData?.period || "2025.03 ~ 2025.10"}</td>
                            </tr>
                            <tr>
                                <th scope="row">가이드 작업자</th>
                                <td>{guideData?.worker || "미정"}</td>
                            </tr>
                            <tr>
                                <th scope="row">대표 이메일</th>
                                <td>{guideData?.email || "hongsh@the-51.com"}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <ul className="description-list mt-4">
                    <li>프로젝트 수행을 위한 기본 가이드를 제공한다.</li>
                </ul>
            </div>
        </div>
    );
}