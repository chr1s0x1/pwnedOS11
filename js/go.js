 // Chr1s0x1


// Determine what exploit to use via iOSVersion() in versioncheck.js..
// WIP, can be improved on. -

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

// -------------------------------------------------------------------------------//

    function determineExploit() {
                 
                 
             document.body.innerHTML = "<h4><center>Getting iOS version..</center></h4>";
                 
                 // Will store iOS version (if ios 11 or 12)
                 var exploitByOS = 0;
                 
                 if (iOSVersion() == '11.0') {
                 exploitByOS = 11;
             }else if (iOSVersion() == '12.0') {
                 exploitByOS = 12;
             }
             else if(iOSVersion() == '13.0b1' || '13.0b2') {
                    exploitByOS = 13;
                    }else {
                 window.alert("error : go.js");
                 location.reload();
             }
}
