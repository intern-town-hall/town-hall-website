//Modal open/close
const openButton1 = document.querySelector(".open-modal1");

const openButton2 = document.querySelector(".open-modal2");

const openButton3 = document.querySelector(".open-modal3");

const modalContainer = document.querySelector(".modal-container");

const closeButton = document.querySelector(".close-modal");

openButton1.onclick = function () {
    modalContainer.classList.add("show-modal");
    console.log(this.id);
    
};

openButton2.onclick = function () {
    modalContainer.classList.add("show-modal");
    console.log(this.id);
};

openButton3.onclick = function () {
    modalContainer.classList.add("show-modal");
    console.log(this.id);
};

closeButton.onclick = function () {
    modalContainer.classList.remove("show-modal")
};

// // const button = document.querySelectorAll('.button');

// const getButton = document.getElementsByTagName("button");

// getButton.addEventListener("click", function() {
//     console.log("worked!")
// })

// // button.addEventListener('click', doneToggle());

// // function doneToggle(event) {
// //     console.log(this);
// // }