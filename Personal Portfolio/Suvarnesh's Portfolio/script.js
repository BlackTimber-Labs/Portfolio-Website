if("serviceWorker" in navigator){
    navigator.serviceWorker.register("sworker.js").then(registration=>{
        console.log("Service worker registered")
        console.log(registration);
    }).catch(error=>{
        console.log("Service Worker error")
        console.log(error)
    })
}
else {
    alert("Service Worker not working")
}