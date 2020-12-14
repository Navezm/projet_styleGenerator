// Déclaration des éléments titre & style
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
buttonS[0].style.backgroundColor = "#D6D4D4";
buttonS[0].innerHTML = "W";
buttonS[0].style.fontSize = "1.5rem";

buttonS[1].style.backgroundColor = "red";
buttonS[1].innerHTML = "R";
buttonS[1].style.fontSize = "1.5rem";

buttonS[2].style.backgroundColor = "green";
buttonS[2].innerHTML = "G";
buttonS[2].style.fontSize = "1.5rem";

buttonS[3].style.backgroundColor = "blue";
buttonS[3].innerHTML = "B";
buttonS[3].style.fontSize = "1.5rem";

buttonS[4].style.height = "35px";
buttonS[4].style.border = "4px solid black";

buttonS[5].style.height = "35px";
buttonS[5].style.border = "4px dashed black";

buttonS[6].style.height = "35px";
buttonS[6].style.border = "1px solid black";

buttonS[7].style.backgroundColor = "#EEEEEE";    // Ce boutton ci sert à enlever toutes les bordures
buttonS[7].innerHTML = "top"; 
buttonS[7].style.fontSize = "1.5rem";

buttonS[8].style.borderTop = "3px solid red";    // Celui-ci pour changer l'épaisseur de la bordure
buttonS[8].innerHTML = "top";
buttonS[8].style.fontSize = "1.5rem";

buttonS[9].style.borderTop = "7px solid red";    // Celui-ci pour changer l'épaisseur de la bordure
buttonS[9].innerHTML = "top";
buttonS[9].style.fontSize = "1.5rem";

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
    }
}

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

// Variable div border
let div4Border;

// Event Listener rangée 1
for (let i = 0; i < buttonS.length; i++) {
    buttonS[i].addEventListener("click", function(e){
        div4.style.border = buttonS[i].style.border;
        div4Border = div4.style.border;
        if(i < 4){
            div4.style.backgroundColor = buttonS[i].style.backgroundColor;
        } else if(i == 8){
            // div4.style.border = "intial";
            div4.style.borderWidth = "3px";
        } else if(i == 9){
            // div4.style.border = "initial";
            div4.style.borderWidth = "7px";
        };
    });
};
// Event Listener rangée 2
colorPick.addEventListener("input", function(e){
    div4.style.borderColor = colorPick.value;
    div4Border = div4.style.border;
});
for (let i = 0; i < button2S.length; i++) {
    button2S[i].addEventListener("click", function(e){
        if(i == 0){
            div4.style.border = div4Border;
            div4.style.borderColor = colorPick.value;
        } else if(i == 1){
            div4.style.borderTop = div4Border;
            div4.style.borderColor = colorPick.value;
            div4.style.borderBottom = "none";
            div4.style.borderLeft = "none";
            div4.style.borderRight = "none";
        } else if(i == 2){
            div4.style.borderRight = div4Border;
            div4.style.borderColor = colorPick.value;
            div4.style.borderBottom = "none";
            div4.style.borderLeft = "none";
            div4.style.borderTop = "none";
        } else if(i == 3){
            div4.style.borderBottom = div4Border;
            div4.style.borderColor = colorPick.value;
            div4.style.borderTop = "none";
            div4.style.borderLeft = "none";
            div4.style.borderRight = "none";
        } else if(i == 4){
            div4.style.borderLeft = div4Border;
            div4.style.borderColor = colorPick.value;
            div4.style.borderTop = "none";
            div4.style.borderBottom = "none";
            div4.style.borderRight = "none";
        };
    });
};

// Event Listener rangée 3
for (let i = 0; i < button3S.length; i++) {
    button3S[i].addEventListener("click", function(e){
        div4.style.borderRadius = button3S[i].style.borderRadius;
    });
};