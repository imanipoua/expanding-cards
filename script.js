const panels = document.querySelectorAll(".panel"); //This puts all the div classes of panels into an array.

//This grabs all the items that are in the array, in this case each panel.
panels.forEach(panel => {
    panel.addEventListener("click", function clickPanel() {
        removeActiveClasses();
        panel.classList.add("active");
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove("active");
    })
}
