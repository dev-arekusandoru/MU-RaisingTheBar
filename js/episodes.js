// toggle classes to change layout
const switchLayout = () => {
    // get layout button and tiles div
    const layoutBtn = document.querySelector('#episodes-page-layout');
    const tilesLayout = document.querySelector(".tiles");

    //when the button is clicked, add/remove "toggle" from class list of the button and tiles div
    layoutBtn.addEventListener('click', () => {

        layoutBtn.classList.toggle('toggle')
        tilesLayout.classList.toggle('toggle')

    });
};
switchLayout();


// gets screen width as it changes, and changes view back to grid when the screen is too small to show the list view
function myFunction(x) {
    const tilesLayout = document.querySelector(".tiles");
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)

    if (vw < 800) {
        tilesLayout.classList.remove('toggle');
    }
}

const x = window.matchMedia("(max-width: 800px)");
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes

