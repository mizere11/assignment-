// Smooth scrolling to sections when navigation items are clicked
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault();
        const targetId = event.target.getAttribute("href");
        const targetElement = document.querySelector(targetId);
        
        targetElement.scrollIntoView({ behavior: "smooth" });
    });
});

// Testimonial Carousel
let currentTestimonialIndex = 0;
const testimonials = document.querySelectorAll(".testimonials .carousel-item");
const totalTestimonials = testimonials.length;

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        if (i === index) {
            testimonial.style.display = "flex";
        } else {
            testimonial.style.display = "none";
        }
    });
}

// Function to switch to the next testimonial in the carousel
function nextTestimonial() {
    currentTestimonialIndex++;
    if (currentTestimonialIndex >= totalTestimonials) {
        currentTestimonialIndex = 0;
    }
    showTestimonial(currentTestimonialIndex);
}

// Function to switch to the previous testimonial in the carousel
function prevTestimonial() {
    currentTestimonialIndex--;
    if (currentTestimonialIndex < 0) {
        currentTestimonialIndex = totalTestimonials - 1;
    }
    showTestimonial(currentTestimonialIndex);
}

// Initially show the first testimonial
showTestimonial(currentTestimonialIndex);

// Set an interval to automatically switch testimonials every 5 seconds
setInterval(nextTestimonial, 5000);
