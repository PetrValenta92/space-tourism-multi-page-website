const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

// when someone clicks the humburger button
navToggle.addEventListener("click", () => {

    
    const visiblity = nav.getAttribute("data-visible");
    // if the nav is closed, open it
    if (visiblity === "false") {
        nav.setAttribute("data-visible", true);
    }   else {
        nav.setAttribute("data-visible", false);
    }

    console.log(visiblity);

    // if the nav is open, close it
})

