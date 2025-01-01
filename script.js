// Fireworks animation //
const fireworksContainer = document.querySelector('.fireworks');

function createFirework() {
    const firework = document.createElement('div');
    firework.classList.add('firework');
    firework.style.position = 'absolute';
    firework.style.width = '10px';
    firework.style.height = '10px';
    firework.style.backgroundColor = 'rgba(255, 204, 0, 0.8)';
    firework.style.borderRadius = '50%';
    firework.style.top = Math.random() * 100 + 'vh';
    firework.style.left = Math.random() * 100 + 'vw';
    fireworksContainer.appendChild(firework);

    setTimeout(() => {
        firework.remove();
    }, 1000);
}

setInterval(createFirework, 500);
