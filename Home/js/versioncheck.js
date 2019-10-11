if(
    !/\b11_\S+ like Mac OS X/.test(navigator.userAgent) || !/\b12_\S+ like Mac OSX/.test(navigator.userAgent)
)
{

window.alert("Error, Unsupported Firmware");
window.alert("Sorry, pwnedOS11 only supports iOS 11 - 12");
return -1;
}
