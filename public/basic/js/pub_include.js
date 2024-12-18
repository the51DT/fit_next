 // 퍼블 작업시 공통 파일 호출
document.addEventListener("DOMContentLoaded", function() {    
    loadIncludedHTML();
});

const loadIncludedHTML = () => {
    var allElements = document.getElementsByTagName('*');
    Array.prototype.forEach.call(allElements, function(el) {
        var includePath = el.dataset.includePath;
        if (includePath) {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    // 임시 div에 응답 텍스트를 삽입
                    var tempDiv = document.createElement('div');
                    tempDiv.innerHTML = this.responseText;
                    
                    // 원본 요소를 교체
                    el.outerHTML = tempDiv.innerHTML;
                    
                    // 새로 삽입된 스크립트를 찾아서 실행
                    var scripts = tempDiv.getElementsByTagName('script');
                    for (var i = 0; i < scripts.length; i++) {
                        var script = document.createElement('script');
                        if (scripts[i].src) {
                            // 외부 스크립트 파일 로드
                            script.src = scripts[i].src;
                            script.async = false; // 순서대로 로드되도록 설정
                        } else {
                            // 인라인 스크립트 실행
                            script.text = scripts[i].text;
                        }
                        document.body.appendChild(script);
                    }
                }
            };
            xhttp.open('GET', includePath, true);
            xhttp.send();
        }
    });
}

