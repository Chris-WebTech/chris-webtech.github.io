function openRoofModal() {
    //var n = document.getElementById("myModal").style.display = "block";
    document.getElementById("roofingModal").style.display = "block";
}
    // Close the Modal
    function closeRoofModal() {
    document.getElementById("roofingModal").style.display = "none";
}
    var roofSlideIndex = 1;
    showRoofSlides(roofSlideIndex);
    // Next/previous controls
    function plusRoofSlides(n) {
        showRoofSlides(roofSlideIndex += n);
}
    // Thumbnail image controls
    function roof_currentSlide(n) {
        showRoofSlides(roofSlideIndex = n);
}
    function showRoofSlides(n) {
    var i;
    //var slides = document.getElementsByClassName("mySlides");
    var slides = document.getElementsByClassName("roofSlides");
    var dots = document.getElementsByClassName("demo roof");
    var captionText = document.getElementById("roofImgCaption");
    if (n > slides.length) {roofSlideIndex = 1;}
    if (n < 1) {roofSlideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[roofSlideIndex-1].style.display = "block";
    dots[roofSlideIndex-1].className += " active";
    captionText.innerHTML = dots[roofSlideIndex-1].alt;
}