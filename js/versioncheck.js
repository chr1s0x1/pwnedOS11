// Get iOS Version
// Credit to turnerrocks1 (@turnerhackz1) for the iOSVersion() & detectBuild() functions (and separating the unsupported 
// alerts into a function)

var supportedversions = [
'12.1.4',
'12.1.3',
'12.1.2',
'12.1.1',
'12.1',
'12.0.1',
'12.0',
'11.4.1',
'11.4',
'11.3.1',
'11.3',
'11.2.6',
'11.2.5',
'11.2.2',
'11.2.1',
'11.2',
'11.1.2',
'11.1.1',
'11.1',
'11.0.3',
'11.0.2',
'11.0.1',
'11.0'
];





function detectOSVersion() {

    
    function unsupported() {
    window.alert("Error, Unsupported Firmware");
    window.alert("Sorry, pwnedOS11 only supports iOS 11 - 12.2 & 13b1,b2");
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
    int i = 0;
    while(i < 22) {
        if(iOSVersion() != supportedversions[i]){
            i++;
        }else{
            break;
        }
    }
    if(i >= 22) {
        unsupported();
    }
    

}




