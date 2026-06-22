
/* ========================================================================
   ############   Hamburger Menu Toggle  ##############
   ======================================================================== */

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    
    // Create overlay element
    const overlay = document.createElement('div');
    overlay.className = 'nav-overlay';
    document.body.appendChild(overlay);
    
    // Toggle menu function
    function toggleMenu() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    }
    
    // Close menu function
    function closeMenu() {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    // Event listeners
    hamburger.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', closeMenu);
    
    // Close menu when a link is clicked
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(function(link) {
        link.addEventListener('click', closeMenu);
    });
    
    // Close menu when Escape key is pressed
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            closeMenu();
        }
    });
});



/* ========================================================================
   ##############    Accordion Interaction for About Page    ##########3
   ======================================================================== */

document.addEventListener('DOMContentLoaded', function() {
    // Get all belief headers
    const beliefHeaders = document.querySelectorAll('.belief-header');
    
    // Open the first belief section by default
    const firstContent = document.querySelector('.belief-content');
    const firstIcon = document.querySelector('.belief-header .toggle-icon');
    if (firstContent && firstIcon) {
        firstContent.classList.add('active');
        firstIcon.style.transform = 'rotate(180deg)';
    }
    
    // Add click event to each header
    beliefHeaders.forEach(function(header) {
        header.addEventListener('click', function() {
            // Find the parent belief-card
            const card = this.closest('.belief-card');
            // Find the content div inside this card
            const content = card.querySelector('.belief-content');
            // Find the toggle icon
            const icon = this.querySelector('.toggle-icon');
            
            // Toggle the active class on content
            content.classList.toggle('active');
            
            // Rotate the icon based on active state
            if (content.classList.contains('active')) {
                icon.style.transform = 'rotate(180deg)';
            } else {
                icon.style.transform = 'rotate(0deg)';
            }
        });
    });
});