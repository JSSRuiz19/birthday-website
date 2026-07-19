const button = document.getElementById("beginBtn");

const hero = document.getElementById("hero");

const letter = document.getElementById("letter");

let currentPage = 0;

const nextBtn = document.getElementById("nextBtn");

const ending = document.getElementById("ending");

const typewriter = document.getElementById("typewriter");

const endingText =
`Thank you for taking your time to read this. 
I hope this made you smile and feel special. 
Remember that I'll always be here for you if you ever need anything. 
Again, sorry for the hersey bar 🍫

🌹
-Joseph`;

function typeMessage(text){

    typewriter.textContent = "";

    let i = 0;

    const timer = setInterval(() =>{

        typewriter.textContent += text.charAt(i);

        i++;

        if(i >= text.length){

            clearInterval(timer);

        }

    },50);

}


const pageStickers = [

    [
        {src:"1x/NurseStickers/Badge.png", top:"5%", left:"5%"},
        {src:"1x/NurseStickers/HeartTool.png", top:"60%", right:"5%"}
    ],

    [
        {src:"1x/NurseStickers/Lanyard.png", top:"12%", right:"8%"},
        {src:"1x/NurseStickers/Medicine.png", bottom:"10%", left:"6%"}
    ],

    [
        {src:"1x/NurseStickers/Nurse pen.png", top:"15%", left:"8%"},
        {src:"1x/NurseStickers/Pressure.png", bottom:"12%", right:"8%"}
    ],

    [
        {src:"1x/NurseStickers/Scrub.png", top:"8%", right:"6%"},
        {src:"1x/NurseStickers/Shot.png", bottom:"8%", left:"5%"}
    ],

    [
        {src:"1x/NurseStickers/Therm.png", top:"10%", left:"5%"},
        {src:"1x/NurseStickers/Writing.png", bottom:"10%", right:"5%"}
    ]

];


function showStickers(page){

    const container = document.getElementById("stickerContainer");

    container.innerHTML = "";

    pageStickers[page].forEach(sticker =>{

        const img = document.createElement("img");

        img.src = sticker.src;

        img.classList.add("sticker");

        Object.assign(img.style, sticker);

        container.appendChild(img);

    });

}

const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {
    document.getElementById("start").style.display = "none";
    hero.style.display = "flex";
});

button.addEventListener("click", () => {
        hero.style.display = "none";
        letter.style.display = "flex";
        showStickers(0);
    });

nextBtn.addEventListener("click", () => {

    // If we're already on the last page,
    // go to the ending.
    if(currentPage === 4){

        letter.style.display = "none";
        ending.style.display = "flex";

        typeMessage(endingText);

        return;
    }

    const current = document.getElementById("page" + currentPage);
    current.style.opacity = "0";

    setTimeout(() => {

        current.style.display = "none";

        currentPage++;

        const next = document.getElementById("page" + currentPage);

        next.style.display = "block";

        showStickers(currentPage);

        setTimeout(() => {
            next.style.opacity = "1";
        }, 10);

    }, 500);

});