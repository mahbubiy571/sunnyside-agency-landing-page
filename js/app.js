const showBtn = document.querySelector('#show-btn');
const hiddenNav = document.querySelector(".header__hidden");
const showBtnImage = document.querySelector("#show-btn__image");

let ChangeImage = false;
showBtn.addEventListener("click", () => {
    hiddenNav.classList.toggle("show");
    document.body.style.overflowY = "hidden";
    if(ChangeImage) {
        console.log(ChangeImage);
        showBtnImage.src = "../assets/icon-hamburger.svg" ;
    } else {
        console.log(ChangeImage);
        showBtnImage.src = "../assets/pic-menu.svg" ;
    }

    ChangeImage = !ChangeImage;
});