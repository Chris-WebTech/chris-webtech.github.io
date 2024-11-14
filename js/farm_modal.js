// Open the Modal
//function openModal() {
function openFarmModal() {
    //var n = document.getElementById("myModal").style.display = "block";
    document.getElementById("farmModal").style.display = "block";
  }
  // Close the Modal
  function closeModal() {
    document.getElementById("farmModal").style.display = "none";
  }
  var farmSlideIndex = 1;
  showFarmSlides(farmSlideIndex);
  // Next/previous controls
  function plusFarmSlides(n) {
    showFarmSlides(farmSlideIndex += n);
  }
  // Thumbnail image controls
  function farm_currentSlide(n) {
    showFarmSlides(farmSlideIndex = n);
  }
  function showFarmSlides(n) {
    var i;
    //var slides = document.getElementsByClassName("mySlides");
    var slides = document.getElementsByClassName("farmSlides");
    var dots = document.getElementsByClassName("demo farm");
    var captionText = document.getElementById("farmImgCaption");
    if (n > slides.length) {farmSlideIndex = 1;}
    if (n < 1) {farmSlideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[farmSlideIndex-1].style.display = "block";
    dots[farmSlideIndex-1].className += " active";
    captionText.innerHTML = dots[farmSlideIndex-1].alt;
  }