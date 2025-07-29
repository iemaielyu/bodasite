/* contador de dias */
const targetDate = new Date("2025-10-31T00:00:00").getTime();

  const countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
      clearInterval(countdown);
      document.getElementById("countdown").innerHTML = "¡Es el gran día!";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = String(days).padStart(2, '0');
    document.getElementById("hours").textContent = String(hours).padStart(2, '0');
    document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
    document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
  }, 1000);

/* boton de entrar a la siguiente parte */

  window.addEventListener('load', () => {
    setTimeout(() => {
      const btn = document.getElementById('btnEntrar');
      btn.style.opacity = '1';
      btn.style.pointerEvents = 'auto';
    }, 5500); // Coincide con el tiempo de aparición de las imágenes
  });

  window.addEventListener('DOMContentLoaded', () => {
    if (window.location.hash === "#principal") {
      history.replaceState(null, null, ' ');
      window.scrollTo(0, 0);
    }
  });  

  /*volumen de la cancion de fondo*/
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
