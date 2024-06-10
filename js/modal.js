document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('main1').style.display = 'none';
    document.getElementById('registerModal').style.display = 'none';
    document.getElementById('loginModal').style.display = 'none';
});

// function header__switchModal(showId) {
//     document.getElementById(showId).style.display = 'flex';
// } 

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

function switchPhone(mainId, main1Id) {
    // Ẩn phần tử với id main
    document.getElementById(mainId).style.display = 'none';
    // Hiển thị phần tử với id main1
    document.getElementById(main1Id).style.display = 'flex';
}

