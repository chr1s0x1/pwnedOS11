
// Credit to Sem Voigtländer (@userlandkernel) for finding iOS Version
// Get iOS Version
function detectOSVersion() {
var match = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
 if(match) {
   var version = [
       parseInt(match[1], 10),
       parseInt(match[2], 10),
       parseInt(match[3] || 0, 10)
   ];
   return parseFloat(version[0]+'.'+version[1]+version[2]);
     if(parseFloat() > 12.2)
     {

window.alert("Error, Unsupported Firmware");
window.alert("Sorry, pwnedOS11 only supports iOS 11 - 12.2");
return -1;
}
