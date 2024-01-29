const flex_2 = document.querySelector(".flex_2");
const links = document.querySelector(".links");


flex_2.addEventListener("click", () => {
    links.classList.toggle("active");
    flex_2.classList.toggle("share_active");
    console.log(links);
});

console.log(links.classList);