const menuBtn=document.getElementById("menu_btn");
const navLinks=document.getElementById("nav_links");
const menuBtnIcon=menuBtn.querySelector('i');


menuBtn.addEventListener("click",(e)=>{
navLinks.classList.toggle("open");

const isOpen=navLinks.classList.contains("open");
menuBtnIcon.setAttribute("class",isOpen ? "ri-close-line":"ri-menu-line")
})


const scrollRevealOption={
    distance: "50px",
    origin: "bottom",
    duration:1000,
}
//header container
ScrollReveal().reveal(".header_content h1",{
    ...scrollRevealOption,
});
ScrollReveal().reveal(".header_content p",{
    ...scrollRevealOption,
    delay:500,
});
ScrollReveal().reveal(".header_btn",{
    ...scrollRevealOption,
    delay:1000,
});
ScrollReveal().reveal(".header_image img",{
    ...scrollRevealOption,
    delay:1500,
});
// dish container
ScrollReveal().reveal(".dish_card",{
    ...scrollRevealOption,
    interval:500,
});
//info container
ScrollReveal().reveal(".information_image image",{
    ...scrollRevealOption,
});
ScrollReveal().reveal(".information_content h1",{
    ...scrollRevealOption,
    delay:500,
});
ScrollReveal().reveal(".information_list",{
    ...scrollRevealOption,
    delay:1000,
});
ScrollReveal().reveal(".information_btn ",{
    ...scrollRevealOption,
    delay:1500,
});
//offer container
ScrollReveal().reveal(".offer_header",{
    ...scrollRevealOption,
});
ScrollReveal().reveal(".offer_subheader",{
    ...scrollRevealOption,
    delay:500,
});
ScrollReveal().reveal(".offer_image",{
    ...scrollRevealOption,
    delay:1000,
});

