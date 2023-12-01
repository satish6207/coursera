function filterCards() {
    
    var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    var selectedCheckbox = Array.from(checkboxes).map(checkbox => checkbox.nextSibling.textContent.trim().toLowerCase());

   
    var cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        var skills = card.getAttribute('course-cards').split(',').map(skill => skill.trim().toLowerCase());
        card.style.display = selectedCheckbox.every(skill => skills.includes(skill)) ? 'block' : 'none';
    });
}

// carousel section

let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function nextSlide() {
  if (currentIndex < totalItems - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateCarousel();
}

function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalItems - 1;
  }
  updateCarousel();
}

function updateCarousel() {
  const newTransformValue = -currentIndex * 100 + '%';
  document.querySelector('.carousel-inner').style.transform = 'translateX(' + newTransformValue + ')';
}
