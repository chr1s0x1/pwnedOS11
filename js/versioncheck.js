<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
// Get iOS Version
// Credit to turnerrocks1 (@turnerhackz1) for the iOSVersion() & detectBuild() functions (and separating the unsupported 
// alerts into a function)
function detectOSVersion() {
<<<<<<< Updated upstream
function unsupported() {
=======
    // will store users device version
    var uVersion;
    
    this.webkit = window.navigator.userAgent.indexOf('AppleWebKit') > -1;
    
    if (!/\b11_\S+ like Mac OS X/.test(navigator.userAgent) || !/\b12_\S+ like Mac OS X/.test(navigator.userAgent))
>>>>>>> Stashed changes
window.alert("Error, Unsupported Firmware");
window.alert("Sorry, pwnedOS11 only supports iOS 11 - 12.1.1");
}
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
//Algorithm for detecting the iOS Firmware build version using the userAgent
function detectBuild() {
    var tmp = navigator.userAgent.indexOf('Mobile/') > -1;
    if(tmp) {
        tmp = navigator.userAgent.split('Mobile/');
        if(tmp.length<1) return null;
        return alert(tmp[1].split(' ')[0]);
    }
    return null;
}
if (iOSVersion() != '12.1' || '12.0' || '12.1.2' || '12.1.4') {
    break;
} else {unsupported();}
}
