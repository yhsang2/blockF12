!function() {
     // Prevent Detect Key Shortcuts f12 and Special Key Combinations
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

     //Developer tool execution detection
     console.log(Object.defineProperties(new Error, {
         toString: {value() {(new Error).stack.includes('toString@') && alert('Safari devtools')}},
         message: {
             get() {
                 alert('You cannot use the developer tool (F12).');
           }
         },
     }));
}();
