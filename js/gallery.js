const scroll = () => {
    // get the right and left arrows
    const left = document.querySelector('#left-arrow-btn');
    const right = document.querySelector('#right-arrow-btn');

    // get the width of the scroll pane
    const Element = document.querySelector('#scroll-pane');
    var elementWidth = Element.getBoundingClientRect().width;

    // counter tracks which element is hidden
    // cstring stores the id of the element to hide/show
    var counter = 0;
    var cstring;

    // when the left arrow is clicked, if there are elements still hidden,
    // show the next element
    left.addEventListener('click', () => {
        if (counter > 0) {
            document.querySelector(cstring).style.display = "flex";
            counter -= 1;
            cstring = "#g" + counter.toString();
        }
    });

    // when the right arrow is clicked, calculate whether or not to scroll
    // depending on the output, hide the first element to create scrolling effect
    right.addEventListener('click', () => {
        elementWidth = Element.getBoundingClientRect().width;
        var z = Math.floor(elementWidth / 250);


        if (counter < (document.querySelector("#scroll-pane").childElementCount - ( z))) {

            counter += 1;
            cstring = "#g" + counter.toString();

            document.querySelector(cstring).style.display = "none";
        }




    });

};


scroll();