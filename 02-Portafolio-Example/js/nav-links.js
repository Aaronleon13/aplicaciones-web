// Navegación suave entre secciones
const navLinks = document.querySelectorAll('a[data-section]');

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();

        const sectionId = link.getAttribute('href');

        const section = document.querySelector(sectionId);
        
        section.scrollIntoView({ 
            behavior: 'smooth'
        });
    });
});
