
    
       // JavaScript code for slider with previous and next indicators
       const slider = document.querySelector('.slider');
        const slides = document.querySelectorAll('.slide');
        const prev = document.getElementById('prev');
        const next = document.getElementById('next');

        let counter = 0;
        const slideWidth = slides[0].clientWidth;

        next.addEventListener('click', () => {
            counter++;
            if (counter > slides.length - 1) {
                counter = 0;
            }
            updateSlider();
        });

        prev.addEventListener('click', () => {
            counter--;
            if (counter < 0) {
                counter = slides.length - 1;
            }
            updateSlider();
        });

        function updateSlider() {
            slider.style.transform = `translateX(${-counter * slideWidth}px)`;
        }

        // Automatic slide transition
        setInterval(() => {
            counter++;
            if (counter > slides.length - 1) {
                counter = 0;
            }
            updateSlider();
        }, 3000); // Change slide every 3 seconds (3000 milliseconds)
        
        // JavaScript code for rotating advertisement text
        const advertisementTexts = ["UJOSET Ranked Best Unicross Journal", "UJOSET Editorial Borad Visit To the Dean Faculty of Physical Science", 
        "UJOSET gets international recognition and partnership", "Publish your articles and journals with UJOSET to get the desired coverage and recognition"]; 
        // Add more advertisement texts as needed
        
        let currentIndex = 0;
        const advertisementElement = document.getElementById("advertisementText");

        function changeAdvertisementText() {
            advertisementElement.textContent = advertisementTexts[currentIndex];
            currentIndex = (currentIndex + 1) % advertisementTexts.length;
        }

        setInterval(changeAdvertisementText, 5000); // Change text every 3 seconds (3000 milliseconds)

        // JavaScript code for testimonial slideshow
        let slideIndex = 0;
        const testimonialSlides = document.querySelectorAll('.testimonial-slide');

        function showTestimonials() {
            for (let i = 0; i < testimonialSlides.length; i++) {
                testimonialSlides[i].style.display = 'none';
            }
            slideIndex++;
            if (slideIndex > testimonialSlides.length) { slideIndex = 1 }
            testimonialSlides[slideIndex - 1].style.display = 'block';
            setTimeout(showTestimonials, 5000); // Change slide every 5 seconds (5000 milliseconds)
        }

        showTestimonials();

          // JavaScript function to scroll to the top of the page
          function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }

        // Initialize datepicker
        $(function() {
            $("#datepicker").datepicker();
        });

        // Handle booking button click
        $("#book-btn").click(function() {
            var selectedDate = $("#datepicker").datepicker("getDate");
            if (selectedDate) {
                alert("Appointment booked for: " + selectedDate);
                // You can perform further actions here, like sending the selected date to a server for processing
            } else {
                alert("Please select a date.");
            }
        });