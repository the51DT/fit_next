// 퍼블 작업시 공통 파일 호출
document.addEventListener("DOMContentLoaded", function() {    
    loadIncludedHTML();
});

const loadIncludedHTML = async () => {
    const elements = document.querySelectorAll('[data-include-path]');
    
    await Promise.all([...elements].map(async (el) => {
        const includePath = el.dataset.includePath;
        try {
            const response = await fetch(includePath);
            const html = await response.text();
            
            // 임시 div에 응답 텍스트를 삽입
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = html;
            
            // 원본 요소를 교체
            el.outerHTML = tempDiv.innerHTML;
            
            // 스크립트 실행
            const scripts = tempDiv.getElementsByTagName('script');
            [...scripts].forEach(oldScript => {
                const newScript = document.createElement('script');
                Array.from(oldScript.attributes).forEach(attr => {
                    newScript.setAttribute(attr.name, attr.value);
                });
                newScript.text = oldScript.text;
                document.body.appendChild(newScript);
            });
        } catch (error) {
            console.error(`Failed to load ${includePath}:`, error);
        }
    }));
}

