const borderTL = document.getElementById('borderTL');
const borderTR = document.getElementById('borderTR');
const borderBL = document.getElementById('borderBL');
const borderBR = document.getElementById('borderBR');
const box = document.getElementById('box');
const unidade = document.getElementById('unidade');
const code = document.getElementById('code');
const cssprop = document.getElementById('cssprop');
let topleft = 0,
    topright = 0,
    bottomleft = 0,
    bottomright = 0;

let unit = unidade.value;
console.log(box);

unidade.onchange = () => {
    unit = unidade.value;
    changeBorders(topleft, topright, bottomleft, bottomright, unit);
}

borderTL.oninput = function() {
    let number = borderTL.value;
    topleft = number;
    changeBorders(number, topright, bottomleft, bottomright, unit);
}

borderTR.oninput = function() {
    let number = borderTR.value;
    topright = number;
    changeBorders(topleft, number, bottomleft, bottomright, unit);
}

borderBL.oninput = function() {
    let number = borderBL.value;
    bottomleft = number;
    changeBorders(topleft, topright, number, bottomright, unit);
}

borderBR.oninput = function() {
    let number = borderBR.value;
    bottomright = number;
    changeBorders(topleft, topright, bottomleft, number, unit);
}

function changeBorders(topleft, topright, bottomleft, bottomright, unit) {
    box.style.borderTopLeftRadius = topleft + unit;
    box.style.borderBottomRightRadius = bottomright + unit;
    box.style.borderBottomLeftRadius = bottomleft + unit;
    box.style.borderTopRightRadius = topright + unit;
    cssprop.innerText = 'border-radius: ' + topleft + unit + ' ' + topright + unit + ' ' + bottomright + unit + ' ' + bottomleft + unit + ';';
}

cssprop.onclick = function() {

    console.log(cssprop.innerText);
    /* Copy the text inside the text field */
    window.navigator.clipboard.writeText(cssprop.innerText);

    /* Alert the copied text */
    alert("Copied the text: " + cssprop.innerText);
}