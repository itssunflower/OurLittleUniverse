/* ── STARRY NIGHT BACKGROUND ── */
const initStars = () => {
  const canvas = document.createElement('canvas');
  canvas.id = 'stars-canvas';
  document.body.appendChild(canvas);
  const ctx = canvas.getContext('2d');

  let width, height, stars = [];

  const resize = () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  };

  window.addEventListener('resize', resize);
  resize();

  for (let i = 0; i < 150; i++) {
    stars.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.5,
      opacity: Math.random(),
      speed: Math.random() * 0.02
    });
  }

  const draw = () => {
    ctx.clearRect(0, 0, width, height);
    stars.forEach(star => {
      ctx.fillStyle = `rgba(230, 217, 255, ${star.opacity})`;
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
      ctx.fill();

      star.opacity += star.speed;
      if (star.opacity > 1 || star.opacity < 0) star.speed *= -1;
    });
    requestAnimationFrame(draw);
  };
  draw();
};

/* ── HEART BURST EFFECT ── */
const createHeartBurst = (e) => {
  const emojis = ['💜', '✨', '🌸', '💖'];
  for (let i = 0; i < 15; i++) {
    const heart = document.createElement('div');
    heart.className = 'heart-particle';
    heart.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    
    // Position at click or center
    const x = e ? e.clientX : window.innerWidth / 2;
    const y = e ? e.clientY : window.innerHeight / 2;
    
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';
    heart.style.setProperty('--x', (Math.random() - 0.5) * 300 + 'px');
    heart.style.setProperty('--y', (Math.random() - 0.5) * 300 + 'px');
    heart.style.fontSize = Math.random() * 20 + 10 + 'px';
    
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 2000);
  }
};

/* ── PAGE TRANSITIONS ── */
const navigateTo = (url) => {
  document.body.style.opacity = '0';
  setTimeout(() => {
    window.location.href = url;
  }, 800);
};

// Initialize on load
window.onload = () => {
  initStars();
  document.body.style.opacity = '1';
};