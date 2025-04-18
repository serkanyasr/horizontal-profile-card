// DOM içeriği yüklendiğinde çalışacak kod
document.addEventListener('DOMContentLoaded', function() {
    // Sosyal medya ikonlarını seç
    const socialIcons = document.querySelectorAll('.social-icons li a');
    
    // Her ikona hover efekti ekle
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.2) rotate(5deg)';
            this.style.transition = 'all 0.3s ease';
        });
        
        icon.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    });
    
    // Sayfa yüklendiğinde profil kartını görünür yap
    const profileCard = document.querySelector('.profile-card');
    profileCard.style.opacity = '0';
    
    setTimeout(() => {
        profileCard.style.transition = 'opacity 0.8s ease-in-out';
        profileCard.style.opacity = '1';
    }, 300);
});