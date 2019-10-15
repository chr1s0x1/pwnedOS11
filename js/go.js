
// Get user agent to determine what exploit to use...
// WIP
             function uAgent() {
                 // Will store iOS version (if ios 11 or 12)
                 var exploitByOS;
                 
                 if (/\b12_\S+ like Mac OS X/.test(navigator.userAgent))
                     document.body.innerHTML = "<h4>Device is on iOS 12..</h4>";
                 exploitByOS = 12;
             }else if (/\b11_\S+ like Mac OS X/.test(navigator.userAgent)) {
                 document.body.innerHTML = "<h4>Device is on iOS 11..</h4>";
                 exploitByOS = 11;
             }else {
                 alert("Error, iOS version unknown, Quitting..");
                 location.reload();
             }
