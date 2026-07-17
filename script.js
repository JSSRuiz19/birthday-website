const button = document.getElementById("beginBtn");

const hero = document.getElementById("hero");

const letter = document.getElementById("letter");

let currentPage = 0;

const nextBtn = document.getElementById("nextBtn");



const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {
    document.getElementById("start").style.display = "none";
    hero.style.display = "flex";
});

button.addEventListener("click", () => {
        hero.style.display = "none";

        letter.style.display = "flex";
    });

nextBtn.addEventListener("click", () => {
    
    if (currentPage < 4){

        const current = document.getElementById("page" + currentPage);
        current.style.opacity = "0";

        setTimeout(() => {
            current.style.display = "none";

            currentPage++;

            const next = document.getElementById("page" + currentPage);
            next.style.display = "block";

            setTimeout(() => {
                next.style.opacity = "1";
            }, 10);

        }, 500);

    }

});