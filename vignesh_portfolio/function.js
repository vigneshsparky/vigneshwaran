// const menubt = document.querySelector("menu_bt");
// const addclass = document.querySelector("header div");
// menubt.addEventListener("click", () => {
//   addclass.classList.toggle("showmenu");
// });

function showmenu() {
  let list = document.getElementsByClassName("lists");
  for (let i = 0; i < list.length; i++) {
    list[i].classList.toggle("show");
  }
}

function change() {
  let list = document.getElementsByClassName("lists");
  for (let i = 0; i < list.length; i++) {
    list[i].classList.toggle("change");
  }
}

// function scrollToHalf() {
//   // const home = document.getElementById("skills");
//   // const half = window.innerHeight / 2;
//   // window.scrollTo({
//   //   top: home.offsetTop - half,
//   //   behavior: "smooth",
//   // });

//   // Define the target element
//   const homeSection = document.getElementById("skills");

//   // Create an Intersection Observer
//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         // Element is in viewport, scroll to half
//         scrollToHalf();
//       }
//     });
//   });

//   // Start observing the target element
//   observer.observe(homeSection);
// }

// // Define the target element
// const homeSection = document.getElementById("skills");

// // Create an Intersection Observer
// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       // Element is in viewport, scroll to half
//       scrollToHalf();
//     }
//   });
// });

// // Start observing the target element
// observer.observe(homeSection);

// academic details
document.addEventListener("DOMContentLoaded", function () {
  const academicDetailsLink = document.getElementById("academic");
  const academicDetailsHeading = document.getElementById("acad");

  academicDetailsLink.addEventListener("mouseover", function (event) {
    event.preventDefault();
    const yOffset =
      academicDetailsHeading.getBoundingClientRect().top + window.scrollY;
    const middleOfWindow = window.innerHeight / 3;
    const scrollToY = yOffset - middleOfWindow;
    window.scrollTo({
      top: scrollToY,
      behavior: "smooth",
    });
  });
});

//Home start - scroll
document.addEventListener("DOMContentLoaded", function () {
  const academicDetailsLink = document.getElementById("homee");
  const academicDetailsHeading = document.getElementById("Home");

  academicDetailsLink.addEventListener("click", function (event) {
    event.preventDefault();
    const yOffset =
      academicDetailsHeading.getBoundingClientRect().top + window.scrollY;
    const middleOfWindow = window.innerHeight / 2;
    const scrollToY = yOffset - middleOfWindow;
    window.scrollTo({
      top: scrollToY,
      behavior: "smooth",
    });
  });
});
//Home end - scroll

// about me start - scroll
document.addEventListener("DOMContentLoaded", function () {
  const academicDetailsLink = document.getElementById("about");
  const academicDetailsHeading = document.getElementById("aboutt");

  academicDetailsLink.addEventListener("click", function (event) {
    event.preventDefault();
    const yOffset =
      academicDetailsHeading.getBoundingClientRect().top + window.scrollY;
    const middleOfWindow = window.innerHeight / 2;
    const scrollToY = yOffset - middleOfWindow;
    window.scrollTo({
      top: scrollToY,
      behavior: "smooth",
    });
  });
});
// about me end - scroll

// skills start - scroll
document.addEventListener("DOMContentLoaded", function () {
  const academicDetailsLink = document.getElementById("skill");
  const academicDetailsHeading = document.getElementById("skills");

  academicDetailsLink.addEventListener("click", function (event) {
    event.preventDefault();
    const yOffset =
      academicDetailsHeading.getBoundingClientRect().top + window.scrollY;
    const middleOfWindow = window.innerHeight / 2;
    const scrollToY = yOffset - middleOfWindow;
    window.scrollTo({
      top: scrollToY,
      behavior: "smooth",
    });
  });
});
// skills end - scroll

//Projects start - scroll
document.addEventListener("DOMContentLoaded", function () {
  const academicDetailsLink = document.getElementById("project");
  const academicDetailsHeading = document.getElementById("projects");

  academicDetailsLink.addEventListener("click", function (event) {
    event.preventDefault();
    const yOffset =
      academicDetailsHeading.getBoundingClientRect().top + window.scrollY;
    const middleOfWindow = window.innerHeight / 2;
    const scrollToY = yOffset - middleOfWindow;
    window.scrollTo({
      top: scrollToY,
      behavior: "smooth",
    });
  });
});
//Projects end - scroll

//Contact start - scroll
document.addEventListener("DOMContentLoaded", function () {
  const academicDetailsLink = document.getElementById("contactt");
  const academicDetailsHeading = document.getElementById("contact");

  academicDetailsLink.addEventListener("click", function (event) {
    event.preventDefault();
    const yOffset =
      academicDetailsHeading.getBoundingClientRect().top + window.scrollY;
    const middleOfWindow = window.innerHeight / 2;
    const scrollToY = yOffset - middleOfWindow;
    window.scrollTo({
      top: scrollToY,
      behavior: "smooth",
    });
  });
});
//Contact end - scroll
