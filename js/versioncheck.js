
// Credit to Sem Voigtländer (@userlandkernel) for finding iOS Version
// Get iOS Version
function detectOSVersion() {
    if (!/\b11_\S+ like Mac OS X/.test(navigator.userAgent) || !/\b12_\S+ like Mac OS X/.test(navigator.userAgent))
window.alert("Error, Unsupported Firmware");
window.alert("Sorry, pwnedOS11 only supports iOS 11 - 12.1.1”);
return -1;
}
