document.addEventListener('DOMContentLoaded', () => {
    const endDate = new Date('2027-07-01T00:00:00'); // Data final do contador

    function updateCountdown() {
        const now = new Date();
        const timeDiff = endDate - now;

        if (timeDiff <= 0) {
            document.getElementById('days').querySelector('.value').textContent = '00';
            document.getElementById('hours').querySelector('.value').textContent = '00';
            document.getElementById('minutes').querySelector('.value').textContent = '00';
            document.getElementById('seconds').querySelector('.value').textContent = '00';
            return;
        }

        const seconds = Math.floor(timeDiff / 1000) % 60;
        const minutes = Math.floor(timeDiff / (1000 * 60)) % 60;
        const hours = Math.floor(timeDiff / (1000 * 60 * 60)) % 24;
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

        document.getElementById('days').querySelector('.value').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').querySelector('.value').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').querySelector('.value').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').querySelector('.value').textContent = String(seconds).padStart(2, '0');
    }

    setInterval(updateCountdown, 1000);
    updateCountdown(); // Inicializa imediatamente
});
