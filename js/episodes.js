const switchLayout = () => {
    const layoutBtn = document.querySelector('#episodes-page-layout');
    const tilesLayout = document.querySelector(".tiles");


    layoutBtn.addEventListener('click', () => {

        layoutBtn.classList.toggle('toggle')
        tilesLayout.classList.toggle('toggle')

    });
};


function myFunction(x) {
    const tilesLayout = document.querySelector(".tiles");
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)

    if(vw < 800) {
        tilesLayout.classList.remove('toggle');
    }

        /*if (x.matches) { // If media query matches
        tilesLayout.classList.remove('toggle');
        document.getElementById('episodes-page-layout').
    } else {

    }*/
}

const x = window.matchMedia("(max-width: 800px)");
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes

switchLayout();
