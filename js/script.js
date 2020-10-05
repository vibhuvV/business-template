$(function () {
  $(document).scroll(function () {
    var $nav = $(".fixed-top");
    $nav
      .toggleClass("bg-light", $(this).scrollTop() > $nav.height())
      .toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});

const navItemsNodeList = document.querySelectorAll("ul#navmenu li a");
const navItems = Array.apply(null, navItemsNodeList);

window.addEventListener("scroll", (event) => {
  // Home
  if (window.scrollY >= 0 && window.scrollY < 684) {
    navItems[0].classList.add("active");
  } else {
    navItems[0].classList.remove("active");
  }

  // Services
  if (window.scrollY >= 684 && window.scrollY < 1140) {
    navItems[1].classList.add("active");
  } else {
    navItems[1].classList.remove("active");
  }

  // About Us
  if (window.scrollY >= 1140 && window.scrollY < 1539) {
    navItems[2].classList.add("active");
  } else {
    navItems[2].classList.remove("active");
  }

  // Contact Us
  if (window.scrollY >= 1539 && window.scrollY < 1847) {
    navItems[3].classList.add("active");
  } else {
    navItems[3].classList.remove("active");
  }
});
