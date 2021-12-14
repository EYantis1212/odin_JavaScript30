const divs = document.querySelectorAll("div");

function logText(e) {
    console.log(this.classList.value);
    // e.stopPropagation(); // Stop triggering parents
}
divs.forEach((div) =>
    div.addEventListener("click", logText, {
        capture: false,
        once: true, //listened for a click then unbound the event listener
        // This is useful in store checkouts to prevent someone from hitting the button to complete the transaction more than once,
    })
);
