// <!-- 화면 클릭 jquery -->
// $('html').click(function () {
//     alert('클릭')
// })
$(document).on('click', '#menuButton', function () {
    $('#hamburgerMenu').show()
})

// html id 가 있어야 가능
$(document).on('click', '#hamburgerCloseButton', function () {
    $('#hamburgerMenu').hide();
})

var menuButton = document.getElementById("menuButton");
menuButton.addEventListener("click",toggleHamburgerMenu);
var hamburgerCloseButton = document.getElementById("hamburgerCloseButton")
hamburgerCloseButton.addEventListener("click", toggleHamburgerMenu);





// // menuButton.addEventListener("click", function () {
// //     var hamburgerMenu = document.getElementById("hamburgerMenu");
// //     hamburgerMenu.style.display = "block";
// // })

// // 햄버거 메뉴 보이게 하기
// // function showHamburgerMenu() {
// //     var hamburgerMenu = document.getElementById("hamburgerMenu");
// //     hamburgerMenu.style.display = "block";
// // }

// // 햄버거 메유 가리기
// function hidHamburgerMenu() {
//     var hamburgerMenu = document.getElementById("hamburgerMenu");
//     hamburgerMenu.style.display = "none"
// }





// function toggleHamburgerMenu() {
//     var hamburgerMenu = document.getElementById("hamburgerMenu");
//     if (hamburgerMenu.style.display === "none") {
//         hamburgerMenu.style.display = "block";
//     } else {
//         hamburgerMenu.style.display = "none";
//     }
// }




