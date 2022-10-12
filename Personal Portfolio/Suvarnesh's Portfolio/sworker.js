self.addEventListener("install",e=>{

    e.waitUntil(
        caches.open("static").then(cache=>{
            return cache.addAll(["./","css/aos.css","css/bootstrap.min.css"
            ,"css/main.css","./images/address_book.jpg"
            ,"./images/covid_19.jpg","./images/todo_django.jpg"
            ,"./images/todo-react.jpg","./images/logo64.png"
            ,"./images/logo512.png","./images/suvarneshkm.jpg"
            ,"./images/cc-bg-1.jpg","./favicon.ico"]);
        })
    )

})

self.addEventListener("fetch",e=>{
    e.respondWith(
        caches.match(e.request).then(response=>{
            return response || fetch(e.request)
        })
    )
})