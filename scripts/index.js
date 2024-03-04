const ALLOW_MULTIPLE_POPUPS = false;


// Get elements by their class name and store them in arrays
var popopLinks = document.getElementsByClassName("popup-link");
var popupWindows = document.getElementsByClassName("popup-window");
var closeButtons = document.getElementsByClassName("close-window");



function getIndexInList(item, list) {
    for (let i = 0; i < list.length; i++) {
        if (item === list[i]) {
            return i;            
        }
    }

    console.error("Item '"+item+"' not in list '"+list+"'.");
    return -1;
}


for (let i = 0; i < popopLinks.length; i++) {
    // Show the relevant pop-up window when link is clicked
    popopLinks[i].addEventListener("click", function(event) {
        // Close all other pop-ups before opening new one, depending on setting
        if (ALLOW_MULTIPLE_POPUPS === false) {
            for (let j = 0; j < popupWindows.length; j++) {
                popupWindows[j].style.display = "none";
            }
        }

        event.preventDefault();
        let index = getIndexInList(popopLinks[i], popopLinks)
        popupWindows[index].style.display = "block";
    })

    // Hide the relevant pop-up window when close button is clicked
    closeButtons[i].addEventListener("click", function () {
        let index = getIndexInList(closeButtons[i], closeButtons)
        popupWindows[index].style.display = "none";
    })
}