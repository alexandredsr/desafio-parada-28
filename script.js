    var slideIndex = 1;
    var autoSlideInterval;

    showSlides(slideIndex);

    function plusSlides(n) {
        clearTimeout(autoSlideInterval);
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        clearTimeout(autoSlideInterval);
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");

        if (n > slides.length) {
            slideIndex = 1;
        }

        if (n < 1) {
            slideIndex = slides.length;
        }

        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        for (var i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";

        autoSlideInterval = setTimeout(function() {
            plusSlides(1);
        }, 4000);
    }