function showHeart() {
  const heart = document.createElement('div');
  heart.innerText = '💖';
  heart.style.fontSize = `${Math.random() * 20 + 20}px`;
  heart.style.position = 'absolute';
  heart.style.left = `${Math.random() * 100}vw`;
  heart.style.top = `${Math.random() * 100}vh`;
  heart.style.animation = 'float 3s ease-in-out';
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 3000);
}
