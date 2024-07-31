// added code for image gallery below
// Get the modal
var modal = document.getElementById("modal");

// Get the images and insert the clicked one inside the modal
var images = document.getElementsByClassName("thumbnail");
var modalImg = document.getElementById("modal-image");

for (var i = 0; i < images.length; i++) {
    images[i].onclick = function() {
        modal.style.display = "flex";
        modalImg.src = this.src;
    }
}

// Get the <span> element that closes the modal
var span = document.getElementById("close-button");

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// Close the modal when the user clicks anywhere outside of the modal content
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    let observerOptions = {
        root: null, // use the viewport
        rootMargin: '0px',
        threshold: 0.1 // trigger when 10% of the element is visible
    };

    let observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            } else {
                entry.target.classList.remove('animate');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.tracking-in-expand').forEach(element => {
        observer.observe(element);
    });
});