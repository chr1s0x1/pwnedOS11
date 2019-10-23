
// Determine what exploit to use via iOSVersion() in versioncheck.js..
// WIP, can be improved on.
             function DetermineExploit() {
                 // Will store iOS version (if ios 11 or 12)
                 var exploitByOS;
                 
                 if (iOSVersion() > '11')
                     document.body.innerHTML = "<h4>Device is on iOS 12..</h4>";
                 exploitByOS = 12;
             }else if (iOSVersion() < '12') {
                 document.body.innerHTML = "<h4>Device is on iOS 11..</h4>";
                 exploitByOS = 11;
             }else {
                 alert("Error, iOS version unknown, Quitting..");
                 location.reload();
             }
