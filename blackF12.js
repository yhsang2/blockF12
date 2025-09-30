!function() {
     // Detect Key Shortcuts f12 및 특수키 조합 막기
     window.addEventListener('keydown', function(e) {
         if (
             // CMD + Alt + I (Chrome, Firefox, Safari)
             e.metaKey == true && e.altKey == true && e.keyCode == 73 ||
             // CMD + Alt + J (Chrome)
             e.metaKey == true && e.altKey == true && e.keyCode == 74 ||
             // CMD + Alt + C (Chrome)
             e.metaKey == true && e.altKey == true && e.keyCode == 67 ||
             // CMD + Shift + C (Chrome)
             e.metaKey == true && e.shiftKey == true && e.keyCode == 67 ||
             // Ctrl + Shift + I (Chrome, Firefox, Safari, Edge)
             e.ctrlKey == true && e.shiftKey == true && e.keyCode == 73 ||
             // Ctrl + Shift + J (Chrome, Edge)
             e.ctrlKey == true && e.shiftKey == true && e.keyCode == 74 ||
             // Ctrl + Shift + C (Chrome, Edge)
             e.ctrlKey == true && e.shiftKey == true && e.keyCode == 67 ||
             // F12 (Chome, Firefox, Edge)
             e.keyCode == 123 ||
             // CMD + Alt + U, Ctrl + U (View source: Chrome, Firefox, Safari, Edge)
             e.metaKey == true && e.altKey == true && e.keyCode == 85 ||
             e.ctrlKey == true && e.keyCode == 85
         ) {
            e.preventDefault();
            return false;
         }
     });

     //개발자도구 실행 감지.
     console.log(Object.defineProperties(new Error, {
         toString: {value() {(new Error).stack.includes('toString@') && alert('Safari devtools')}},
         message: {
             get() {
                 //개발자도구를 감지하면 그냥 홬 로갓 키겨 버리자.
                 alert('개발자 도구(F12)는 사용하실 수 없습니다.');
                 document.location.href="https://naver.com/"
           }
         },
     }));
}();
