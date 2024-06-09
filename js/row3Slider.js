// function createCarousel(containerSelector, visibleItems = 6, interval = 2000) {
//     const container = document.querySelector(containerSelector);
//     const listImage = container.querySelector('.list-images');
//     const imgs = listImage.querySelectorAll('.col3');
//     let currentIndex = 0;
//     const imgWidth = imgs[0].offsetWidth + 20; // width of each image including margin

//     function updateCarousel() {
//         listImage.style.transform = `translateX(${-imgWidth * currentIndex}px)`;
//     }

//     const btnLeft = container.querySelector('.btn-left');
//     const btnRight = container.querySelector('.btn-right');

//     btnLeft.addEventListener('click', () => {
//         currentIndex = Math.max(0, currentIndex - visibleItems);
//         updateCarousel();
//     });

//     btnRight.addEventListener('click', () => {
//         if (currentIndex + visibleItems < imgs.length) {
//             currentIndex += visibleItems;
//         } else {
//             currentIndex = imgs.length - visibleItems;
//         }
//         updateCarousel();
//     });

//     setInterval(() => {
//         if (currentIndex + visibleItems < imgs.length) {
//             currentIndex += visibleItems;
//         } else {
//             currentIndex = 0;
//         }
//         updateCarousel();
//     }, interval);
// }

// document.addEventListener('DOMContentLoaded', () => {
//     createCarousel('.row3 .carousel-container');
// });