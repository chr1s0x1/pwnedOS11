 // Chr1s0x1


// Determine what exploit to use via iOSVersion() in versioncheck.js..
// WIP, can be improved on.

// -------------------------------------------------------------------------------//

    function determineExploit() {
                 
                 
             document.body.innerHTML = "<h4><center>Getting iOS version..</center></h4>";
     
                 // Will store iOS version (if ios 11 or 12)
                 var exploitByOS = 0;
                 let ver = iOSVersion();
                 var j = 0;
        // pass through iso11ver & iso12ver arrays to see if the device is on ios 11 or 12 or 13b1/b2.
        // if i >= isover.length, we assume the version is unknown
        while(j < iso11ver.length) {
            if(ver == iso11ver[j]) {
                exploitByOS = 11;
                break;
            }else if(ver == iso12ver[j]) {
                exploitByOS = 12;
                break;
            }else if(ver == '13.0b1' || ver == '13.0b2'){
                exploitByOS = 13;
                break;
            }else{
                j++;
            }
        }
        
        if(j >= iso11ver.length){
            window.alert("error go.js : unknown firmware");
            location.reload();
        }
        
}
