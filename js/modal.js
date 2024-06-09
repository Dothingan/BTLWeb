function header__switchModal(showId) {
    document.getElementById(showId).style.display = 'flex';
} 

function switchModal(hideId, showId) {
    document.getElementById(hideId).style.display = 'none';
    document.getElementById(showId).style.display = 'flex';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

function openModal(modalId) {
    document.getElementById(modalId).style.display = 'flex';
}
