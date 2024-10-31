document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('seeMoreButton').addEventListener('click', function() {
    const hiddenWork = document.querySelectorAll('.work.hidden');
    
    hiddenWork.forEach(work => {
      box.classList.remove('hidden'); // Remove the 'hidden' class
    });
    
    this.style.display = 'none'; // Hides the 'See More' button after click
  });
});