var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
var interval;


for (var i = 0; i < navMenuAnchorTags.length; i++) {
    navMenuAnchorTags[i].addEventListener('click', function (event) {
        event.preventDefault();
        var targetSectionID = this.textContent.trim().toLowerCase();
        console.log(this.textContent);
        var targetSection = document.getElementById(targetSectionID);
        console.log(targetSection);
        console.log(targetSectionID);
        interval = setInterval(function () {
            scrollVertically(targetSection, targetSectionID);
        }, 20);
    });
}


function scrollVertically(targetSection, targetSectionID) {
    var targetSectionCoordinates = targetSection.getBoundingClientRect();
    if (targetSectionCoordinates.top <= 0) {
        clearInterval(interval);
        return;
    }
    if(targetSectionID == 'contact' && targetSectionCoordinates.bottom <= window.innerHeight+50){
        clearInterval(interval);
        return;
    }
    window.scrollBy(0, 50);
}