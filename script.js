const button = document.getElementById("beginBtn");

const hero = document.getElementById("hero");

const letter = document.getElementById("letter");

let currentPage = 0;

const nextBtn = document.getElementById("nextBtn");

button.addEventListener("click", () => {
        hero.style.display = "none";
        letter.style.display = "flex";
    });

nextBtn.addEventListener("click", () => {
    const current = document.getElementById("page" + currentPage);
    current.style.display = "none";
    currentPage++;
    const next = document.getElementById("page" + currentPage);
    next.style.display = "block";
});