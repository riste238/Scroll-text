let container = document.getElementById('container');

function makeText() {
    let text1 = "This is a firstly text";
    let text2 = "This is a second text";
    let text3 = "This is a thirdly text";

    // create a three arrays, and add them to three container
    let split1 = text1.split('');
    let split2 = text2.split('');
    let split3 = text3.split('');

    let majorArray = [split1, split2, split3];
    return majorArray;
}
// set them in memory
let loop;
let ss;
let i = 0;
let ar = makeText();

function insertTextInsideContainer() {

    if (ar[i].length > 0) {
        container.innerHTML += ar[i].shift();
        loop = setTimeout(insertTextInsideContainer, 100);
    }
    else {
        ss = setTimeout(sleep, 2000);
    }
};
insertTextInsideContainer();

function sleep() {
        i++;
    if (i > 2) {
        i = 0;
        ar = makeText();
    }
    container.innerHTML = "";
    insertTextInsideContainer();
}

