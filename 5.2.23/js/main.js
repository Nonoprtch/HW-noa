const $ = { /*creer le html dans le js*/
    input: document.createElement("input"),
    btn: document.createElement("button"),
    main: document.getElementById("main"),
    keypad: document.getElementById("keypad"),
    btn0: document.createElement("button"),
    btn1: document.createElement("button"),
    btn2: document.createElement("button"),
    btn3: document.createElement("button"),
    btn4: document.createElement("button"),
    btn5: document.createElement("button"),
    btn6: document.createElement("button"),
    btn7: document.createElement("button"),
    btn8: document.createElement("button"),
    btn9: document.createElement("button"),
    img: document.createElement("img")


}
/*declare les variabes*/
let code = ""
let tryCode = ""
var nbClickedBtn = 0;
var nbTentative = 0;
var listeElement = []
var timeOutId;
init()

function init() {

    $.main.append($.input, $.btn)
    $.btn.innerText = "Enter";
    $.input.placeholder = "Enter your password";

    $.btn.addEventListener("click", callback);

}

function callback() {


    code = $.input.value;
    console.log(!isNaN(code));
    if (code.length == 4 && !isNaN(code)) {
        var row1 = document.createElement("div");
        var row2 = document.createElement("div");
        var row3 = document.createElement("div");
        var row4 = document.createElement("div");
        $.main.remove()
        $.keypad.append(row1, row2, row3, row4)
        row1.append($.btn1, $.btn2, $.btn3);
        row2.append($.btn4, $.btn5, $.btn6);
        row3.append($.btn7, $.btn8, $.btn9);
        row4.append($.btn0);
        row1.className = "row";
        row2.className = "row";
        row3.className = "row";
        row4.className = "row";
        $.btn0.className = "col";
        $.btn1.className = "col";
        $.btn2.className = "col";
        $.btn3.className = "col";
        $.btn4.className = "col";
        $.btn5.className = "col";
        $.btn6.className = "col";
        $.btn7.className = "col";
        $.btn8.className = "col";
        $.btn9.className = "col";

        $.btn1.innerText = "1";
        $.btn2.innerText = "2";
        $.btn3.innerText = "3";
        $.btn4.innerText = "4";
        $.btn5.innerText = "5";
        $.btn6.innerText = "6";
        $.btn7.innerText = "7";
        $.btn8.innerText = "8";
        $.btn9.innerText = "9";
        $.btn0.innerText = "0";
        $.btn1.addEventListener("click", verif);
        $.btn2.addEventListener("click", verif);
        $.btn3.addEventListener("click", verif);
        $.btn4.addEventListener("click", verif);
        $.btn5.addEventListener("click", verif);
        $.btn6.addEventListener("click", verif);
        $.btn7.addEventListener("click", verif);
        $.btn8.addEventListener("click", verif);
        $.btn9.addEventListener("click", verif);
        $.btn0.addEventListener("click", verif);
    }
    else {
        console.log("Error ");
    }
}

function verif(obj) {
    nbClickedBtn++;
    tryCode += obj.currentTarget.innerText;
    obj.currentTarget.style.backgroundColor = randomColor() 
    listeElement.push(obj.currentTarget);

    clearTimeout(timeOutId)
    timeOutId = timer();

    // tryCode = tryCode + obj.currentTarget.innerText;
    setTimeout(function() {
        if (nbClickedBtn == 4) {
            nbClickedBtn = 0;
            nbTentative++
            if (tryCode == code) {
                alert("success")
    
            } else if (nbTentative === 3) {
                alert("The police is coming!") 

                $.keypad.remove()

                $.img.src = "./img/R.jpg"
                document.body.append($.img)

            }
            else {
                alert("try again")
            }
            tryCode = "";
            reinitialisationBtn();
    
        } 
    },100)

}

function randomColor() {
    let randColor = "#" + Math.floor(Math.random()*16777215).toString(16); /*base exadecimal*/
    return randColor;    
}

function reinitialisationBtn() {
    listeElement.forEach(element => { /*paecourt les elements du tableau*/
        element.style.backgroundColor = "white"
    });
    listeElement = []
}
function timer() {
    return setTimeout(function() {
        reinitialisationBtn()
        nbClickedBtn = 0
    },3000)
}