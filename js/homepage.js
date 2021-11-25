const scroll = () => {
    const left = document.querySelector('#left-arrow-btn');
    const right = document.querySelector('#right-arrow-btn');
    var counter = 0;
    var cstring;

    left.addEventListener('click', () => {

        if (counter < (document.querySelector("#scroll-pane").childElementCount - 1)) {

            counter += 1;
            cstring = "#e" + counter.toString();

            document.querySelector(cstring).style.display = "none";
        }

    });

    right.addEventListener('click', () => {


        if (counter > 0) {
            document.querySelector(cstring).style.display = "block";

            counter -= 1;
            cstring = "#e" + counter.toString();
        }




    });

};

scroll();