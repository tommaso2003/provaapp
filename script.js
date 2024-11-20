/**
 * Applica un filtro di colore su un livello di overlay.
 * @param {string} filterId - ID del livello overlay.
 * @param {string} color - Colore esadecimale da applicare.
 * @param {string} label - Nome del colore da mostrare.
 */
function applyFilter(filterId, color, label) {
    const filter = document.getElementById(filterId);
    const colorLabel = document.getElementById(`color-label${filterId.slice(-1)}`);

    // Applica il colore al livello overlay
    filter.style.backgroundColor = color;

    // Aggiorna il testo dell'indicatore
    colorLabel.textContent = `Filtro attivo: ${label}`;
    colorLabel.style.color = color;
}

/**
 * Rimuove il filtro da un livello di overlay.
 * @param {string} filterId - ID del livello overlay.
 * @param {string} labelId - ID dell'indicatore.
 */
function removeFilter(filterId, labelId) {
    const filter = document.getElementById(filterId);
    const colorLabel = document.getElementById(labelId);

    // Rimuove il colore dal livello overlay
    filter.style.backgroundColor = 'transparent';

    // Ripristina il testo dell'indicatore
    colorLabel.textContent = 'Nessun filtro applicato';
    colorLabel.style.color = '#555';
}
