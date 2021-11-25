const scroll = () => {
    const left = document.querySelector('#left-arrow-btn');
    const right = document.querySelector('#right-arrow-btn');

    const Element = document.querySelector('#scroll-pane');
    var elementWidth = Element.getBoundingClientRect().width;

    var counter = 0;
    var cstring;

    left.addEventListener('click', () => {
        if (counter > 0) {
            document.querySelector(cstring).style.display = "flex";

            counter -= 1;
            cstring = "#g" + counter.toString();


        }

    });

    right.addEventListener('click', () => {
        elementWidth = Element.getBoundingClientRect().width;
        var z = Math.floor(elementWidth / 250);
        console.log(elementWidth);
        console.log(z);


        if (counter < (document.querySelector("#scroll-pane").childElementCount - ( z))) {

            counter += 1;
            cstring = "#g" + counter.toString();

            document.querySelector(cstring).style.display = "none";
        }




    });

};


scroll();