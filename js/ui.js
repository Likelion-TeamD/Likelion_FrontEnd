$(document).ready(function () {
  var id = ['#home', '#guest', '#sale']

  // Get the current URL
  const currentUrl = window.location.pathname;

  // Highlight the current page in the navbar

  
  if (currentUrl === '/index.html') {
    changeColor(id[0])
  }else if (currentUrl === '/pages/guest.html') {
    changeColor(id[1])
  }else if (currentUrl === '/pages/sale.html') {
    changeColor(id[2])
  }
  
});

function changeColor(id) {
  document.querySelector(id).style.color = "#29A99A";
  
  // const colorDiv = $(id);
  // colorDiv.css(".color-custom-click");
  console.log(1)
}

