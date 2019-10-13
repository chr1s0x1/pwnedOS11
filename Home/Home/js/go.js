
// Get user agent to determine what exploit to use...
// WIP
             function uAgent() {
                 var getAgent = navigation.userAgent;
                 
                 if (getAgent <= 12.4)
                     document.body.innerHTML = "<h4>Device is on iOS 12\n will use SockPuppet 3..</h4>";
             }else if (getAgent <= 11.3) {
                 // Saying 11.3.1 draws an error
                 document.body.innerHTML = "<h4>Device is on iOS 11\n will use multi_path..</h4>";
             }else {
                 alert("Error, iOS version unknown, Quitting..");
                 location.reload();
             }
