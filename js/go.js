
// Determine what exploit to use via iOSVersion() in versioncheck.js..
// WIP, can be improved on.
             function determineExploit() {
               
                 // Will store iOS version (if ios 11 or 12)
                 var exploitByOS;
                 
                 if (iOSVersion() > '11')
                 exploitByOS = 12;
             }else if (iOSVersion() < '12') {
                 exploitByOS = 11;
             }else {
                 alert("error : go.js");
                 location.reload();
             }
}
