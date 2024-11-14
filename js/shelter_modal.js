// Open the Modal
//function openModal() {
  function openShelterModal() {
    //var n = document.getElementById("myModal").style.display = "block";
    document.getElementById("shelterModal").style.display = "block";
  }
  // Close the Modal
  function closeShelterModal() {
    document.getElementById("shelterModal").style.display = "none";
  }


  var slideIndex = 1;
  showSlides(slideIndex);
  
  
  
  // Next/previous controls


  function plusSlides(n) {
    showSlides(slideIndex += n);
  }


  // Thumbnail image controls
  function shelter_currentSlide(n) {
    showSlides(slideIndex = n);
  }

  
  function showSlides(n) {
    var i;
    //var slides = document.getElementsByClassName("mySlides");
    var slides = document.getElementsByClassName("shelterSlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("imgCaption");
    if (n > slides.length) {slideIndex = 1;}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
  }