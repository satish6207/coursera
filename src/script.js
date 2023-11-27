function filterCards() {
    
    var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    var selectedCheckbox = Array.from(checkboxes).map(checkbox => checkbox.nextSibling.textContent.trim().toLowerCase());

   
    var cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        var skills = card.getAttribute('course-cards').split(',').map(skill => skill.trim().toLowerCase());
        card.style.display = selectedCheckbox.every(skill => skills.includes(skill)) ? 'block' : 'none';
    });
}