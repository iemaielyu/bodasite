document.addEventListener('DOMContentLoaded', () => {
  const imgs = [
    ...document.querySelectorAll('.image-stack img'),
    ...document.querySelectorAll('#principal .photo-slider')
  ];

  const loadingPromises = imgs.map(img => {
    if (img.complete && img.naturalHeight !== 0) {
      return Promise.resolve();
    }
    return new Promise(resolve => {
      img.addEventListener('load', resolve, { once: true });
      img.addEventListener('error', resolve, { once: true });
    });
  });

  Promise.all(loadingPromises).then(() => {
   
    document.body.classList.add('assets-loaded');
    const btn = document.getElementById('btnEntrar');
    if (btn) {
      btn.style.opacity = 1;
      btn.style.pointerEvents = 'auto';
    }
  });
});

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = String(days).padStart(2, '0');
    document.getElementById("hours").textContent = String(hours).padStart(2, '0');
    document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
    document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
  }, 1000);

  window.addEventListener('load', () => {
    setTimeout(() => {
      const btn = document.getElementById('btnEntrar');
      btn.style.opacity = '1';
      btn.style.pointerEvents = 'auto';
    }, 3500); // Coincide con el tiempo de aparición de las imágenes
  });

  document.addEventListener('DOMContentLoaded', function () {
    const audio = document.getElementById('audioFondo');
    audio.volume = 0.1; // 🎧 volumen bajo por defecto

    function iniciarMusica() {
      audio.play().catch(function (error) {
        console.log('Autoplay bloqueado:', error);
      });

      document.removeEventListener('click', iniciarMusica);
    }

    document.addEventListener('click', iniciarMusica);
  });
