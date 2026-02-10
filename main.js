const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    entry.target.style.transition = 'all 0.6s ease';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 100);
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

const rewardCards = document.querySelectorAll('.reward-card');
rewardCards.forEach(card => {
    observer.observe(card);
});

const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('mouseenter', function() {
        this.style.letterSpacing = '2px';
    });
        
    ctaButton.addEventListener('mouseleave', function() {
        this.style.letterSpacing = '0px';
    });
}
