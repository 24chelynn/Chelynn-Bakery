document.addEventListener("DOMContentLoaded", function() {

    // === 1. Logika Menu Mobile (Hamburger) ===
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const navLinks = document.querySelectorAll(".nav-link");

    // Buka/tutup menu saat hamburger di-klik
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    // Tutup menu saat salah satu link di-klik (untuk navigasi halaman)
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        });
    });


    // === 2. Animasi Fade-in saat Scroll (Intersection Observer) ===
    // Ini adalah cara modern dan efisien untuk animasi scroll

    // Pilih semua elemen yang ingin dianimasikan
    const fadeElements = document.querySelectorAll('.fade-in');

    const observerOptions = {
        root: null, // Menggunakan viewport sebagai root
        rootMargin: '0px',
        threshold: 0.1 // Elemen dianggap terlihat jika 10% areanya masuk viewport
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            // Jika elemen masuk ke viewport
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Berhenti mengamati elemen ini setelah animasi berjalan
                observer.unobserve(entry.target);
            }
        });
    };

    // Buat observer baru
    const scrollObserver = new IntersectionObserver(observerCallback, observerOptions);

    // Amati setiap elemen
    fadeElements.forEach(el => {
        scrollObserver.observe(el);
    });

});