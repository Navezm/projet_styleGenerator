// // PARTIE CREATION & STYLE
// Déclaration des éléments uniques & style
let body = document.body;
body.style.marginLeft = "5%";
body.style.marginRight = "5%";
body.style.marginTop = "0%";

let script = document.querySelector("script");

let titre = document.createElement("h1");
titre.innerHTML = "Le Dom - Exo: StyleGenerator";
titre.style.backgroundColor = "#2F91F4";
titre.style.margin = "0%";
titre.style.fontSize = "4rem";

let hr = document.createElement("hr");
hr.style.backgroundColor = "purple";
hr.style.height = "1px";
hr.style.marginTop = "20px";
hr.style.marginBottom = "20px";

body.prepend(titre, hr);

let reset = document.createElement("button");
reset.innerHTML = "RESET";
reset.style.margin = "2%";
reset.style.marginLeft = "0%";
reset.style.backgroundColor = "#D6D4D4";
reset.style.padding = "1.2%"
reset.style.borderRadius = "10px";
reset.style.border = "none";
reset.style.fontSize = "1.3rem";
body.appendChild(reset);

// Rangée 1 boutton // Création
let div1 = document.createElement("div");
div1.style.display = "flex";
div1.style.alignItems = "center";
body.insertBefore(div1, script);
let button;
for (let i = 0; i < 10; i++) {
    button = document.createElement("button");
    button.style.marginRight = "1%";
    button.style.width = "50px";
    button.style.height = "50px";
    button.setAttribute("class", "button1");
    div1.appendChild(button);
};

// Rangée 1 boutton // Style
let buttonS = document.getElementsByClassName("button1");
for (let i = 0; i < buttonS.length; i++) {
    buttonS[i].style.borderRadius = "5px";
    buttonS[i].style.border = "none";
    buttonS[i].style.backgroundColor = "white";
};
// Groupe 1
buttonS[0].style.backgroundColor = "#D6D4D4";
buttonS[0].innerHTML = "W";
buttonS[0].style.fontSize = "1.5rem";
buttonS[0].classList.add("bgC");

buttonS[1].style.backgroundColor = "red";
buttonS[1].innerHTML = "R";
buttonS[1].style.fontSize = "1.5rem";
buttonS[1].classList.add("bgC");

buttonS[2].style.backgroundColor = "green";
buttonS[2].innerHTML = "G";
buttonS[2].style.fontSize = "1.5rem";
buttonS[2].classList.add("bgC");

buttonS[3].style.backgroundColor = "blue";
buttonS[3].innerHTML = "B";
buttonS[3].style.fontSize = "1.5rem";
buttonS[3].classList.add("bgC");

// Groupe 2
buttonS[4].style.height = "35px";
buttonS[4].style.border = "4px solid black";
buttonS[4].classList.add("border_btn");

buttonS[5].style.height = "35px";
buttonS[5].style.border = "4px dashed black";
buttonS[5].classList.add("border_btn");

buttonS[6].style.height = "35px";
buttonS[6].style.border = "1px solid black";
buttonS[6].classList.add("border_btn");

// Groupe 3
buttonS[7].style.backgroundColor = "#EEEEEE";   
buttonS[7].innerHTML = "top"; 
buttonS[7].style.fontSize = "1.5rem";
buttonS[7].setAttribute("id", "remove");

// Groupe4
buttonS[8].style.borderTop = "3px solid red";    
buttonS[8].innerHTML = "top";
buttonS[8].style.fontSize = "1.5rem";
buttonS[8].classList.add("taille_border");

buttonS[9].style.borderTop = "7px solid red";   
buttonS[9].innerHTML = "top";
buttonS[9].style.fontSize = "1.5rem";
buttonS[9].classList.add("taille_border");

// Rangée 2 boutton // Création
let div2 = document.createElement("div");
div2.style.marginTop = "3%";
div2.style.display = "flex";
div2.style.alignItems = "center";
body.insertBefore(div2, script);
let colorPick = document.createElement("input");
colorPick.setAttribute("type", "color");
colorPick.style.width = "200px";
colorPick.style.height = "40px";
colorPick.style.marginRight = "1%";
div2.appendChild(colorPick);
let button2;
for (let i = 0; i < 5; i++) {
    button2 = document.createElement("button");
    button2.style.marginRight = "1%";
    button2.style.width = "50px";
    button2.style.height = "50px";
    button2.setAttribute("class", "button2");
    div2.appendChild(button2);
};

// Rangée 2 boutton // Style
let button2S = document.getElementsByClassName("button2");
for (let i = 0; i < button2S.length; i++) {
    button2S[i].style.backgroundColor = "white";
    button2S[i].style.border = "1px solid grey";
    if(i == 0){
        button2S[i].style.border = "4px solid black";
    } else if(i == 1){
        button2S[i].style.borderTop = "4px solid black";
    } else if(i == 2){
        button2S[i].style.borderRight = "4px solid black";
    } else if(i == 3){
        button2S[i].style.borderBottom = "4px solid black";
    } else if(i == 4){
        button2S[i].style.borderLeft = "4px solid black";
    };
};

// Rangée 3 boutton // Création
let div3 = document.createElement("div");
div3.style.marginTop = "3%";
body.insertBefore(div3, script);
let button3;
for (let i = 0; i < 5; i++) {
    button3 = document.createElement("button");
    button3.style.marginRight = "1%";
    button3.style.width = "50px";
    button3.style.height = "50px";
    button3.setAttribute("class", "button3");
    div3.appendChild(button3);
};

// Rangée 3 boutton // Style
let button3S = document.getElementsByClassName("button3");
for (let i = 0; i < button3S.length; i++) {
    button3S[i].style.backgroundColor = "white";
    button3S[i].style.border = "1px solid grey";
    if(i == 0){
        button3S[i].style.borderRadius = "10px";
    } else if(i == 1){
        button3S[i].style.borderRadius = "10px 0px 0px 0px";
    } else if(i == 2){
        button3S[i].style.borderRadius = "0px 10px 0px 0px";
    } else if(i == 3){
        button3S[i].style.borderRadius = "0px 0px 10px 0px";
    } else if(i == 4){
        button3S[i].style.borderRadius = "0px 0px 0px 10px";
    };
};

// Div à modifier 
let div4 = document.createElement("div");
div4.style.width = "450px";
div4.style.height = "150px";
div4.style.marginTop = "3%";
body.insertBefore(div4, script);

// // PARTIE EVENT
// Variable nécessaire aux évents
let div4Border;
let buttonBG = document.getElementsByClassName("bgC");
let buttonBorder = document.getElementsByClassName("border_btn");
let buttonSize = document.getElementsByClassName("taille_border");
let remove = document.getElementById("remove");
let borderRadius;

// Event Listener rangée 1
for (let i = 0; i < buttonBG.length; i++) {
    buttonBG[i].addEventListener("click", function(){
        div4.style.backgroundColor = buttonBG[i].style.backgroundColor;
    });
};

for (let i = 0; i < buttonBorder.length; i++) {
    buttonBorder[i].addEventListener("click", function(){
        div4.style.border = buttonBorder[i].style.border;
        div4Border = div4.style.border;
    });
};

remove.addEventListener("click", function(){
    div4.style.border = "none";
});

for (let i = 0; i < buttonSize.length; i++) {
    buttonSize[i].addEventListener("click", function(){
        div4.style.border = div4Border;
        if(i == 0){
            div4.style.borderWidth = "3px";
            div4Border = div4.style.border;
        } else if(i == 1){
            div4.style.borderWidth = "7px";
            div4Border = div4.style.border;
        };
    });
};

// Event Listener rangée 2
for (let i = 0; i < button2S.length; i++) {
    button2S[i].addEventListener("click", function(){
        if(i == 0){
            if(div4.style.borderColor != "black"){
                div4.style.borderColor = "black";
            } else {
                div4.style.borderColor = colorPick.value;
            };
        } else if(i == 1){
            if(div4.style.borderTopColor == "black"){
                div4.style.borderTopColor = colorPick.value;
            } else {
                div4.style.borderTopColor = "black";
            }
        } else if(i == 2){
            if(div4.style.borderRightColor == "black"){
                div4.style.borderRightColor = colorPick.value;
            } else {
                div4.style.borderRightColor = "black";
            }
        } else if(i == 3){
            if(div4.style.borderBottomColor == "black"){
                div4.style.borderBottomColor = colorPick.value;
            } else {
                div4.style.borderBottomColor = "black";
            }
        } else if(i == 4){
            if(div4.style.borderLeftColor == "black"){
                div4.style.borderLeftColor = colorPick.value;
            } else {
                div4.style.borderLeftColor = "black";
            }
        };
        console.log(div4.style.borderRightColor);
    });
};

// Event Listener rangée 3
for (let i = 0; i < button3S.length; i++) {
    button3S[i].addEventListener("click", function(){
        if(i == 0){
            if(div4.style.borderRadius != button3S[i].style.borderRadius){
                div4.style.borderRadius = button3S[i].style.borderRadius;
                borderRadius = div4.style.borderRadius;
            } else {
                div4.style.borderRadius = "initial";
            };
        } else if(i == 1){
            if(div4.style.borderTopLeftRadius != button3S[i].style.borderTopLeftRadius){
                div4.style.borderTopLeftRadius= button3S[i].style.borderTopLeftRadius;
                borderRadius = div4.style.borderRadius;
            } else {
                div4.style.borderTopLeftRadius = "initial";
            };
        } else if(i == 2){
            if(div4.style.borderTopRightRadius != button3S[i].style.borderTopRightRadius){
                div4.style.borderTopRightRadius = button3S[i].style.borderTopRightRadius;
                borderRadius = div4.style.borderRadius;
            } else {
                div4.style.borderTopRightRadius = "initial";
            };
        } else if(i == 3){
            if(div4.style.borderBottomRightRadius != button3S[i].style.borderBottomRightRadius){
                div4.style.borderBottomRightRadius = button3S[i].style.borderBottomRightRadius;
                borderRadius = div4.style.borderRadius;
            } else {
                div4.style.borderBottomRightRadius = "initial";
            };
        } else if(i == 4){
            if(div4.style.borderBottomLeftRadius != button3S[i].style.borderBottomLeftRadius){
                div4.style.borderBottomLeftRadius = button3S[i].style.borderBottomLeftRadius;
                borderRadius = div4.style.borderRadius;
            } else {
                div4.style.borderBottomLeftRadius = "initial";
            };
        };
    });
};

// Event Reset
reset.addEventListener("click", function(e){
    e.stopPropagation();
    div4.style.backgroundColor = "white";
    div4.style.border = "none";
    div4.style.borderRadius = "0%";
});