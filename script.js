let aboutBtn = document.querySelector(".about")
let resumeBtn = document.querySelector(".resume")
let projectBtn = document.querySelector(".project")
let contactBtn = document.querySelector(".contact")

let aboutPage = document.querySelector(".about_page")
let resumePage = document.querySelector(".resume_page")
let projectPage = document.querySelector(".project_page")
let contactPage = document.querySelector(".contact_page")

aboutBtn.addEventListener("click", () => {

    aboutBtn.classList.add("btn_color");
    resumeBtn.classList.remove("btn_color");
    projectBtn.classList.remove("btn_color");
    contactBtn.classList.remove("btn_color");

    aboutPage.style.display = "flex";
    aboutPage.style.zIndex = 1;

    projectPage.style.display = "none";
    resumePage.style.display = "none";
    contactPage.style.display = "none";

})

resumeBtn.addEventListener("click", () => {

    resumeBtn.classList.add("btn_color");
    aboutBtn.classList.remove("btn_color");
    projectBtn.classList.remove("btn_color");
    contactBtn.classList.remove("btn_color");

    resumePage.style.display = "flex";
    resumePage.style.zIndex = 1;

    projectPage.style.display = "none";
    aboutPage.style.display = "none";
    contactPage.style.display = "none";

})

projectBtn.addEventListener("click", () => {

    projectBtn.classList.add("btn_color");
    aboutBtn.classList.remove("btn_color");
    resumeBtn.classList.remove("btn_color");
    contactBtn.classList.remove("btn_color");

    projectPage.style.display = "flex";
    projectPage.style.zIndex = 1;

    resumePage.style.display = "none";
    aboutPage.style.display = "none";
    contactPage.style.display = "none";

})

contactBtn.addEventListener("click", () => {

    contactBtn.classList.add("btn_color");
    aboutBtn.classList.remove("btn_color");
    projectBtn.classList.remove("btn_color");
    resumeBtn.classList.remove("btn_color");

    contactPage.style.display = "flex";
    contactPage.style.zIndex = 1;

    projectPage.style.display = "none";
    aboutPage.style.display = "none";
    resumePage.style.display = "none";

})






// let buttons = {
//     about: document.querySelector(".about"),
//     resume: document.querySelector(".resume"),
//     project: document.querySelector(".project"),
//     contact: document.querySelector(".contact"),
// };

// let pages = {
//     about: document.querySelector(".about_page"),
//     resume: document.querySelector(".resume_page"),
//     project: document.querySelector(".project_page"),
//     contact: document.querySelector(".contact_page"),
// };

// // Function to activate the selected button and show the corresponding page
// function activateSection(section) {
//     Object.keys(buttons).forEach((key) => {
//         if (key === section) {
//             buttons[key].classList.add("btn_color");
//             pages[key].style.display = "flex";
//             pages[key].style.zIndex = 1;
//         } else {
//             buttons[key].classList.remove("btn_color");
//             pages[key].style.display = "none";
//         }
//     });
// }

// // Event listeners
// Object.keys(buttons).forEach((key) => {
//     buttons[key].addEventListener("click", () => activateSection(key));
// });


// let buttons = [document.querySelector(".about"), document.querySelector(".resume"), document.querySelector(".project"), document.querySelector(".contact")];
// let pages = [document.querySelector(".about_page"), document.querySelector(".resume_page"), document.querySelector(".project_page"), document.querySelector(".contact_page")];

// // Function to activate the selected button and show the corresponding page
// function activateSection(index) {
//     buttons.forEach((btn, i) => {
//         if (i === index) {
//             btn.classList.add("btn_color");
//             pages[i].style.display = "flex";
//             pages[i].style.zIndex = 1;
//         } else {
//             btn.classList.remove("btn_color");
//             pages[i].style.display = "none";
//         }
//     });
// }

// // Add event listeners to buttons
// buttons.forEach((btn, index) => {
//     btn.addEventListener("click", () => activateSection(index));
// });




// let bar = document.querySelectorAll(".skill_pers_bar")
// let text = document.querySelectorAll(".skill_pers_text")
// text.forEach(function(e){
//     console.log(e.innerHTML)
//     })

//     bar.forEach(function(b){
//         console.log(b)
//     })

    


// bar.forEach(function(e){
//     console.log(e.getAttribute("style"))

//     let tl = gsap.timeline()
    
//     tl.to(e,{
//         width : "100%",
//         delay : 5,
//         // clutter : 2,
//     })
// })


// let tl = gsap.timeline()
    
// tl.to(bar,{
//     width : "100%",
//     duration : 2,
//     delay : 5,
//     // clutter : 2,
// })




let bars = document.querySelectorAll(".skill_pers_bar");
let texts = document.querySelectorAll(".skill_pers_text");






window.addEventListener("scroll",()=>{
    if(window.pageYOffset > 700) {

        bars.forEach((bar, index) => {
            let percentage = parseInt(texts[index].innerText); // Get number from text
            if (!isNaN(percentage)) {
                gsap.to(bar, {
                    width: `${percentage}%`, // Set width based on the number
                    duration: 2, // Animation duration
                    // delay: 5, // Start after 1 second
                    ease: "linear",
                });
            }
            // console.log(bar,index)
            // console.log(percentage)
        });

    }
})
