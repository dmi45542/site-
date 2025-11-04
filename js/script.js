document.addEventListener('DOMContentLoaded', function() {
    const themeBtn = document.querySelector('.theme-btn');
    
    themeBtn.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
        
        if (document.body.classList.contains('dark-theme')) {
            themeBtn.textContent = '☀️ theme';
        } else {
            themeBtn.textContent = '🌙 theme';
        }
    });
});

// Добавить в script.js
document.addEventListener('DOMContentLoaded', function() {
    const contactBtn = document.querySelector('.contact-btn');
    const modal = document.getElementById('contactModal');
    const closeBtn = document.querySelector('.close-btn');
    
    // Открыть модальное окно
    contactBtn.addEventListener('click', function() {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // заблокировать скролл
    });
    
    // Закрыть модальное окно
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Закрыть при клике вне окна
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Закрыть на Escape
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});