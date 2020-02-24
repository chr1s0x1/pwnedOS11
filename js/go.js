 // Chr1s0x1


// Determine what exploit to use via iOSVersion() in versioncheck.js..
// WIP, can be improved on.

// -------------------------------------------------------------------------------//

    function determineExploit() {
                 
                 
             document.body.innerHTML = "<h4><center>Getting iOS version..</center></h4>";
     
    function iOSVersion() {
       var match = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/),
           version;

       if (match !== undefined && match !== null) {
           version = [
            parseInt(match[1], 10),
            parseInt(match[2], 10),
            parseInt(match[3] || 0, 10)
        ];
        return parseFloat(version.join('.'));
    }
    return false;
}
                 // Will store iOS version (if ios 11 or 12)
                 var exploitByOS = 0;
                 let ver = iOSVersion();
                 var j = 0;
        // pass through iso11ver & iso12ver arrays to see if the device is on ios 11 or 12.
        // if i >= 16, we assume the version is unknown
        while(j < 16) {
            if(ver == iso11ver[j]) {
                document.body.innerHTML = "Running iOS 11 Firmware..";
                exploitByOS = 11;
                break;
            }else if(ver == iso12ver[j]) {
                document.body.innerHTML = "Running iOS 12 Firmware..";
                exploitByOS = 12;
                break;
            }else {
                j++;
            }
        } if(j >= 16){
            window.alert("error go.js : unknown firmware");
            location.reload();
        }
        
}
