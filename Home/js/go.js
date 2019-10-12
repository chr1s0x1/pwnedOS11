
// Credit to Sem Voigtländer (@userlandkernel) for finding\\
//iOS Version\\
function checkVer() {
    document.getElementById("gogo").innerHTML = "Starting..";
    
    function detectOSVersion() {
    var match = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
     if(match) {
       var version = [
           parseInt(match[1], 10),
           parseInt(match[2], 10),
           parseInt(match[3] || 0, 10)
       ];
       return parseFloat(version[0]+'.'+version[1]+version[2]);
         
         if (parseFloat() <= 11.3.1) {
             dcoument.getElementById("gogo").innerHTML = "Device Firmware Detected (iOS 11)\n Using multi_patch exploit..";
         }else if(parseFloat() => 12.2) {
             document.getElementById("gogo").innerHTML= "Device Firmware Detected (iOS 12)\n Using SockPuppet exploit..";
         }else {
             alert("Error, Device Firmware unkown");
             return -1;
         }
     }
