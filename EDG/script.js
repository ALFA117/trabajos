// Función para actualizar la fecha actual
function updateDate() {
    const dateElement = document.getElementById('current-date');
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    const currentDate = new Date().toLocaleDateString('es-ES', options);
    dateElement.textContent = currentDate;
}

// Función para animar los elementos de noticias al hacer scroll
function animateOnScroll() {
    const newsItems = document.querySelectorAll('.news-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    newsItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'all 0.5s ease-out';
        observer.observe(item);
    });
}

// Función para manejar el marquee
function setupMarquee() {
    const marquee = document.querySelector('.marquee');
    if (marquee) {
        marquee.addEventListener('mouseover', () => {
            marquee.stop();
        });
        
        marquee.addEventListener('mouseout', () => {
            marquee.start();
        });
    }
}

// Inicializar todas las funcionalidades cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
    updateDate();
    animateOnScroll();
    setupMarquee();
}); 