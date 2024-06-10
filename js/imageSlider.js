function createCarousel(listImageSelector, interval = 4000) {
    const listImage = document.querySelector(listImageSelector);
    // const listImage = container.querySelector('.list-images');
    const imgs = listImage.querySelectorAll('img');
    let currentIndex = 0;

    function updateCarousel() {
        let width = imgs[0].offsetWidth;
        listImage.style.transform = `translateX(${-width * currentIndex}px)`;
    }

    setInterval(() => {
        currentIndex = (currentIndex + 1) % imgs.length;
        updateCarousel();
    }, interval);

    const btnLeft = listImage.parentElement.querySelector('.btn-left');
    const btnRight = listImage.parentElement.querySelector('.btn-right');

    btnLeft.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + imgs.length) % imgs.length;
        updateCarousel();
    });

    btnRight.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % imgs.length;
        updateCarousel();
    });
}

document.addEventListener('DOMContentLoaded', () => {
    let carousels = document.querySelectorAll('.list-images');
    carousels.forEach((carousel) => {
        createCarousel(`.${carousel.className.split(' ').join('.')}`);
    });
});


function createCarouselRow3(containerSelector, visibleItems = 6, interval = 6000) {
    const container = document.querySelector(containerSelector);
    const listImage = container.querySelector('.list-images');
    const imgs = listImage.querySelectorAll('.col3');
    let currentIndex = 0;
    const imgWidth = imgs[0].offsetWidth + 20; // width of each image including margin

    function updateCarousel() {
        listImage.style.transform = `translateX(${-imgWidth * currentIndex}px)`;
    }

    const btnLeft = container.querySelector('.btn-left');
    const btnRight = container.querySelector('.btn-right');

    btnLeft.addEventListener('click', () => {
        currentIndex = Math.max(0, currentIndex - 1);
        updateCarousel();
    });
    
    btnRight.addEventListener('click', () => {
        currentIndex = Math.min(imgs.length - 1, currentIndex + 1);
        updateCarousel();
    });
    

    setInterval(() => {
        if (currentIndex + visibleItems < imgs.length) {
            currentIndex += visibleItems;
        } else {
            currentIndex = 0;
        }
        updateCarousel();
    }, interval);
}

document.addEventListener('DOMContentLoaded', () => {
    createCarouselRow3('.row3 .carousel-container');
});


function createCarouselRow4(containerSelector, interval = 4000) {
    const container = document.querySelector(containerSelector);
    const listImage = container.querySelector('.list-images');
    const imgs = listImage.querySelectorAll('img');
    let currentIndex = 0;

    function updateCarousel() {
        let width = imgs[0].offsetWidth + 20; // Lấy chiều rộng của hình ảnh đầu tiên
        listImage.style.transform = `translateX(${-width * currentIndex}px)`;
    }

    setInterval(() => {
        currentIndex = (currentIndex + 1) % imgs.length;
        updateCarousel();
    }, interval);

    const btnLeft = container.querySelector('.btn-left'); // Sử dụng container để tìm nút trái
    const btnRight = container.querySelector('.btn-right'); // Sử dụng container để tìm nút phải

    btnLeft.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + imgs.length) % imgs.length;
        updateCarousel();
    });

    btnRight.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % imgs.length;
        updateCarousel();
    });
}

document.addEventListener('DOMContentLoaded', () => {
    createCarouselRow4('.row4');
});


filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}