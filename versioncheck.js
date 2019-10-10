if(
    !/\b11_\S+ like Mac OS X/.test(navigator.userAgent)
)
{

window.alert("Error, Unsupported Firmware\n");
window.alert("Sorry, pwnedOS11 only supports iOS 11 - 11.3.1");
return -1;
}
