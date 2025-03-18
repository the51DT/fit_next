export default function BasicGuide() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] p-8 pb-20 gap-16 sm:p-20 font-geist-sans">
            <div className="guide-content">    
                <div className="flex">
                    <div className="page-cont flex-1">      
                        <p className="guide-title-h3">1. 설치 및 환경</p>
                        <div className="section_text">
                            <ul className="description-list">
                                <li>Git에서 클론 받은 소스는 먼저 <code>npm install</code> 명령어로 설치하고, <code>npm run dev</code>로 개발 서버를 실행한다.</li>
                                <li>최초 설정은 <code>node 20.18.1</code> 에서 했고, 설치 오류 시 버전 체크가 필수 사항이다.</li>
                                {/* <li>공통 파일 관리를 위해 <strong>EJS(Embedded JavaScript Template)</strong> 템플릿 엔진 모듈을 사용하며, GitHub Actions를 통해 자동 빌드된 후 Netlify로 배포된다.</li>
                                <li>개발 시 <code>dist</code> 폴더를 참조하면 통합된 HTML과 컴포넌트 파일을 활용할 수 있으며, <code>npm run build</code>를 통해 <code>dist</code>가 생성된다.</li>                             */}
                                <li>기타 세부 사항은 <code>package.json</code>에서 확인할 수 있다.</li>
                            </ul>
                        </div>  

                        <p className="guide-title-h3 mt-6">2. 네이밍 룰</p>
                        <div className="section_text">
                            <ul className="description-list">
                                <li>컴포넌트 기반의 웹 개발론에 최적화된 <strong>BEM 방식</strong>을 권장한다.</li>                                    
                                <li>네이밍의 조합은 <code>형태-의미-순서-상태</code> 순으로 사용한다.</li>
                                <li>클래스명은 의미를 쉽게 이해할 수 있는 조합으로 하되, 가능한 약어를 피한다. (예: <code>button_wrap</code>(✅), <code>btn_</code>(❌))</li>
                                <li><strong>ID</strong>는 고유해야 하므로 CSS에서는 ID 규칙을 피한다.</li>
                                <li>Tag 규칙을 사용하지 않고, Class 규칙을 사용하는 것이 원칙이다.</li>
                                <li className="mt-4 font-semibold">Tailwind CSS를 사용하며, 과도한 클래스 중첩이 발생하지 않는 경우 예) Spacing, Align, Transforms 등에서 사용한다.</li>
                            </ul>
                        </div>  

                        <p className="guide-title-h3 mt-6">3. 디렉토리 구조</p>
                        <div className="section_text flex">
                            <ul className="description-list ml-10">
                                <li><strong>dist :</strong> Build 폴더</li>                            
                                <li><strong>public :</strong> 번들 & JS 외 일부 이미지 (Build 시 <code>dist/assets/</code> 경로로 이동)</li>     
                                <li>
                                    <strong>src :</strong>
                                    <p>📂 layouts - 레이아웃 공통 파일</p>
                                    <p>📂 assets (CSS, Images)</p>
                                    <p>📂 components - 컴포넌트 파일</p>
                                    <p>📂 guide - 가이드 파일</p>
                                    <p>📂 pages - 페이지</p>
                                </li>     
                                <li>메뉴 추가/삭제는 <code>/public/ia.json</code>에서 관리하며, 각 작업자별로 메뉴를 생성한다.</li>
                            </ul>
                        </div>       

                        <p className="guide-title-h3 mt-6">4. 컴포넌트 구성</p>
                        <div className="section_text">
                            <ul className="description-list">
                                <li>디자인 Value는 <code>:root</code> 변수를 사용하며, 코드의 재사용성을 높인다.</li>
                            </ul>
                        </div> 

                        <p className="guide-title-h3 mt-6">5. 활용 가능한 API</p>
                        <div className="section_text">
                            <ul className="description-list">
                                <li>관리자 API : <a href="https://api.kodegen.kr/swagger-ui/index.html" className="text-blue-500 hover:underline">Swagger API 문서</a></li>
                                <li>날씨 API : <code>js</code> 폴더 참고</li>
                            </ul>
                        </div>      
                    </div>
                </div>
            </div>        
        </div>
    );
}