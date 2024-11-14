function openLogoModal() {
    //var n = document.getElementById("myModal").style.display = "block";
    document.getElementById("logoModal").style.display = "block";
}
    // Close the Modal
    function closeLogoModal() {
    document.getElementById("logoModal").style.display = "none";
}
    var logoSlideIndex = 1;
    showLogoSlides(logoSlideIndex);
    // Next/previous controls
    function plusLogoSlides(n) {
        showLogoSlides(logoSlideIndex += n);
}
    // Thumbnail image controls
    function logo_currentSlide(n) {
        showLogoSlides(logoSlideIndex = n);
}
    function showLogoSlides(n) {
    var i;
    //var slides = document.getElementsByClassName("mySlides");
    var slides = document.getElementsByClassName("logoSlides");
    var dots = document.getElementsByClassName("demo logo");
    var captionText = document.getElementById("logoImgCaption");
    if (n > slides.length) {logoSlideIndex = 1;}
    if (n < 1) {logoSlideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[logoSlideIndex-1].style.display = "block";
    dots[logoSlideIndex-1].className += " active";
    captionText.innerHTML = dots[logoSlideIndex-1].alt;
}