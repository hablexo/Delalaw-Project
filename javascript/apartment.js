
let content = document.querySelectorAll('.interface');
for (i = 0; i < content.length; i++) {
    content[i].addEventListener('click', function () {
        let shower = this.nextElementSibling;
        if (shower.style.visibility == "hidden") {
            shower.style.visibility = "visible";
        } else {
            shower.style.visibility = "hidden";
        }
    });
}
