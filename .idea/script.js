
document.addEventListener('DOMContentLoaded', () => {
    const dropdownBtn = document.getElementById('dropdown-btn');
    const dropdownMenu = document.getElementById('dropdown-menu');

    // Klick auf "Hier klicken" öffnet/schließt das Menü
    dropdownBtn.addEventListener('click', (event) => {
        event.stopPropagation(); // Verhindert sofortiges Schließen durch den Document-Listener
        dropdownMenu.classList.toggle('hidden');
    });

    // Klick außerhalb schließt das Dropdown wieder automatisch
    document.addEventListener('click', () => {
        if (!dropdownMenu.classList.contains('hidden')) {
            dropdownMenu.classList.add('hidden');
        }
    });
});